<script>
  import '$lib/timeline/timeline.css';

  // Header hari/jam
  const dayMeta = {
    label: 'Sen, 1 Jan 2024'
  };

  // Jam 00.00 s/d 17.00 (18 kolom)
  const hours = Array.from({ length: 18 }, (_, i) => {
    const h = i;
    const label = `${h.toString().padStart(2, '0')}.00`;
    return {
      index: i + 1, // dipakai untuk grid-column
      label
    };
  });

  /**
   * Event dummy:
   * - startCol & endCol dalam grid (1-based, sama dengan hours.index)
   * - row: baris vertikal (biar bisa tumpuk beberapa event)
   * - type: kategori, nanti bisa di-mapping ke warna (rawat-jalan, rawat-inap, dll)
   */
  const hourEvents = [
    {
      id: 'rj-subuh',
      title: 'Rawat Jalan',
      type: 'rawat-jalan',
      startCol: 1,  // 00.00
      endCol: 3,    // sampai 02.00
      row: 1,
      avatars: ['DR']
    },
    {
      id: 'ot-ct',
      title: 'OT CT Abdomen',
      type: 'radiologi',
      startCol: 1,   // 00.00
      endCol: 5,     // 04.00
      row: 2,
      avatars: ['JA']
    },
    {
      id: 'lab-blood',
      title: 'Blood Urea Nitr...',
      type: 'lab',
      startCol: 3,   // 02.00
      endCol: 5,     // 04.00
      row: 3,
      avatars: []
    },
    {
      id: 'sesak-napas',
      title: 'Sesak Napas Berat',
      type: 'gadar',
      startCol: 6,   // 05.00
      endCol: 15,    // 14.00
      row: 4,
      avatars: ['DR']
    },
    {
      id: 'resep-1',
      title: '2 Resep Obat',
      type: 'farmasi',
      startCol: 7,   // 06.00
      endCol: 8,     // 07.00
      row: 5,
      avatars: ['JA']
    },
    {
      id: 'resep-2',
      title: '2 Resep Obat',
      type: 'farmasi',
      startCol: 10,  // 09.00
      endCol: 11,    // 10.00
      row: 5,
      avatars: ['DR']
    },
    {
      id: 'gagal-jantung',
      title: 'Gagal Jantung Akut - Kamar Borobudur 1',
      type: 'rawat-inap',
      startCol: 15,  // 14.00
      endCol: 18,    // 17.00
      row: 6,
      avatars: ['JA']
    }
  ];
</script>

<div class="year-view hour-view">
  <div class="hour-view__inner">
    <!-- Header tanggal -->
    <div class="hour-view__header">
      <div class="hour-view__date">
        {dayMeta.label}
      </div>
    </div>

    <!-- Grid jam + garis + event bar -->
    <div class="hour-view__grid">
      <!-- Header label jam di atas -->
      {#each hours as h}
        <div
          class="hour-view__hour-header"
          style={`grid-column: ${h.index} / ${h.index + 1};`}
        >
          <div class="hour-view__hour-label">{h.label}</div>
        </div>
      {/each}

      <!-- Garis vertikal per jam -->
      {#each hours as h}
        <div
          class="hour-view__hour-line"
          style={`grid-column: ${h.index} / ${h.index + 1};`}
        ></div>
      {/each}

      <!-- Event bar -->
      {#each hourEvents as ev}
        <div
          class={`hour-event hour-event--${ev.type}`}
          style={`--start-col: ${ev.startCol}; --end-col: ${ev.endCol}; --row-index: ${ev.row};`}
        >
          <div class="hour-event__title">
            {ev.title}
          </div>

          {#if ev.avatars && ev.avatars.length}
            <div class="hour-event__avatars">
              {#each ev.avatars as a}
                <span class="hour-avatar">{a}</span>
              {/each}
            </div>
          {/if}
        </div>
      {/each}
    </div>
  </div>
</div>
