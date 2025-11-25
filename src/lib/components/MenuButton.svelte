<script>
  export let open = false;
  export let onClick;
</script>

<button
  on:click={onClick}
  class="cursor-pointer p-2 rounded-md hover:bg-blue-100 transition"
>
  <img
    src={open ? "/src/lib/assets/close.png" : "/src/lib/assets/menu.png"}
    alt="menu"
    class="w-7 h-7"
  />
</button>
