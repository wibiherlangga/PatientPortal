<script>
  let records = [
    {
      tanggal: "2025-09-01",
      dokter: "dr. Budi",
      diagnosa: "Hipertensi",
      tindakan: "Kontrol tekanan darah",
      resep: "Amlodipin 10mg"
    },
    {
      tanggal: "2025-08-15",
      dokter: "dr. Sari",
      diagnosa: "Diabetes Mellitus",
      tindakan: "Cek gula darah",
      resep: "Metformin 500mg"
    },
    {
      tanggal: "2025-08-05",
      dokter: "dr. Joko",
      diagnosa: "Demam",
      tindakan: "Cek lab darah lengkap",
      resep: "Paracetamol 500mg"
    }
  ];
</script>

<div class="bg-white rounded-2xl shadow p-4">
  <h2 class="text-lg font-semibold text-gray-700 mb-3">Rekam Medis</h2>
  
  <div class="overflow-x-auto">
    <table class="w-full text-sm text-left text-gray-600 border">
      <thead class="bg-gray-100 text-gray-700 text-xs uppercase">
        <tr>
          <th class="px-4 py-2 border">Tanggal</th>
          <th class="px-4 py-2 border">Dokter</th>
          <th class="px-4 py-2 border">Diagnosa</th>
          <th class="px-4 py-2 border">Tindakan</th>
          <th class="px-4 py-2 border">Resep</th>
        </tr>
      </thead>
      <tbody>
        {#each records as r}
          <tr class="hover:bg-gray-50">
            <td class="px-4 py-2 border">{r.tanggal}</td>
            <td class="px-4 py-2 border">{r.dokter}</td>
            <td class="px-4 py-2 border">{r.diagnosa}</td>
            <td class="px-4 py-2 border">{r.tindakan}</td>
            <td class="px-4 py-2 border">{r.resep}</td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</div>
