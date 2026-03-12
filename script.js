document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('.search-data');
    const cards = document.querySelectorAll('.card');
    const container = document.querySelector('.container');

    // Create a "No Results" message element once
    const noResults = document.createElement('div');
    noResults.style.display = 'none';
    noResults.style.gridColumn = '1 / -1';
    noResults.style.textAlign = 'center';
    noResults.style.padding = '2rem';
    noResults.style.color = '#64748b';
    noResults.innerHTML = `<h3>No services found matching your search.</h3>`;
    container.appendChild(noResults);

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        let visibleCount = 0;

        cards.forEach(card => {
            // Check text content of the span inside the card
            const serviceName = card.querySelector('span').textContent.toLowerCase();
            
            if (serviceName.includes(query)) {
                card.style.display = 'block';
                visibleCount++;
            } else {
                card.style.display = 'none';
            }
        });

        // Toggle "No Results" message
        noResults.style.display = visibleCount === 0 ? 'block' : 'none';
    });
});

// Keeping your onclick function as a fallback/scroll-to feature
function search() {
    const query = document.querySelector('.search-data').value.toLowerCase().trim();
    const targetCard = document.getElementById(query.replace(/\s+/g, '-'));

    if (targetCard) {
        targetCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
        targetCard.style.outline = "3px solid #2563eb";
        setTimeout(() => targetCard.style.outline = "none", 2000);
    }
}