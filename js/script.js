const map = L.map('mapid').setView([-6.9222, 106.9263], 13);
document.getElementById("mapid").scrollIntoView({ behavior: "smooth" });
function focusMap(lat, lng, name) {
  map.setView([lat, lng], 17); // Zoom ke lokasi
  L.popup()
    .setLatLng([lat, lng])
    .setContent(`<b>${name}</b><br>Lokasi ditampilkan.`)
    .openOn(map);
}
// Tambahkan legenda otomatis
const legendContainer = document.getElementById('legend-content');

Object.entries(denominations).forEach(([denom, data]) => {
  const item = document.createElement('div');
  item.className = 'legend-item';
  item.innerHTML = `
    <div class="legend-color" style="background-color:${data.color}"></div>
    <div class="legend-label">
      <strong>${denom}</strong><br>
      <span class="legend-description">${data.desc}</span>
    </div>
  `;
  legendContainer.appendChild(item);
});
const denominations = {
  'Katolik': { color: 'red'},
  'GKI': { color: 'blue'},
  'HKBP': { color: 'green' },
  'Pantekosta': { color: 'orange'},
  'Pasundan': { color: 'purple'},
  'Bethel': { color: 'deeppink' }
};
