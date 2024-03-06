// script.js

// Get all project links
const projectLinks = document.querySelectorAll('.navbar a');

// Add click event listener to each project link
projectLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    // Prevent default link behavior
    e.preventDefault();

    // Remove 'active' class from all links
    projectLinks.forEach(link => {
      link.classList.remove('active');
    });

    // Add 'active' class to the clicked link
    this.classList.add('active');

    // Load and display the corresponding project content
    loadProjectContent(this.textContent);
  });
});

// Function to load and display project content
function loadProjectContent(projectName) {
  // You can load project content dynamically here based on the selected project name
  // For simplicity, let's just update the portfolio div with the selected project name
  const portfolioDiv = document.querySelector('.portfolio');
  portfolioDiv.textContent = `This is the content for ${projectName}`;
}

