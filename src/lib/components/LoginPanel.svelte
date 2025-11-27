<script lang="ts">
  export let open = false;
  export let onClose;
  let email = '';
  let password = '';
  let isShowPassword = false;
  let loading = false;
  let error = '';
  let success = '';
  let isEmailFocused = false;
  let isPasswordFocused = false;
  let emailError = '';
  let passwordError = '';

  // BUTTON STATE
  $: isValid =
  email.trim() !== "" &&
  password.trim() !== "" &&
  emailError === "" &&
  passwordError === "";
  

  function validateEmail() {
    if (!email) {
      emailError = "Email tidak boleh kosong";
    } 
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      emailError = "Format email tidak valid";
    } else {
      emailError = "";
    }
  }

  function validatePassword() {
    if (!password) {
      passwordError = "Password tidak boleh kosong";
    } 
    if (password.length < 6) {
      passwordError = "Minimal 6 karakter";
    } else {
      passwordError = "";
    }
  }
  
  function togglePassword(event: Event) {
    event.preventDefault();
    isShowPassword = !isShowPassword;
  }

  async function handleLogin(event: SubmitEvent) {
    event.preventDefault();

    loading = true;

    // simulasi fetch API
    try {
      await new Promise((r) => setTimeout(r, 1500)); // simulasi delay
      // contoh respons sukses palsu
      if (email === 'testwibi@gmail.com' && password === 'testwibi') {
        success = 'Login berhasil 🎉';
      } else {
        error = 'Email atau password salah.';
      }
    } catch (e) {
      error = 'Terjadi kesalahan server.';
    } finally {
      loading = false;
    }
  }
</script>

<!-- Overlay -->
{#if open}
  <button class="fixed inset-0 bg-black/25 z-40 transition-opacity" on:click={onClose} aria-label=" "></button>
{/if}

<!-- Panel -->
<div
  class="fixed top-0 right-0 h-full w-full sm:w-[420px] bg-sky-100 backdrop-blur-25 shadow-2xl z-50 transform transition-all duration-300 ease-in-out rounded-3xl"
  class:translate-x-[-20px]={open}
  class:translate-x-full={!open}
  class:top-[20px]={open}
  class:h-[calc(100%-40px)]={open}
  class:top-0={!open}
  class:h-full={!open}
>
  <div class="flex flex-col items-center justify-center h-full">
    <img src="zi-care-patient-portal.svg" alt="ZiCare" class="h-[154px] flex flex-col pb-[48px]" />
    
    <form class="w-[80%] flex flex-col gap-3" on:submit={handleLogin}>
      <!-- Input Email -->
      <div class="flex items-center bg-white rounded-[24px] p-[6px]">
        <img src={isEmailFocused ? 'email-active.svg' : 'email.svg'} alt="email" class="transition"
        >
        <input
          type="email"
          placeholder="Surel Akun"
          bind:value={email}
          class="w-full bg-transparent border-none outline-none focus:outline-none focus:ring-0 shadow-none text-sm font-normal font-poppins placeholder:text-slate-300"
          on:input={validateEmail}
          on:focus={() => (isEmailFocused = true)}
          on:blur={() => (isEmailFocused = false)}
        />
      </div>

      {#if emailError}
        <p class="text-red-500 text-xs mt-[2px] font-poppins">{emailError}</p>
      {/if}


      <!-- Input Password -->
      <div class="flex items-center bg-white rounded-[24px] p-[6px]">
        <img src={isPasswordFocused ? 'password-active.svg' : 'password.svg'} alt="password">
        <input
          type={isShowPassword ? 'text' : 'password'}
          placeholder="Kata Sandi"
          bind:value={password}
          class="w-full bg-transparent border-none outline-none focus:outline-none focus:ring-0 shadow-none text-sm font-poppins text-slate-800 font-medium placeholder:text-slate-300 placeholder:font-normal"
          on:input={validatePassword}
          on:focus={() => (isPasswordFocused = true)}
          on:blur={() => (isPasswordFocused = false)}
          />
        <button on:click={togglePassword}>
          <img src={isShowPassword ? 'show-password.svg' : 'hide-password.svg'} alt="hide-password" class="w-[36px] h-[36px]">
        </button>
      </div>

      {#if passwordError}
        <p class="text-red-500 text-xs mt-[2px] font-poppins">{passwordError}</p>
      {/if}

      <!-- Tombol Masuk -->
      <button
        type="submit"
        class="w-full bg-sky-600 hover:bg-sky-700 text-white text-[16px] leading-none rounded-[30px] mt-[12px] font-bold font-poppins h-[50px] disabled:bg-gray-500 transition"
        disabled={!isValid}
        >
        {#if loading}
        <span>Loading...</span>
      {:else}
        <span>Masuk</span>
      {/if}
      </button>
    </form>

      <!-- Link tambahan -->
      <div class="w-[80%] flex justify-between items-center mt-3 text-sm font-poppins">
        <p class="font-poppins font-medium text-[10px] text-slate-500">
          <a href="/register" class="text-sky-600 hover:underline font-bold text-[10px] font-poppins">
            Daftar,
          </a>
          Jika tidak memiliki akun
        </p>
        <a href="/forgot-password" class="text-rose-500 font-bold font-poppins text-[10px] hover:underline">Lupa Kata Sandi?</a>
      </div>

      <!-- Terms & Conditions -->
       <div class="items-center mt-[24px]">        
          <a href="/terms" class="text-sky-500 text-[12px] font-poppins font-medium hover:underline">Syarat & Ketentuan</a>
        <span class="text-slate-500 text-[16px] font-poppins">|</span>
        <a href="/privacy" class="text-sky-500 text-[12px] font-poppins font-medium hover:underline">Kebijakan Privasi</a>
       </div>

       <!-- COPYRIGHTS -->
        <div class="text-center mt-[48px] w-full text-sky-700 font-poppins font-normal text-[12px]">
          <p class="">COPYRIGHT © {new Date().getFullYear()}</p>
        </div>
  </div>
</div>
