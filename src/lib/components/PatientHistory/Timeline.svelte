<script>
  // Data dummy (nanti tinggal fetch dari BE)
  export let patientHistory = [
    {
      year: 2024,
      records: [
        { month: "Jan", type: "Rawat Jalan" },
        { month: "Feb", type: "Rawat Inap" },
        { month: "Mar", type: "Gawat Darurat" },
        { month: "Apr", type: "Farmasi" },
        { month: "Mei", type: "Lab" },
        { month: "Jun", type: "Radiologi" },
        { month: "Jul", type: "Rawat Jalan" },
        { month: "Agu", type: "Rawat Inap" },
        { month: "Sep", type: "Gawat Darurat" },
        { month: "Okt", type: "Farmasi" },
        { month: "Nov", type: "Lab" },
        { month: "Des", type: "Radiologi" }
      ]
    },
    {
      year: 2025,
      records: [
        { month: "Jan", type: "Rawat Jalan" },
        { month: "Feb", type: "Rawat Inap" },
        { month: "Mar", type: "Farmasi" },
        { month: "Apr", type: "Gawat Darurat" },
        { month: "Mei", type: "Lab" },
        { month: "Jun", type: "Radiologi" },
        { month: "Jul", type: "Rawat Jalan" },
        { month: "Agu", type: "Rawat Inap" },
        { month: "Sep", type: "Farmasi" },
        { month: "Okt", type: "Lab" },
        { month: "Nov", type: "Radiologi" },
        { month: "Des", type: "Gawat Darurat" }
      ]
    },
    {
      year: 2026,
      records: [
        { month: "Jan", type: "Rawat Jalan" },
        { month: "Feb", type: "Rawat Inap" },
        { month: "Mar", type: "Lab" },
        { month: "Apr", type: "Radiologi" },
        { month: "Mei", type: "Farmasi" },
        { month: "Jun", type: "Gawat Darurat" }
      ]
    }
  ];

  const getColor = (type) => {
    switch (type) {
      case "Rawat Jalan": return "bg-yellow-400";
      case "Rawat Inap": return "bg-blue-400";
      case "Gawat Darurat": return "bg-pink-400";
      case "Farmasi": return "bg-orange-400";
      case "Lab": return "bg-green-400";
      case "Radiologi": return "bg-purple-400";
      default: return "bg-gray-300";
    }
  };

  const legends = [
    "Rawat Jalan", "Rawat Inap", "Gawat Darurat", "Farmasi", "Lab", "Radiologi"
  ];
</script>

<!-- ===================== TIMELINE CARD ===================== -->
<div class="bg-white rounded-3xl shadow-md flex flex-col gap-4 p-6 w-full overflow-hidden relative min-h-[380px]">
  
  <!-- Header -->
  <div class="flex items-center gap-4">
    <!-- Notifikasi -->
    <div class="relative flex-shrink-0">
      <div class="w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-sm">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3c0 .386-.146.74-.395 1.005L4 17h5m6 0a3 3 0 11-6 0h6z" />
        </svg>
      </div>
      <span class="absolute -top-1 -right-1 bg-orange-500 text-white text-xs font-semibold rounded-full px-1.5 py-0.5 shadow-md">
        3
      </span>
    </div>

    <!-- Search Bar -->
    <div class="relative flex-1">
      <input type="text"
        placeholder=""
        class="w-full pr-10 pl-4 py-2 border border-gray-200 rounded-full shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
      />
      <svg xmlns="http://www.w3.org/2000/svg"
        class="w-5 h-5 absolute right-3 top-1/2 -translate-y-1/2 text-blue-500"
        fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M21 21l-4.35-4.35M11 18a7 7 0 100-14 7 7 0 000 14z" />
      </svg>
    </div>
  </div>

  <!-- Legend -->
  <div class="flex flex-wrap gap-6 text-sm font-medium text-gray-600">
    {#each legends as legend}
      <div class="flex items-center gap-2">
        <span class={`w-3 h-3 rounded-full ${getColor(legend)}`}></span>
        <span>{legend}</span>
      </div>
    {/each}
  </div>

  <!-- Timeline Section -->
<div class="flex bg-gray-500 rounded-2xl shadow-inner overflow-hidden flex-1">
  <!-- Area scroll timeline -->
<div class="flex-1 overflow-x-auto overflow-y-hidden p-6 rounded-l-2xl bg-gray-50 scroll-smooth"
     style="scroll-snap-type: x mandatory;">
  <div class="relative flex items-start gap-12 min-w-[1200px]">
      {#each patientHistory as yearData}
        <div class="flex flex-col items-start flex-shrink-0 scroll-snap-align-start">
          <!-- Tahun di atas bulan -->
          <div class="text-base font-semibold text-gray-700 mb-2 ml-[14px] whitespace-nowrap">
            {yearData.year}
          </div>

          <!-- Barisan bulan -->
          <div class="relative flex items-start gap-8 pb-8">
            <!-- Garis timeline di bawah dot -->
            <div class="absolute bottom-0 left-0 right-0 h-[2px] bg-gray-200"></div>

            {#each yearData.records as rec}
              <div class="flex flex-col items-center min-w-[70px] relative">
                <!-- Nama bulan -->
                <span class="text-xs text-gray-600 whitespace-nowrap mb-2">{rec.month}</span>

                <!-- Kumpulan dot warna-warni -->
                <div class="flex flex-col items-center gap-[6px]">
                  {#each ["Rawat Jalan", "Rawat Inap", "Gawat Darurat", "Farmasi", "Lab", "Radiologi"] as type}
                    <div class={`w-3 h-3 rounded-full ${getColor(type)} hover:scale-110 transition-transform`}></div>
                  {/each}
                </div>
              </div>
            {/each}
          </div>
        </div>
      {/each}
    </div>
  </div>

  <!-- Filter kanan -->
  <div class="flex flex-col justify-center items-center gap-3 p-4 bg-white flex-shrink-0 rounded-r-2xl shadow-sm">
    <button class="bg-blue-500 text-white font-semibold px-6 py-2 rounded-full">Tahun</button>
    <button class="bg-gray-100 text-gray-600 font-medium px-6 py-2 rounded-full hover:bg-gray-200">Bulan</button>
    <button class="bg-gray-100 text-gray-600 font-medium px-6 py-2 rounded-full hover:bg-gray-200">Hari</button>
    <button class="bg-gray-100 text-gray-600 font-medium px-6 py-2 rounded-full hover:bg-gray-200">Jam</button>
  </div>
</div>


  <!-- Slider bawah -->
  <div class="flex justify-center">
    <input type="range" min="1" max="100" value="40" class="w-1/2 accent-blue-500" />
  </div>
</div>
