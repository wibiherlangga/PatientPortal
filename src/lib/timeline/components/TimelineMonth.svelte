<script>
  import '$lib/timeline/timeline.css';
  import { getColorTimeline } from '$lib/timeline/utils/timelineColor.js';

  const categories = [
    { id: "rawat-jalan",  label: "Rawat Jalan" },
    { id: "rawat-inap",   label: "Rawat Inap" },
    { id: "gadar",        label: "Gawat Darurat" },
    { id: "farmasi",      label: "Farmasi" },
    { id: "lab",          label: "Lab" },
    { id: "radiologi",    label: "Radiologi" }
  ];

  function getActiveCategoriesForDay(day) {
    const list = [];
    if (day % 2 === 0) list.push('rawat-jalan');
    if (day % 3 === 0) list.push('rawat-inap');
    if (day % 4 === 0) list.push('gadar');
    if (day % 5 === 0) list.push('farmasi');
    if (day % 6 === 0) list.push('lab');
    if (day % 7 === 0) list.push('radiologi');

    if (list.length === 0) list.push('rawat-jalan');
    return list;
  }

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
      <div class="year-label">{block.year}</div>

      <div class="months-row">
        {#each block.days as day}
          <div class="month-column">

            <div class="month-name">{block.monthLabel}</div>

            <div class="year-label">{day.day}</div>

            <div class="dots-stack">
              {#each categories as cat}
                {#if day.activeCategories.includes(cat.id)}
                  <span class={`dot ${getColorTimeline(cat.label)}`}></span>
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
