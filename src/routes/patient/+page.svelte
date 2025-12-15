<script>
  import Sidebar from '$lib/components/PatientHistory/Sidebar.svelte';
  import Header from '$lib/components/PatientHistory/Header.svelte';
  import TimelineBase from '$lib/timeline/components/TimelineBase.svelte';

  import RekamMedis from '$lib/components/PatientHistory/RekamMedis.svelte';
  import ChartOksigen from '$lib/components/PatientHistory/ChartOksigen.svelte';
</script>

<div class="flex h-screen bg-sky-50 gap-4 p-4">
  <!-- Sidebar -->
  <aside class="w-72 bg-white shadow-md rounded-2xl">
    <Sidebar />
  </aside>

  <!-- Main Content -->
  <div class="flex-1 flex flex-col min-w-0">

    <main class="flex-1 overflow-y-auto overflow-x-hidden space-y-4">

      <!-- Timeline -->
      <section class="bg-white rounded-2xl shadow w-full p-4">
          <!-- Panggil TimelineBase di sini -->
          <TimelineBase patientId="P001" />
      </section>

      <!-- Rekam Medis & Chart -->
      <!-- <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <section class="bg-white rounded-2xl shadow p-4">
          <RekamMedis />
        </section>
        <section class="bg-white rounded-2xl shadow p-4">
          <ChartOksigen />
        </section>
      </div> -->

    </main>

  </div>
</div>
