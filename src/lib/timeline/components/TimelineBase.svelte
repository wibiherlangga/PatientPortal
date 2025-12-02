<script>
  import TimelineYear from './TimelineYear.svelte';
  import TimelineMonth from './TimelineMonth.svelte';
  import TimelineDay from './TimelineDay.svelte';
  import TimelineHour from './TimelineHour.svelte';
  import { getColorTimeline } from '../utils/timelineColor.js';

  const modes = [
    { id: 'year',  label: 'Tahun' },
    { id: 'month', label: 'Bulan' },
    { id: 'day',   label: 'Hari' },
    { id: 'hour',  label: 'Jam' }
  ];

  let viewMode = 'year';

  function setMode(id) {
    viewMode = id;
  }
</script>

<div class="timeline-base">
  <!-- HEADER -->
  <div class="timeline-base__header">
    <div class="timeline-base__title">Riwayat Pasien</div>

    <div class="timeline-base__legend">
      <div class="legend-item">
        <span class={`legend-dot ${getColorTimeline('Rawat Jalan')}`}></span>
        <span>Rawat Jalan</span>
      </div>
      <div class="legend-item">
        <span class={`legend-dot ${getColorTimeline('Rawat Inap')}`}></span>
        <span>Rawat Inap</span>
      </div>
      <div class="legend-item">
        <span class={`legend-dot ${getColorTimeline('Gawat Darurat')}`}></span>
        <span>Gawat Darurat</span>
      </div>
      <div class="legend-item">
        <span class={`legend-dot ${getColorTimeline('Farmasi')}`}></span>
        <span>Farmasi</span>
      </div>
      <div class="legend-item">
        <span class={`legend-dot ${getColorTimeline('Lab')}`}></span>
        <span>Lab</span>
      </div>
      <div class="legend-item">
        <span class={`legend-dot ${getColorTimeline('Radiologi')}`}></span>
        <span>Radiologi</span>
      </div>
    </div>
  </div>

  <!-- BODY -->
  <div class="timeline-base__body">
    <!-- kiri: capsule + scroll wrapper -->
    <div class="timeline-base__content overflow-x-auto overflow-y-hidden pb-1">
      <div class="inline-block">
        {#if viewMode === 'year'}
          <TimelineYear />
        {:else if viewMode === 'month'}
          <TimelineMonth />
        {:else if viewMode === 'day'}
          <TimelineDay />
        {:else}
          <TimelineHour />
        {/if}
      </div>
    </div>

    <!-- kanan: button filter -->
    <div class="timeline-base__zoom">
      {#each modes as mode}
        <button
          type="button"
          class="timeline-base__zoom-btn {mode.id === viewMode ? 'is-active' : ''}"
          on:click={() => setMode(mode.id)}
        >
          {mode.label}
        </button>
      {/each}
    </div>
  </div>
</div>
