import mlEngineering from '../assets/skills/PopcornGuru.jpg';
import uiDesign from '../assets/skills/Datacube.jpg';
import myPortfolio from '../assets/skills/myPortfolio.jpg';
import backend from '../assets/skills/Backend.jpg';

export const skillModel = [
    {
        "title": "UI/UX",
        "category": "Design",
        "language": [
            "Figma",
            "Adobe Photoshop",
            "Adobe Illustrator",
            "Adobe After Effects",
        ],
        "img": uiDesign,
        "projectTitle": "Datacube.ai",
        "projectRole": "Designer",
        "projectDate": "April, 2021 - August 2023",
        "keyPoints": [
            "Created an interactive and user-friendly design that attracted over 500 clients, impacting more than 100,000 employees who utilize the product directly or indirectly",
            "Designed a fully custom dashboard with a neutral color palette, allowing clients to seamlessly integrate their brand colors for a personalized experience",
            "Adapted responsive design principles to ensure optimal performance across various screen sizes, including large TV displays, enhancing accessibility for all users",
            "Developed a comprehensive design system to maintain coherence across the product, streamlining the design process and improving collaboration with developers",
        ],
        "link": "https://datacube.ai"
    },
    {
        "title": "Frontend",
        "category": "Development",
        "language": [
            "HTML",
            "CSS",
            "JavaScript",
            "Tailwind CSS",
            "React.js",
            "GSAP",
            "Lenis",
            "Git",
        ],
        "img": myPortfolio,
        "projectTitle": "My Personal Website",
        "projectRole": "Developer",
        "projectDate": "June 2024 - August 2024",
        "keyPoints": [
            "Developed a functional and visually engaging personal website using React.js and Tailwind CSS, featuring interactive animations for an enhanced user experience",
            "Utilized Lenis and GSAP to create smooth interactions, resulting in a polished browsing experience",
            "Managed continuous development, testing, and deployment, ensuring optimal performance and regular updates",
        ],
        "link": "https://gulamsulaman.com"
    },
    {
        "title": "Backend",
        "category": "Development",
        "language": [
          "Node.js",
          "Django",
          "Express.js",
          "MongoDB",
          "Mysql",
          "AWS",
          "Google Cloud",
          "Docker"
        ],
        "img": backend,
        "projectTitle": "Roamora",
        "projectRole": "Full-stack Developer",
        "projectDate": "Coming Soon",
        "keyPoints": [
            "Built a scalable, responsive hotel directory with a Node.js and Express backend and a React.js + Tailwind CSS frontend, providing users a smooth and visually engaging experience",
            "Integrated JWT tokens for secure login and MongoDB for efficient data storage, enabling authenticated access to booking features and ensuring data integrity",
            "Implemented seamless hotel booking and payment processing using Stripe, allowing users to book hotels directly and securely through the site",
            "Leveraged Cloudinary for managing media files, enhancing load times, and employed Playwright for comprehensive testing, ensuring a fast, reliable user experience",
        ],
        "link": "#"
    },
    {
        "title": "ML",
        "category": "Engineering",
        "language": [
            "TensorFlow",
            "Scikit-learn",
            "NLTK",
            "spaCy",
            "numpy",
            "pandas",
        ],
        "img": mlEngineering,
        "projectTitle": "Popcorn Guru",
        "projectRole": "Developer",
        "projectDate": "December 2023",
        "keyPoints": [
            "Developed a content-based movie recommender to match user preferences with similar movies",
            "Cleaned data, handled missing or duplicate values, and extracted relevant fields for streamlined processing",
            "Built a similarity matrix using vectorization and cosine similarity for accurate recommendations",
            "Focused on top 3 actors and director for targeted, relevant movie suggestions",
            "Created API endpoints with Node.js and Express, and a React frontend for real-time, personalized recommendations",
        ],
        "link": "https://popcorn-guru.vercel.app"
    },
]