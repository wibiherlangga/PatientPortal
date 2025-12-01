<script>
  let username = "Nama Pasien";
</script>

<header class="w-full bg-white shadow-sm px-6 py-3 flex justify-between items-center">
  <!-- Logo / Judul -->
  <div class="flex items-center gap-2">
    <img src="/logo.png" alt="Logo" class="w-8 h-8" />
    <h1 class="text-xl font-bold text-gray-700">Svelte Dashboard</h1>
  </div>

  <!-- Search bar -->
  <div class="flex-1 mx-6">
    <input
      type="text"
      placeholder="Cari data medis..."
      class="w-full max-w-md border border-gray-200 rounded-full px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
    />
  </div>

  <!-- Profile -->
  <div class="flex items-center gap-4">
    <button class="relative">
      <span class="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">3</span>
      <svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 
             6.002 0 00-4-5.659V4a2 2 0 10-4 0v1.341C7.67 
             6.165 6 8.388 6 11v3.159c0 .538-.214 
             1.055-.595 1.436L4 17h5m6 0v1a3 
             3 0 11-6 0v-1m6 0H9"/>
      </svg>
    </button>

    <div class="flex items-center gap-2">
      <img src="https://i.pravatar.cc/40" alt="User" class="w-9 h-9 rounded-full border" />
      <span class="text-gray-700 font-medium">{username}</span>
    </div>
  </div>
</header>
