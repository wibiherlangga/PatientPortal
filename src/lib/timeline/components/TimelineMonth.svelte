<script>
  import '$lib/timeline/timeline.css';

  // Kategori sama PERSIS dengan tampilan Tahun
  const categories = [
    { id: 'rawat-jalan',  dotClass: 'dot--rawat-jalan' },
    { id: 'rawat-inap',   dotClass: 'dot--rawat-inap' },
    { id: 'gadar',        dotClass: 'dot--gadar' },
    { id: 'farmasi',      dotClass: 'dot--farmasi' },
    { id: 'lab',          dotClass: 'dot--lab' },
    { id: 'radiologi',    dotClass: 'dot--radiologi' }
  ];

  // Biar dummy-nya konsisten (nggak random tiap refresh), kita pake pola sederhana per tanggal
  function getActiveCategoriesForDay(day) {
    const list = [];
    if (day % 2 === 0) list.push('rawat-jalan');
    if (day % 3 === 0) list.push('rawat-inap');
    if (day % 4 === 0) list.push('gadar');
    if (day % 5 === 0) list.push('farmasi');
    if (day % 6 === 0) list.push('lab');
    if (day % 7 === 0) list.push('radiologi');

    // minimal 1 kategori biar kelihatan hidup
    if (list.length === 0) list.push('rawat-jalan');
    return list;
  }

  // Satu tahun, satu bulan (Jan 2024), tanggal 1–30 penuh
  const blocks = [
    {
      year: 2024,
      monthLabel: 'Jan',
      days: Array.from({ length: 30 }, (_, i) => {
        const dayNumber = i + 1;
        return {
          day: dayNumber,
          activeCategories: getActiveCategoriesForDay(dayNumber)
        };
      })
    }
  ];
</script>

<div class="year-view">
  {#each blocks as block}
    <div class="year-group">
      <!-- Tahun (sama kayak tampilan Tahun) -->
      <div class="year-label">{block.year}</div>

      <div class="months-row">
        {#each block.days as day}
          <div class="month-column">
            <!-- Baris 1: nama bulan (Jan) - SAMA style-nya dengan tampilan Tahun -->
            <div class="month-name">{block.monthLabel}</div>

            <!-- Baris 2: angka tanggal 1..30, pakai year-label biar tipenya mirip -->
            <div class="year-label">{day.day}</div>

            <!-- Stack dot, SAMA persis cara gambar dot di tampilan Tahun -->
            <div class="dots-stack">
              {#each categories as cat}
                {#if day.activeCategories.includes(cat.id)}
                  <span class="dot {cat.dotClass}"></span>
                {:else}
                  <span class="dot dot--muted"></span>
                {/if}
              {/each}
            </div>
          </div>
        {/each}
      </div>
    </div>
  {/each}
</div>
