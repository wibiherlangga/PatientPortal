// src/lib/services/patientService.js
import { patientHistoryMock } from '$lib/timeline/mocks/patientHistory.mock.js';

const USE_MOCK = import.meta.env.VITE_USE_MOCK === 'true';
const delay = (ms) => new Promise((res) => setTimeout(res, ms));

/**
 * Ambil semua riwayat pasien (ringkasan history per pasien).
 * Mengembalikan array history (per patient: patientId, name, history[]).
 */
export async function fetchHistory({ start = 2024, end = 2026 } = {}) {
  if (USE_MOCK) {
    await delay(120);
    // return the whole mock (could be filtered by year range if needed)
    return patientHistoryMock.map(p => ({
      patientId: p.patientId,
      name: p.name,
      history: p.history.filter(h => h.year >= start && h.year <= end)
    }));
  }

  const url = `/api/patient/history?start=${start}&end=${end}`;
  const r = await fetch(url);
  if (!r.ok) throw new Error('Failed fetching all patient history');
  return await r.json();
}

/**
 * Ambil riwayat satu pasien (semua tahun & bulan)
 */
export async function fetchHistoryByPatient(patientId) {
  if (USE_MOCK) {
    await delay(100);
    const p = patientHistoryMock.find((p) => p.patientId === patientId);
    return p ? p.history : [];
  }

  const r = await fetch(`/api/patient/${patientId}/history`);
  if (!r.ok) throw new Error('Failed fetching patient history');
  return await r.json();
}

/**
 * Ambil detail per bulan untuk satu pasien
 * Kembalian: array records (records may include days[] if available)
 */
export async function fetchHistoryByMonth(patientId, year, month) {
  if (USE_MOCK) {
    await delay(100);
    const p = patientHistoryMock.find((p) => p.patientId === patientId);
    if (!p) return [];
    const y = p.history.find((h) => h.year === year);
    if (!y) return [];
    return y.records.filter((r) => r.month === month);
  }

  const r = await fetch(`/api/patient/${patientId}/history/${year}/${month}`);
  if (!r.ok) throw new Error('Failed fetching month data');
  return await r.json();
}

/**
 * Ambil detail per tanggal (events per jam)
 * Mengembalikan array events (time, action, note)
 */
export async function fetchHistoryByDate(patientId, date) {
  if (USE_MOCK) {
    await delay(100);
    const p = patientHistoryMock.find((p) => p.patientId === patientId);
    if (!p) return [];
    for (const y of p.history) {
      for (const rec of y.records) {
        const foundDay = rec.days?.find((d) => d.date === date);
        if (foundDay) return foundDay.events || [];
      }
    }
    return [];
  }

  const r = await fetch(`/api/patient/${patientId}/history/date/${date}`);
  if (!r.ok) throw new Error('Failed fetching day detail');
  return await r.json();
}

/**
 * Ambil daftar pasien ringkas (untuk dropdown / table)
 */
export async function fetchPatients() {
  if (USE_MOCK) {
    await delay(80);
    return patientHistoryMock.map(({ patientId, name, gender, birthDate, age, photo }) => ({
      patientId, name, gender, birthDate, age, photo
    }));
  }

  const r = await fetch(`/api/patient`);
  if (!r.ok) throw new Error('Failed fetching patients');
  return await r.json();
}

/**
 * Helper: kembalikan daftar tanggal (YYYY-MM-DD) yang punya events untuk patientId
 * Buat bikin quick calendar / highlight di timeline hari
 */
export function getAvailableDates(patientId) {
  const p = patientHistoryMock.find((x) => x.patientId === patientId);
  if (!p) return [];

  const dates = new Set();
  for (const y of p.history) {
    for (const rec of y.records) {
      if (!rec.days) continue;
      for (const d of rec.days) {
        dates.add(d.date);
      }
    }
  }
  // return sorted array
  return Array.from(dates).sort((a, b) => (a > b ? 1 : -1));
}
