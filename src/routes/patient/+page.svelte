<script>
  import Sidebar from '$lib/components/PatientHistory/Sidebar.svelte';
  import Header from '$lib/components/PatientHistory/Header.svelte';
  import TimelineBase from '$lib/timeline/components/TimelineBase.svelte';

  import RekamMedis from '$lib/components/PatientHistory/RekamMedis.svelte';
  import ChartOksigen from '$lib/components/PatientHistory/ChartOksigen.svelte';

  function openNotification() {
    console.log('woyy');
  }
</script>

<div class="flex h-screen bg-sky-50 gap-4 p-4">
  <!-- Sidebar -->
  <aside class="w-72 bg-white shadow-md rounded-2xl">
    <Sidebar />
  </aside>

  <!-- Main Content -->
  <div class="flex-1 flex flex-col min-w-0">

    <main class="flex-1 overflow-y-auto overflow-x-hidden space-y-4">

      <!-- Search -->
      <section>
        <div class="flex items-center flex-row gap-[12px]">
          
            <button class="w-[48px] h-[48px] bg-white rounded-full flex items-center justify-center" on:click={openNotification}>
              <img src="notification.svg" alt="notification">
            </button>
          
          
          <div class="flex flex-1 min-w-0 flex-row items-center space-x-2 bg-white px-4 py-1.5 rounded-full h-[48px]">
            <input
              type="text"
              class="flex flex-1 min-w-0 outline-none border-none focus:outline-none focus:ring-0 shadow-none text-sm text-black placeholder:text-[#21416942] font-bold w-full"
            />
            <button class="text-sky-500 w-[22px] h-[22px] shrink-0">
              <img src="search-blue-sky.svg" alt="search">
            </button>
          </div>

          <div class="w-[48px] h-[48px] bg-white rounded-full flex items-center justify-center">
            <img src="moon.svg" alt="moon">
          </div>
        </div>
      </section>


      <!-- Timeline -->
      <section class="bg-white rounded-2xl shadow w-full p-4">
          <!-- Panggil TimelineBase di sini -->
          <TimelineBase />
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
