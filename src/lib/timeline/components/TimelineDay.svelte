<script>
  import '$lib/timeline/timeline.css';

  // Dummy range hari: 1–7 Jan 2024
  const days = [
    { index: 1, labelTop: '1 Jan 2024', labelBottom: 'Senin' },
    { index: 2, labelTop: '2 Jan',       labelBottom: 'Selasa' },
    { index: 3, labelTop: '3 Jan',       labelBottom: 'Rabu' },
    { index: 4, labelTop: '4 Jan',       labelBottom: 'Kamis' },
    { index: 5, labelTop: '5 Jan',       labelBottom: 'Jumat' },
    { index: 6, labelTop: '6 Jan',       labelBottom: 'Sabtu' },
    { index: 7, labelTop: '7 Jan',       labelBottom: 'Minggu' }
  ];

  /**
   * Grid konsep:
   * - 7 kolom (1–7 Jan) → grid-column: start / end+1
   * - row:
   *   1 → bar merah "Sesak Napas Berat"
   *   2 → bar biru "Gagal Jantung Akut"
   *   3 → bar kuning "Kontrol P..."
   */
  const events = [
    {
      id: 'sesak-napas',
      title: 'Sesak Napas Berat',
      type: 'gadar',          // nanti bisa dipakai mapping warna
      startDay: 1,
      endDay: 1,
      row: 1,
      avatars: ['VA', 'JA']   // inisial dummy di sisi kiri bar
    },
    {
      id: 'gagal-jantung',
      title: 'Gagal Jantung Akut - Kamar Borobudur 1',
      type: 'rawat-inap',
      startDay: 1,
      endDay: 5,
      row: 2,
      avatars: ['JA']         // bubble biru di tengah/kanan bar
    },
    {
      id: 'kontrol',
      title: 'Kontrol Poli',
      type: 'rawat-jalan',
      startDay: 6,
      endDay: 6,
      row: 3,
      avatars: ['DR']         // bubble di bagian kanan bar
    }
  ];
</script>

<div class="year-view day-view">
  <div class="day-view__inner">
    <!-- HEADER KOLOM HARI -->
    <div class="day-view__header-row">
      {#each days as d}
        <div class="day-view__day-header">
          <div class="day-view__day-top">{d.labelTop}</div>
          <div class="day-view__day-bottom">{d.labelBottom}</div>
        </div>
      {/each}
    </div>

    <!-- GRID UTAMA (GARIS VERTIKAL + EVENT BAR) -->
    <div class="day-view__grid">
      <!-- Garis vertikal per hari -->
      {#each days as d}
        <div
          class="day-view__day-line"
          style={`grid-column: ${d.index} / ${d.index + 1};`}
        ></div>
      {/each}

      <!-- Event bar -->
      {#each events as ev}
        <div
          class={`day-event day-event--${ev.type}`}
          style={`grid-column: ${ev.startDay} / ${ev.endDay + 1}; grid-row: ${ev.row};`}
        >
          <div class="day-event__title">{ev.title}</div>

          {#if ev.avatars && ev.avatars.length}
            <div class="day-event__avatars">
              {#each ev.avatars as a}
                <span class="day-avatar">{a}</span>
              {/each}
            </div>
          {/if}
        </div>
      {/each}
    </div>
  </div>
</div>
