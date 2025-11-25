<script>
	import LoginPanel from "$lib/components/LoginPanel.svelte";

  let isLoginFormOpen = false;

  function openLoginForm() {
    isLoginFormOpen = !isLoginFormOpen;
  }
</script>

<section class="relative bg-gradient-to-r from-[#82D3FF] via-[#B6F8FF] to-[#61ADF8] min-h-screen">
  <!-- Navbar -->
  <nav class="flex flex-col md:flex-row items-center justify-between px-[121px] pt-[52px]">
    <div class="flex flex-row items-center gap-[7px]">
      <img src="heart-rate-logo.svg" alt="heart-rate">
      <p class="text-2xl text-[#214169] font-agbalumo">Sampel WEB RS</p>
    </div>

    <ul class="flex flex-col md:flex-row space-x-8 font-normal text-black">
      <li><a href="/" class="text-blue-600">Home</a></li>
      <li><a href="/login">About</a></li>
      <li><a href="/doctors">Find Doctors</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/portal">Patient Portal</a></li>
    </ul>

    <!-- Search -->
    <div class="flex flex-col md:flex-row items-center gap-[7px]">
      <div class="flex items-center justify-between space-x-2 bg-white px-3 py-1 rounded-full w-[356px]">
      <input
        type="text"
        placeholder="Search here"
        class="outline-none border-none focus:outline-none focus:ring-0 shadow-none text-sm text-[#21416942] font-bold"
      />
      <button class="text-gray-500 w-[25px] h-[25px]">
        <img src="search.svg" alt="search">
      </button>
    </div>

    
      <button class="cursor-pointer" on:click={openLoginForm}>
        <img src="options.png" alt="options" class="w-[30px] h-[30px] hover:opacity-80 transition">
      </button>
    </div>

  </nav>

  <!-- Hero Section -->
  <div class="container max-w-full px-[121px] flex flex-col justify-between md:flex-row md:items-center relative pb-40">
    
    <!-- LEFT TEXT -->
    <div class="flex-1 space-y-[26px]">
      <h1 class="text-4xl md:text-5xl font-semibold leading-tight">
        Your Partner in Health and Wellness
      </h1>

      <p class="text-gray-600 max-w-md">
        We are committed to providing you with the best medical and 
        healthcare services to help you live healthier and happier.
      </p>

      <button class="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
        Get Started
      </button>
    </div>

    <!-- RIGHT IMAGE -->
    <div class="relative flex-1 flex justify-center items-center md:items-start">
      <img 
        src="doctor-cover.png" 
        alt="doctor"
        class="absolute max-w-sm object-contain object-top h-auto drop-shadow-2xl md:max-w-md md:-top-45"
        />
    </div>

  </div>

  <!-- Info Box -->
      <div class="absolute left-1/2 transform -translate-x-1/2 translate-y-1/2
              bg-white shadow-xl rounded-[19px] w-[90%] md:w-[80%] p-8 bottom-0">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
    <div class="flex flex-row items-center justify-center gap-[24px] ">
      <div class="w-[51px] h-[51px] bg-[#61ADF8] rounded-full flex items-center justify-center">
        <img src="calendar.svg" alt="calendar" class="w-[37px] h-[37px]">
      </div>
      <div class="flex flex-col">
        <p class="font-bold text-[#214169]">Date</p>
        <p class="text-sm text-[#214169]">August 13, 2023</p>
      </div>
    </div>
    <div class="flex flex-row items-center justify-center gap-[24px]">
      <div class="w-[51px] h-[51px] bg-[#61ADF8] rounded-full flex items-center justify-center">
        <img src="stethoscope.svg" alt="stethoscope" class="w-[37px] h-[37px]">
      </div>
      <div class="flex flex-col">
        <p class="font-bold text-[#214169]">Specialization</p>
        <p class="text-sm text-[#214169]">Cardiology</p>
      </div>
    </div>
    <div class="flex flex-row items-center justify-center gap-[24px]">
      <div class="w-[51px] h-[51px] bg-[#61ADF8] rounded-full flex items-center justify-center">
        <img src="location.svg" alt="location" class="w-[37px] h-[37px]">
      </div>
      <div class="flex flex-col">
        <p class="font-bold text-[#214169]">Location</p>
        <p class="text-sm text-[#214169]">Colombo, 07</p>
      </div>
    </div>
    <div class="p-6 flex items-center justify-center">
      <button class="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700">
        Book Now
      </button>
    </div>
  </div>
</div>
  
  

  <LoginPanel open={isLoginFormOpen} onClose={openLoginForm}/>
</section>

<!-- SECTION 2 — WHITE CONTENT -->
<section class="bg-white pt-[200px] pb-32">
  <div class="container mx-auto px-8">
    <h2 class="text-3xl font-bold text-[#1F3763] mb-6">Our Services</h2>
    <p class="text-gray-600">
      Your next content here...
    </p>
  </div>
</section>
