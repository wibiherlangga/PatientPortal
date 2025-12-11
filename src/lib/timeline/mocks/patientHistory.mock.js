// src/lib/mocks/patientHistory.mock.js
export const patientHistoryMock = [
  {
    patientId: "P001",
    name: "Ahmad Fauzan",
    gender: "L",
    birthDate: "1989-04-12",
    age: 35,
    photo: "/img/patient1.jpg",

    history: [
      {
        year: 2024,
        records: [
          {
            month: "Jan",
            type: "Rawat Jalan",
            start: "2024-01-03",
            end: "2024-01-03",
            doctor: "dr. Rina",
            diagnosis: "Demam",
            days: [
              {
                date: "2024-01-03",
                summary: "Kontrol demam",
                events: [
                  { time: "09:00", action: "Registrasi", note: "" },
                  { time: "09:30", action: "Konsultasi", note: "Obat antipiretik" }
                ]
              }
            ]
          },
          {
            month: "Mar",
            type: "Gawat Darurat",
            start: "2024-03-15",
            end: "2024-03-16",
            doctor: "dr. Hadi",
            diagnosis: "Sesak Napas",
            days: [
              {
                date: "2024-03-15",
                summary: "Masuk IGD",
                events: [
                  { time: "02:00", action: "Triage", note: "Saturasi 88%" },
                  { time: "02:30", action: "Nebulizer", note: "Perbaikan" }
                ]
              },
              {
                date: "2024-03-16",
                summary: "Observasi",
                events: [
                  { time: "08:00", action: "Visite", note: "Stabil" },
                  { time: "12:00", action: "Rontgen", note: "Hasil normal" }
                ]
              }
            ]
          },
          {
            month: "Jun",
            type: "Radiologi",
            start: "2024-06-20",
            end: "2024-06-20",
            doctor: "dr. Sari",
            diagnosis: "CT Scan Thorax",
            days: [
              {
                date: "2024-06-20",
                summary: "CT Thorax",
                events: [
                  { time: "10:00", action: "CT Scan", note: "Kontras" },
                  { time: "13:00", action: "Ambil hasil", note: "Dikirim via radiologi" }
                ]
              }
            ]
          }
        ]
      },
      {
        year: 2025,
        records: [
          {
            month: "Jan",
            type: "Rawat Inap",
            start: "2025-01-05",
            end: "2025-01-09",
            doctor: "dr. Rina",
            diagnosis: "Tipes",
            days: [
              {
                date: "2025-01-05",
                summary: "Masuk IGD & rawat inap",
                events: [
                  { time: "07:45", action: "Masuk IGD", note: "Demam tinggi, lemas" },
                  { time: "08:15", action: "Cek darah", note: "Ambil sampel laboratorium" },
                  { time: "09:30", action: "Masuk ruang rawat", note: "Kamar 204" }
                ]
              },
              {
                date: "2025-01-06",
                summary: "Perawatan hari kedua",
                events: [
                  { time: "07:00", action: "Visite dokter", note: "Masih demam ringan" },
                  { time: "11:00", action: "Infus cairan", note: "NaCl 0.9%" },
                  { time: "18:00", action: "Pemberian obat", note: "Antibiotik oral" }
                ]
              },
              {
                date: "2025-01-09",
                summary: "Pulang",
                events: [
                  { time: "09:00", action: "Kontrol akhir", note: "Demam turun" },
                  { time: "10:30", action: "Discharge pasien", note: "Pulang dengan resep obat" }
                ]
              }
            ]
          },
          {
            month: "Feb",
            type: "Farmasi",
            start: "2025-02-10",
            end: "2025-02-10",
            doctor: "dr. Rina",
            diagnosis: "Ambil obat lanjutan",
            days: [
              {
                date: "2025-02-10",
                summary: "Ambil obat",
                events: [
                  { time: "10:00", action: "Ambil obat", note: "Antibiotik + antasida" }
                ]
              }
            ]
          },
          {
            month: "Apr",
            type: "Lab",
            start: "2025-04-02",
            end: "2025-04-02",
            doctor: "dr. Surya",
            diagnosis: "Darah lengkap",
            days: [
              {
                date: "2025-04-02",
                summary: "Pemeriksaan laboratorium",
                events: [
                  { time: "08:00", action: "Ambil darah", note: "Puasa 8 jam" },
                  { time: "13:00", action: "Ambil hasil", note: "Normal semua" }
                ]
              }
            ]
          }
        ]
      }
    ]
  },

  {
    patientId: "P002",
    name: "Siti Rahmawati",
    gender: "P",
    birthDate: "1994-08-09",
    age: 30,
    photo: "/img/patient2.jpg",

    history: [
      {
        year: 2025,
        records: [
          {
            month: "Feb",
            type: "Rawat Jalan",
            start: "2025-02-10",
            end: "2025-02-10",
            doctor: "dr. Lina",
            diagnosis: "Flu",
            days: [
              {
                date: "2025-02-10",
                summary: "Pemeriksaan ringan",
                events: [
                  { time: "09:00", action: "Registrasi pasien", note: "Keluhan flu ringan" },
                  { time: "10:15", action: "Konsultasi dokter", note: "Diberi vitamin C dan istirahat" }
                ]
              }
            ]
          },
          {
            month: "Mar",
            type: "Farmasi",
            start: "2025-03-11",
            end: "2025-03-11",
            doctor: "dr. Lina",
            diagnosis: "Vitamin C",
            days: [
              {
                date: "2025-03-11",
                summary: "Ambil obat",
                events: [
                  { time: "11:00", action: "Ambil obat", note: "Vitamin C" }
                ]
              }
            ]
          },
          {
            month: "Jun",
            type: "Radiologi",
            start: "2025-06-25",
            end: "2025-06-25",
            doctor: "dr. Sari",
            diagnosis: "X-Ray Paru",
            days: [
              {
                date: "2025-06-25",
                summary: "Pemeriksaan radiologi",
                events: [
                  { time: "08:30", action: "X-Ray dada", note: "Area paru kanan" },
                  { time: "11:00", action: "Ambil hasil", note: "Tidak ada kelainan" }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
];
