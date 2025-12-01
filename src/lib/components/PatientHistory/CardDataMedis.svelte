<script>
  export let label = "Label";
  export let value = "-";
  export let unit = "";
  export let color = "text-gray-700"; // bisa custom warna
</script>

<div class="flex flex-col items-center justify-center bg-white rounded-xl shadow p-4">
  <p class="text-sm text-gray-500">{label}</p>
  <p class="text-2xl font-bold {color}">
    {value} <span class="text-base font-medium text-gray-600">{unit}</span>
  </p>
</div>
