// Function to set body background color based on time of day and weekday
function setBodyBackgroundColor() {
  const now = new Date();
  const day = now.getDay(); // 0 = Sunday, 6 = Saturday
  const hour = now.getHours();

  // Weekdays are Monday (1) to Friday (5)
  const isWeekday = day >= 1 && day <= 5;
  const isMarketOpen = isWeekday && hour >= 9 && hour < 16;

  if (isMarketOpen) {
    document.body.style.backgroundColor = '#ffffff'; // nice white
    document.body.style.color = '#000000'; // black text for contrast
  } else {
    document.body.style.backgroundColor = '#2c3457'; // dark color
    document.body.style.color = '#b0bcff'; // light text for contrast
  }
}

// Run the function on page load
window.addEventListener('DOMContentLoaded', setBodyBackgroundColor);
