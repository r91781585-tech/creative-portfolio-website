// Portfolio Configuration
// Edit these values to customize your portfolio

const portfolioConfig = {
    // Personal Information
    personal: {
        name: "Your Name",
        title: "Creative Developer & Designer",
        description: "Crafting digital experiences with passion and precision",
        email: "your.email@example.com",
        phone: "+1 (555) 123-4567",
        location: "Your City, Country",
        profileImage: "path/to/your/image.jpg" // Add your profile image path
    },

    // Social Media Links
    social: {
        github: "https://github.com/yourusername",
        linkedin: "https://linkedin.com/in/yourusername",
        twitter: "https://twitter.com/yourusername",
        instagram: "https://instagram.com/yourusername",
        behance: "https://behance.net/yourusername",
        dribbble: "https://dribbble.com/yourusername"
    },

    // Skills Configuration
    skills: {
        frontend: [
            { name: "HTML5", icon: "fab fa-html5" },
            { name: "CSS3", icon: "fab fa-css3-alt" },
            { name: "JavaScript", icon: "fab fa-js-square" },
            { name: "React", icon: "fab fa-react" },
            { name: "Vue.js", icon: "fab fa-vuejs" },
            { name: "TypeScript", icon: "fab fa-js-square" }
        ],
        backend: [
            { name: "Node.js", icon: "fab fa-node-js" },
            { name: "Python", icon: "fab fa-python" },
            { name: "MongoDB", icon: "fas fa-database" },
            { name: "PostgreSQL", icon: "fas fa-database" },
            { name: "Express.js", icon: "fas fa-server" },
            { name: "Django", icon: "fab fa-python" }
        ],
        tools: [
            { name: "Git", icon: "fab fa-git-alt" },
            { name: "Docker", icon: "fab fa-docker" },
            { name: "AWS", icon: "fab fa-aws" },
            { name: "Figma", icon: "fab fa-figma" },
            { name: "VS Code", icon: "fas fa-code" },
            { name: "Webpack", icon: "fas fa-cube" }
        ]
    },

    // Projects Configuration
    projects: [
        {
            title: "E-Commerce Platform",
            description: "A modern e-commerce solution built with React and Node.js",
            image: "path/to/project1-image.jpg",
            technologies: ["React", "Node.js", "MongoDB", "Stripe"],
            liveUrl: "https://your-project-live-url.com",
            githubUrl: "https://github.com/yourusername/project1",
            featured: true
        },
        {
            title: "Task Management App",
            description: "Collaborative task management with real-time updates",
            image: "path/to/project2-image.jpg",
            technologies: ["Vue.js", "Firebase", "CSS3", "PWA"],
            liveUrl: "https://your-project-live-url.com",
            githubUrl: "https://github.com/yourusername/project2",
            featured: true
        },
        {
            title: "Weather Dashboard",
            description: "Beautiful weather app with interactive charts and maps",
            image: "path/to/project3-image.jpg",
            technologies: ["JavaScript", "Chart.js", "API", "CSS3"],
            liveUrl: "https://your-project-live-url.com",
            githubUrl: "https://github.com/yourusername/project3",
            featured: true
        }
    ],

    // Statistics/Counters
    stats: [
        { label: "Projects Completed", value: 50 },
        { label: "Years Experience", value: 3 },
        { label: "Happy Clients", value: 100 },
        { label: "Code Commits", value: 1000 }
    ],

    // About Section
    about: {
        intro: "I'm a passionate developer who loves creating beautiful and functional digital experiences.",
        description: "With expertise in modern web technologies, I bring ideas to life through clean code and innovative design. I believe in the power of technology to solve real-world problems and create meaningful connections.",
        resumeUrl: "path/to/your/resume.pdf"
    },

    // Theme Configuration
    theme: {
        primaryColor: "#6366f1",
        secondaryColor: "#8b5cf6",
        accentColor: "#f59e0b",
        darkMode: false // Set to true for dark mode by default
    },

    // Animation Settings
    animations: {
        enableCursorTrail: true,
        enableParticles: true,
        enableTypingEffect: true,
        enableScrollAnimations: true,
        enableCounterAnimation: true
    },

    // Contact Form Configuration
    contact: {
        formAction: "https://formspree.io/f/your-form-id", // Replace with your form service
        successMessage: "Thank you! Your message has been sent successfully.",
        errorMessage: "Oops! Something went wrong. Please try again."
    },

    // SEO Configuration
    seo: {
        title: "Your Name - Creative Developer & Designer",
        description: "Portfolio of Your Name - Creative Developer & Designer specializing in modern web development",
        keywords: "web developer, designer, portfolio, react, javascript, css, html",
        author: "Your Name",
        image: "path/to/og-image.jpg" // Open Graph image
    }
};

// Export configuration (if using modules)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = portfolioConfig;
}

// Make available globally
window.portfolioConfig = portfolioConfig;