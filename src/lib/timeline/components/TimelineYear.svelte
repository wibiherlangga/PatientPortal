<script>
  import { getColorTimeline } from '$lib/timeline/utils/timelineColor.js';
  const years = [
    {
      year: 2024,
      months: ["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Agu","Sep","Okt","Nov","Des"]
    },
    {
      year: 2025,
      months: ["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Agu","Sep","Okt","Nov","Des"]
    },
    {
      year: 2026,
      months: ["Jan","Feb","Mar","Apr"]
    }
  ];

  const categories = [
    { id: "rawat-jalan",  label: "Rawat Jalan" },
    { id: "rawat-inap",   label: "Rawat Inap" },
    { id: "gadar",        label: "Gawat Darurat" },
    { id: "farmasi",      label: "Farmasi" },
    { id: "lab",          label: "Lab" },
    { id: "radiologi",    label: "Radiologi" }
  ];
</script>

<div class="year-view">
  {#each years as block}
    <div class="year-group">
      <div class="year-label">{block.year}</div>

      <div class="months-row">
        {#each block.months as month}
          <div class="month-column">
            <div class="month-name">{month}</div>

            <div class="dots-stack">
              {#each categories as cat}
                <span class={`dot ${getColorTimeline(cat.label)}`}></span>
              {/each}
            </div>
          </div>
        {/each}
      </div>
    </div>
  {/each}
</div>