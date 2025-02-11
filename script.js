
function updateTime() {
    const now = new Date();
    
    // Time format: Hours:Minutes:Seconds
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;

    // Date format: Day, Month, Year
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Month is zero-indexed
    const year = now.getFullYear();
    const dateString = `${day}/${month}/${year}`;

    // Display the time and date in the footer
    document.getElementById('clock').innerText = `Current Time: ${timeString}`;
    document.getElementById('date').innerText = `Today's Date: ${dateString}`;
  }

  // Update the time and date every second
  setInterval(updateTime, 1000);

  // Initial call to display the time and date immediately
  updateTime();
