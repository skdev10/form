document.addEventListener('DOMContentLoaded', function () {
    const headlineSlider = document.getElementById('headlineSlider');

     function updateDateTime() {
        const currentDateTime = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };
        const formattedDateTime = currentDateTime.toLocaleString('en-US', options);

        const headline = document.createElement('div');
        headline.className = 'headline';
        headline.textContent = formattedDateTime;

        headlineSlider.innerHTML = '';
        headlineSlider.appendChild(headline);
    }

    // Initial update
    updateDateTime();

    // Update every second
    setInterval(updateDateTime, 1000);
});