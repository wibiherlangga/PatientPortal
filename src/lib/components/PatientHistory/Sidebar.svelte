<script>
  let patient = {
    name: "Jonathan Albert Simanjuntak",
    age: 24,
    gender: "male",
    lastDiagnosis: [
      { text: "DM T2 dengan Hiperglikemia & Neuropati", date: "Des 10, 11:46" },
      { text: "DM T2 dengan Neuropati", date: "Agu 01, 09:40" },
      { text: "DM T2 dengan Hiperglikemia", date: "Agu 01, 09:40" }
    ],
    history: "Hipertensi dan Diabetes Melitus Tipe...",
    allergies: ["Penisilin", "NSAID (Aspirin)"]
  };

  let menu = [
    { label: "Dasbor Pasien", icon: "📊", active: true },
    { label: "Resume Medis", icon: "📄" },
    { label: "Riwayat Diagnosa", icon: "🩺" },
    { label: "Prosedur", icon: "✂️" },
    { label: "Laboratorium", icon: "🧪" },
    { label: "Radiologi", icon: "🩻" },
    { label: "Resep", icon: "💊" },
    { label: "Surat Keterangan", icon: "📑" }
  ];

  function getInitials(name) {
    if (!name) return "";
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();
  }
</script>

<div class="h-screen w-72 bg-sky-100  border-r border-gray-200 overflow-y-auto p-4 space-y-4">
<!-- Card Pasien -->
<div class="rounded-3xl border border-gray-200 bg-sky-300 overflow-hidden p-4 flex flex-col gap-3">

    <!-- Row atas: JA + Usia & Gender -->
  <div class="flex items-center justify-between">
    <!-- Inisial bulat -->
    <div class="w-10 h-5 rounded-full bg-sky-500 text-white flex items-center justify-center font-bold text-sm">
      {getInitials(patient.name)}
    </div>

    <!-- Usia + Gender -->
    <div class="flex items-center gap-2 text-sm text-white">
      <span>{patient.age} th</span>
      {#if patient.gender === "male"}
        <span class="flex items-center justify-center w-5 h-5 rounded-full bg-sky-100 text-sky-700 text-xs">♂</span>
      {:else}
        <span class="flex items-center justify-center w-5 h-5 rounded-full bg-pink-100 text-pink-700 text-xs">♀</span>
      {/if}
    </div>
  </div>

  <!-- Row bawah: Nama pasien -->
  <h2 class="text-xl font-bold text-gray-800 leading-tight">
    {patient.name}
  </h2>

  <!-- Card Diagnosa Terakhir -->
  <div class="rounded-2xl bg-sky-500 p-4 space-y-3">
  <!-- Header Diagnosa -->
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-3">
        <!-- Icon alat dokter -->
        <div class="w-8 h-8 rounded-lg bg-sky-600 flex items-center justify-center text-white">
          🩺
        </div>
        <!-- Judul -->
        <h3 class="text-sm font-semibold text-white tracking-wide">
          Diagnosa Terakhir
        </h3>
      </div>

      <!-- Icon expand -->
      <button class="text-white/80 hover:text-white">
        ➔
      </button>
    </div>

    <!-- List diagnosa -->
    <ul class="space-y-2">
      {#each patient.lastDiagnosis as diag, i}
        <li class="bg-sky-50 p-3 rounded-xl relative">
          <!-- Teks diagnosa -->
          <p class="text-xs text-gray-800 font-medium">
            {diag.text}
          </p>
          <!-- Badge angka urut -->
          <span
            class="absolute top-2 right-2 w-5 h-5 rounded-full bg-sky-500 text-white text-xs flex items-center justify-center">
            {i + 1}
          </span>
          <!-- Tanggal -->
          <span class="block text-xs text-gray-500">
            {diag.date}
          </span>
        </li>
      {/each}
    </ul>
  </div>

  <!-- Card Riwayat -->
  <div class="rounded-2xl bg-sky-100 border border-gray-200 p-4 space-y-2">
    <!-- Judul -->
    <h3 class="text-xs font-bold text-gray-600 tracking-wide">
      Riwayat
    </h3>
    <!-- Isi riwayat -->
    <p class="text-[10px] text-gray-700 leading-snug">
      {patient.history}
    </p>
  </div>

  <!-- Card Alergi -->
  <div class="rounded-2xl bg-sky-100 border border-gray-200 p-4 space-y-2">
<div class="flex items-center justify-between">
    <!-- Kiri: Icon + Title -->
    <div class="flex items-center gap-2">
      <div class="h-6 rounded-md flex items-center justify-center text-sky-600 text-sm">
        ✋
      </div>
      <h3 class="text-xs font-bold text-gray-600 tracking-wide">
        Alergi
      </h3>
    </div>

    <!-- Kanan: Expand -->
    <button class="text-gray-500 hover:text-gray-700 text-sm">
      ▼
    </button>
  </div>
    <!-- List alergi -->
    <div class="flex flex-wrap gap-2">
      {#each patient.allergies as item}
        <span class="px-3 py-1 bg-white text-gray-500 rounded-full text-[10px] font-medium">
          {item}
        </span>
      {/each}
    </div>
  </div>

</div>

<!-- Card Menu -->
{#each menu as item}
  <div class="rounded-3xl bg-white border border-gray-200 overflow-hidden">
    <button
      class="flex items-center gap-3 w-full text-left px-4 py-3 font-medium
        {item.active
          ? 'bg-sky-500 text-white'
          : 'text-gray-700 hover:bg-sky-50'}">
      <span>{item.icon}</span>
      <span>{item.label}</span>
    </button>
  </div>
{/each}

</div>
