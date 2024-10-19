// Update last modified date
const lastModified = document.lastModified;
const options = { year: 'numeric', month: 'long', day: 'numeric' };
const formattedDate = new Date(lastModified).toLocaleDateString(undefined, options);
document.getElementById('last-updated').textContent = `Last updated: ${formattedDate}`;

// Wait for the DOM to load before adding event listeners
document.addEventListener("DOMContentLoaded", function() {
    const sidebar = document.getElementById("sidebar");
    const toggleButton = document.getElementById("toggle-sidebar");
    
    // Create open-sidebar button dynamically
    const openButton = document.createElement("button");
    openButton.id = "open-sidebar";
    openButton.innerHTML = '<img src="../menu-icon.png" alt="Open Sidebar" class="menu-icon">'; // Ensure the path is correct
    openButton.style.display = "block"; // Show the open button initially
    openButton.style.opacity = "0.5"; // Set opacity to indicate it's inactive
    document.body.appendChild(openButton); // Append the button to the body

    // Add event listener to toggle the sidebar
    toggleButton.addEventListener("click", function() {
        sidebar.classList.toggle("collapsed"); // Toggle the 'collapsed' class
        
        // Show or hide the open button based on the sidebar's state
        if (sidebar.classList.contains("collapsed")) {
            openButton.style.display = "block"; // Show the open button
            setTimeout(() => { openButton.style.opacity = "0.5"; }, 0); // Set opacity to 0.5
            document.querySelector(".pre-header").classList.add("shifted"); // Add the shifted class
        } else {
            openButton.style.opacity = "0"; // Hide the open button smoothly
            setTimeout(() => { openButton.style.display = "none"; }, 300); // Remove from display
            document.querySelector(".pre-header").classList.remove("shifted"); // Remove the shifted class
        }
    });

    // Add event listener to open the sidebar
    openButton.addEventListener("click", function() {
        sidebar.classList.remove("collapsed"); // Remove the 'collapsed' class
        openButton.style.opacity = "0"; // Hide the open button smoothly
        setTimeout(() => { openButton.style.display = "none"; }, 300); // Remove from display
        document.querySelector(".pre-header").classList.remove("shifted"); // Remove the shifted class
    });
});

// Redirect to a specific URL when the button is clicked
document.getElementById('upload-button').addEventListener('click', function() {
    window.location.href = 'https://mega.nz/filerequest/DwNHnwjQGv4'; // Your target URL
});

