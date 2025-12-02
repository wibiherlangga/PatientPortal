<script>
  import TimelineYear from './TimelineYear.svelte';
  import TimelineMonth from './TimelineMonth.svelte';
  import TimelineDay from './TimelineDay.svelte';
  import TimelineHour from './TimelineHour.svelte';
  import LegendBar from './LegendBar.svelte';

  export let patientHistory;
  let mode = 'Tahun';

  const modes = ['Tahun', 'Bulan', 'Hari', 'Jam'];
</script>

<div class="bg-white rounded-3xl shadow-md p-6 flex flex-col gap-4">
  <LegendBar />

  {#if mode === 'Tahun'}
    <TimelineYear {patientHistory} />
  {:else if mode === 'Bulan'}
    <TimelineMonth {patientHistory} />
  {:else if mode === 'Hari'}
    <TimelineDay {patientHistory} />
  {:else}
    <TimelineHour {patientHistory} />
  {/if}

  <!-- Filter kanan -->
  <div class="flex justify-center gap-2 mt-4">
    {#each modes as m}
      <button
        class={`px-4 py-2 rounded-full font-medium ${
          mode === m ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
        }`}
        on:click={() => mode = m}>
        {m}
      </button>
    {/each}
  </div>
</div>
