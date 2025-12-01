<script>
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
    { id: "rawat-jalan",  dotClass: "dot--rawat-jalan" },
    { id: "rawat-inap",   dotClass: "dot--rawat-inap" },
    { id: "gadar",        dotClass: "dot--gadar" },
    { id: "farmasi",      dotClass: "dot--farmasi" },
    { id: "lab",          dotClass: "dot--lab" },
    { id: "radiologi",    dotClass: "dot--radiologi" }
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
                <span class="dot {cat.dotClass}"></span>
              {/each}
            </div>
          </div>
        {/each}
      </div>
    </div>
  {/each}
</div>