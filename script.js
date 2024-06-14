// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dynamically loading projects
const projects = [
    {
        title: 'Project 1',
        description: 'Description of Project 1',
        link: 'https://example.com/project1'
    },
    {
        title: 'Project 2',
        description: 'Description of Project 2',
        link: 'https://example.com/project2'
    },
    {
        title: 'Project 3',
        description: 'Description of Project 3',
        link: 'https://example.com/project3'
    }
    // Add more projects as needed
];

const projectList = document.querySelector('.project-list');
projects.forEach(project => {
    const projectItem = document.createElement('div');
    projectItem.classList.add('project-item');
    projectItem.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <a href="${project.link}" target="_blank">View Project</a>
    `;
    projectList.appendChild(projectItem);
});

// Handling contact form submission
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Display an alert for now (you can replace this with actual form submission logic)
    alert(`Thank you for reaching out, ${name}! We will get back to you at ${email}.`);
});
