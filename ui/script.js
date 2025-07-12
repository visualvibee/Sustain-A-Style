let clothingData = [];

window.addEventListener("DOMContentLoaded", () => {
  fetch("clothes.json")
    .then((res) => res.json())
    .then((data) => (clothingData = data))
    .catch((err) => {
      document.getElementById("result").innerHTML =
        '<p class="text-red-600">Error loading data.</p>';
    });
});

function searchClothing() {
  const input = document.getElementById("search").value.trim().toLowerCase();
  const resultDiv = document.getElementById("result");

  if (!input) {
    resultDiv.innerHTML =
      '<p class="text-red-500">Please enter a clothing item.</p>';
    return;
  }

  const match = clothingData.find(
    (item) => item.type.toLowerCase() === input
  );

  if (match) {
    resultDiv.innerHTML = `
      <div>
        <p><strong>🧵 Material:</strong> ${match.material}</p>
        <p><strong>🔄 Recycling Difficulty:</strong> ${match.recycling_difficulty}</p>
        <p><strong>♻️ Reuse Ideas:</strong> ${match.reuse_options.join(", ")}</p>
        <p><strong>🎁 Donation Suggestions:</strong> ${match.donate_options.join(", ")}</p>
      </div>
    `;
  } else {
    resultDiv.innerHTML = `<p class="text-yellow-600">No data found for "${input}". Try another item like "jeans" or "sweater".</p>`;
  }
}
