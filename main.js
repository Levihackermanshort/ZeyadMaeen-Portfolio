// Create a container element for the site
const container = document.createElement('div');
container.innerHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio</title>
    <style>
        /* Base Styles */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Inter', 'Segoe UI', 'Roboto', sans-serif;
            background-color: #0a0a19;
            color: #ffffff;
            overflow-x: hidden;
            line-height: 1.6;
        }
        
        html {
            scroll-behavior: smooth;
        }
        
        a {
            color: #ffffff;
            text-decoration: none;
            transition: color 0.3s ease;
        }
        
        a:hover {
            color: #8a2be2;
        }
        
        /* Animated Background */
        .animated-background {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
            overflow: hidden;
            pointer-events: none;
            background: #0a0a19;
        }
        
        .stars {
            position: absolute;
            width: 1px;
            height: 1px;
            background: white;
            border-radius: 50%;
            box-shadow: 
                0 0 1px #fff,
                1vw 3vh 0.6px #fff,
                3vw 9vh 0.7px #fff,
                5vw 15vh 0.5px #fff,
                7vw 22vh 0.9px #fff,
                9vw 29vh 0.8px #fff,
                11vw 36vh 0.8px #fff,
                13vw 43vh 0.6px #fff,
                15vw 50vh 0.7px #fff,
                17vw 57vh 0.5px #fff,
                19vw 64vh 0.9px #fff,
                21vw 71vh 0.8px #fff,
                23vw 78vh 0.6px #fff,
                25vw 85vh 0.7px #fff,
                27vw 92vh 0.5px #fff,
                29vw 99vh 0.9px #fff,
                31vw 106vh 0.8px #fff,
                33vw 113vh 0.6px #fff,
                35vw 120vh 0.7px #fff,
                37vw 127vh 0.5px #fff,
                39vw 134vh 0.9px #fff,
                41vw 141vh 0.8px #fff,
                43vw 148vh 0.6px #fff,
                45vw 155vh 0.7px #fff,
                47vw 162vh 0.5px #fff,
                49vw 169vh 0.9px #fff,
                51vw 176vh 0.8px #fff,
                53vw 183vh 0.6px #fff,
                55vw 190vh 0.7px #fff,
                57vw 197vh 0.5px #fff,
                59vw 204vh 0.9px #fff,
                61vw 211vh 0.8px #fff,
                63vw 218vh 0.6px #fff,
                65vw 225vh 0.7px #fff,
                67vw 232vh 0.5px #fff,
                69vw 239vh 0.9px #fff,
                71vw 246vh 0.8px #fff,
                73vw 253vh 0.6px #fff,
                75vw 260vh 0.7px #fff,
                77vw 267vh 0.5px #fff,
                79vw 274vh 0.9px #fff,
                81vw 281vh 0.8px #fff,
                83vw 288vh 0.6px #fff,
                85vw 295vh 0.7px #fff,
                87vw 302vh 0.5px #fff,
                89vw 309vh 0.9px #fff,
                91vw 316vh 0.8px #fff,
                93vw 323vh 0.6px #fff,
                95vw 330vh 0.7px #fff,
                97vw 337vh 0.5px #fff,
                99vw 344vh 0.9px #fff;
            animation: animateStars 150s linear infinite;
        }

        .stars2 {
            position: absolute;
            width: 2px;
            height: 2px;
            background: rgba(255, 255, 255, 0.9);
            border-radius: 50%;
            box-shadow: 
                0 0 2px rgba(255, 255, 255, 0.7),
                2vw 6vh 1.2px rgba(255, 255, 255, 0.7),
                6vw 15vh 1.4px rgba(255, 255, 255, 0.7),
                10vw 24vh 1px rgba(255, 255, 255, 0.7),
                14vw 33vh 1.8px rgba(255, 255, 255, 0.7),
                18vw 42vh 1.6px rgba(255, 255, 255, 0.7),
                22vw 51vh 1.6px rgba(255, 255, 255, 0.7),
                26vw 60vh 1.2px rgba(255, 255, 255, 0.7),
                30vw 69vh 1.4px rgba(255, 255, 255, 0.7),
                34vw 78vh 1px rgba(255, 255, 255, 0.7),
                38vw 87vh 1.8px rgba(255, 255, 255, 0.7),
                42vw 96vh 1.6px rgba(255, 255, 255, 0.7),
                46vw 105vh 1.2px rgba(255, 255, 255, 0.7),
                50vw 114vh 1.4px rgba(255, 255, 255, 0.7),
                54vw 123vh 1px rgba(255, 255, 255, 0.7),
                58vw 132vh 1.8px rgba(255, 255, 255, 0.7),
                62vw 141vh 1.6px rgba(255, 255, 255, 0.7),
                66vw 150vh 1.2px rgba(255, 255, 255, 0.7),
                70vw 159vh 1.4px rgba(255, 255, 255, 0.7),
                74vw 168vh 1px rgba(255, 255, 255, 0.7),
                78vw 177vh 1.8px rgba(255, 255, 255, 0.7),
                82vw 186vh 1.6px rgba(255, 255, 255, 0.7),
                86vw 195vh 1.2px rgba(255, 255, 255, 0.7),
                90vw 204vh 1.4px rgba(255, 255, 255, 0.7),
                94vw 213vh 1px rgba(255, 255, 255, 0.7),
                98vw 222vh 1.8px rgba(255, 255, 255, 0.7);
            animation: animateStars 100s linear infinite;
        }

        .orbs {
            position: absolute;
            width: 100%;
            height: 100%;
        }

        .orb {
            position: absolute;
            border-radius: 50%;
            opacity: 0.6;
            filter: blur(20px);
            animation: floatOrb 15s ease-in-out infinite;
        }

        .orb:nth-child(1) {
            width: 150px;
            height: 150px;
            background: rgba(138, 43, 226, 0.3);
            top: 20%;
            left: 15%;
            animation-delay: 0s;
        }

        .orb:nth-child(2) {
            width: 100px;
            height: 100px;
            background: rgba(70, 130, 180, 0.3);
            top: 60%;
            left: 75%;
            animation-delay: -2s;
        }

        .orb:nth-child(3) {
            width: 120px;
            height: 120px;
            background: rgba(186, 85, 211, 0.3);
            top: 75%;
            left: 30%;
            animation-delay: -5s;
        }

        .orb:nth-child(4) {
            width: 80px;
            height: 80px;
            background: rgba(72, 61, 139, 0.3);
            top: 40%;
            left: 80%;
            animation-delay: -7s;
        }

        .orb:nth-child(5) {
            width: 180px;
            height: 180px;
            background: rgba(106, 90, 205, 0.2);
            top: 15%;
            left: 60%;
            animation-delay: -9s;
        }

        /* Header Styles */
        header {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            padding: 20px 40px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            z-index: 100;
            transition: background-color 0.3s ease;
        }
        
        header.scrolled {
            background-color: rgba(10, 10, 25, 0.9);
            backdrop-filter: blur(10px);
        }
        
        .logo {
            font-weight: bold;
            font-size: 1.5rem;
            color: #ffffff;
        }
        
        nav ul {
            display: flex;
            list-style: none;
            gap: 30px;
        }
        
        nav ul li a {
            font-size: 1rem;
            padding: 5px 0;
            position: relative;
        }
        
        nav ul li a::after {
            content: '';
            position: absolute;
            bottom: -2px;
            left: 0;
            width: 0;
            height: 2px;
            background-color: #8a2be2;
            transition: width 0.3s ease;
        }
        
        nav ul li a:hover::after {
            width: 100%;
        }
        
        /* Hero Section */
        .hero {
            height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 0 20px;
            text-align: center;
            position: relative;
        }
        
        .hero h1 {
            font-size: clamp(2.5rem, 8vw, 5rem);
            font-weight: 700;
            margin: 0 0 20px 0;
            color: white;
            line-height: 1.1;
            opacity: 0;
            transform: translateY(30px);
            animation: fadeInUp 0.8s ease forwards 0.3s;
        }
        
        .hero h1 span {
            color: #8a2be2;
        }
        
        .hero p {
            font-size: clamp(1rem, 2vw, 1.3rem);
            max-width: 600px;
            margin: 0 auto;
            color: rgba(255, 255, 255, 0.8);
            opacity: 0;
            transform: translateY(30px);
            animation: fadeInUp 0.8s ease forwards 0.8s;
        }
        
        .hero-btn {
            margin-top: 40px;
            opacity: 0;
            transform: translateY(30px);
            animation: fadeInUp 0.8s ease forwards 1.2s;
        }
        
        .btn {
            padding: 12px 28px;
            background-color: #8a2be2;
            color: white;
            border: none;
            border-radius: 30px;
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
            box-shadow: 0 4px 20px rgba(138, 43, 226, 0.4);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            display: inline-block;
        }
        
        .btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 25px rgba(138, 43, 226, 0.5);
        }
        
        /* About Section */
        .about {
            min-height: 100vh;
            padding: 120px 40px;
            position: relative;
            background: linear-gradient(to bottom, rgba(10, 10, 25, 0), rgba(10, 10, 25, 0.7), rgba(10, 10, 25, 0));
        }
        
        .about-container {
            max-width: 1000px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 50px;
            align-items: center;
        }
        
        .section-title {
            font-size: clamp(1.8rem, 4vw, 2.5rem);
            color: white;
            margin-bottom: 20px;
            position: relative;
            display: inline-block;
        }
        
        .section-title::after {
            content: '';
            position: absolute;
            bottom: -8px;
            left: 0;
            width: 40%;
            height: 3px;
            background: linear-gradient(90deg, #8a2be2, transparent);
            border-radius: 2px;
        }
        
        .about-text p {
            font-size: 1rem;
            line-height: 1.8;
            color: rgba(255, 255, 255, 0.8);
            margin-bottom: 20px;
        }
        
        .skills-card {
            background-color: rgba(25, 25, 45, 0.5);
            border-radius: 12px;
            padding: 30px;
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .skills-title {
            font-size: 1.3rem;
            color: white;
            margin-bottom: 20px;
        }
        
        .skills-list {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
        }
        
        .skill-tag {
            background-color: rgba(138, 43, 226, 0.2);
            color: white;
            padding: 8px 15px;
            border-radius: 20px;
            font-size: 0.9rem;
            border: 1px solid rgba(138, 43, 226, 0.3);
        }
        
        /* Projects Section */
        .projects {
            min-height: 100vh;
            padding: 120px 40px 80px;
            position: relative;
        }
        
        .projects-container {
            max-width: 1200px;
            margin: 0 auto;
        }
        
        .projects-title {
            font-size: clamp(2rem, 5vw, 3rem);
            color: white;
            margin-bottom: 60px;
            text-align: center;
            position: relative;
            display: inline-block;
            left: 50%;
            transform: translateX(-50%);
        }
        
        .projects-title::after {
            content: '';
            position: absolute;
            bottom: -10px;
            left: 0;
            width: 60%;
            height: 4px;
            background: linear-gradient(90deg, #8a2be2, transparent);
            border-radius: 2px;
        }
        
        .projects-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 30px;
            margin-top: 40px;
        }
        
        .project-card {
            background-color: rgba(25, 25, 40, 0.7);
            border-radius: 12px;
            overflow: hidden;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            position: relative;
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            padding: 30px;
            display: flex;
            flex-direction: column;
            height: 280px;
            cursor: pointer;
        }
        
        .project-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }
        
        .project-category {
            color: #8a2be2;
            font-size: 0.9rem;
            margin-bottom: 15px;
        }
        
        .project-title {
            font-size: 1.5rem;
            color: white;
            margin-bottom: 15px;
        }
        
        .project-description {
            color: rgba(255, 255, 255, 0.7);
            margin-bottom: 25px;
            line-height: 1.6;
        }
        
        .project-btn {
            margin-top: auto;
            align-self: flex-start;
            background-color: transparent;
            color: white;
            border: 1px solid rgba(255, 255, 255, 0.3);
            border-radius: 20px;
            padding: 8px 16px;
            font-size: 0.9rem;
            cursor: pointer;
            transition: background-color 0.3s ease, border-color 0.3s ease;
        }
        
        .project-btn:hover {
            background-color: rgba(138, 43, 226, 0.1);
            border-color: #8a2be2;
        }
        
        /* Footer */
        footer {
            padding: 50px 40px;
            background-color: rgba(10, 10, 25, 0.9);
            border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .footer-container {
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        
        .footer-title {
            font-size: 2rem;
            color: white;
            margin-bottom: 20px;
            text-align: center;
        }
        
        .footer-text {
            color: rgba(255, 255, 255, 0.7);
            margin-bottom: 30px;
            text-align: center;
            max-width: 500px;
        }
        
        .social-links {
            display: flex;
            gap: 20px;
            margin-bottom: 40px;
            flex-wrap: wrap;
            justify-content: center;
        }
        
        .social-link {
            color: white;
            text-decoration: none;
            padding: 8px 15px;
            border: 1px solid rgba(255, 255, 255, 0.3);
            border-radius: 20px;
            transition: background-color 0.3s ease, border-color 0.3s ease;
        }
        
        .social-link:hover {
            background-color: rgba(138, 43, 226, 0.1);
            border-color: #8a2be2;
        }
        
        .copyright {
            color: rgba(255, 255, 255, 0.5);
            font-size: 0.9rem;
            text-align: center;
        }
        
        .creator {
            margin-top: 10px;
            color: rgba(255, 255, 255, 0.5);
        }
        
        /* Animations */
        @keyframes fadeInUp {
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        @keyframes float {
            0% {
                transform: translateY(0px);
            }
            50% {
                transform: translateY(-10px);
            }
            100% {
                transform: translateY(0px);
            }
        }
        
        @keyframes animateStars {
            from {
                transform: translateY(0);
            }
            to {
                transform: translateY(-100vh);
            }
        }
        
        @keyframes floatOrb {
            0%, 100% {
                transform: translateY(0);
            }
            50% {
                transform: translateY(-20px);
            }
        }
        
        /* Media Queries */
        @media (max-width: 768px) {
            header {
                padding: 15px 20px;
            }
            
            nav ul {
                gap: 15px;
            }
            
            .hero, .about, .projects {
                padding-left: 20px;
                padding-right: 20px;
            }
            
            .skills-card {
                margin-top: 30px;
            }
            
            .social-links {
                flex-direction: column;
                align-items: center;
            }
        }
    </style>
</head>
<body>
    <!-- Animated Background -->
    <div class="animated-background">
        <div class="stars"></div>
        <div class="stars2"></div>
        <div class="orbs">
            <div class="orb"></div>
            <div class="orb"></div>
            <div class="orb"></div>
            <div class="orb"></div>
            <div class="orb"></div>
        </div>
    </div>
    
    <!-- Header -->
    <header id="header">
        <div class="logo">PORTFOLIO</div>
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>
    
    <!-- Hero Section -->
    <section id="home" class="hero">
        <h1>Creative <span>Developer</span> & Designer</h1>
        <p>Building digital experiences with attention to detail, animation, and interaction.</p>
        <div class="hero-btn">
            <a href="#projects" class="btn">Explore Projects</a>
        </div>
    </section>
    
    <!-- About Section -->
    <section id="about" class="about">
        <div class="about-container">
            <div class="about-text">
                <h2 class="section-title">About Me</h2>
                <p>
                    I am a creative developer passionate about building immersive web experiences. 
                    With a background in both design and development, I focus on creating engaging 
                    digital solutions that combine aesthetic appeal with technical excellence.
                </p>
                <p>
                    My approach involves understanding the goals of each project and 
                    implementing solutions that deliver both visual impact and exceptional user experience.
                </p>
            </div>
            
            <div class="skills-card">
                <h3 class="skills-title">Skills & Expertise</h3>
                <div class="skills-list">
                    <span class="skill-tag">JavaScript</span>
                    <span class="skill-tag">React</span>
                    <span class="skill-tag">Three.js</span>
                    <span class="skill-tag">Node.js</span>
                    <span class="skill-tag">UI/UX Design</span>
                    <span class="skill-tag">Animation</span>
                    <span class="skill-tag">Responsive Design</span>
                </div>
            </div>
        </div>
    </section>
    
    <!-- Projects Section -->
    <section id="projects" class="projects">
        <div class="projects-container">
            <h2 class="projects-title">Featured Projects</h2>
            
            <div class="projects-grid">
                <div class="project-card">
                    <span class="project-category">Web Development</span>
                    <h3 class="project-title">E-Commerce Platform</h3>
                    <p class="project-description">A modern online shopping experience with React and Node.js.</p>
                    <a href="#" class="project-btn">View Project</a>
                </div>
                
                <div class="project-card">
                    <span class="project-category">Mobile App</span>
                    <h3 class="project-title">Mobile Banking App</h3>
                    <p class="project-description">Secure and intuitive financial management application.</p>
                    <a href="#" class="project-btn">View Project</a>
                </div>
                
                <div class="project-card">
                    <span class="project-category">UI/UX Design</span>
                    <h3 class="project-title">Interactive Dashboard</h3>
                    <p class="project-description">Data visualization and analytics platform with real-time updates.</p>
                    <a href="#" class="project-btn">View Project</a>
                </div>
            </div>
        </div>
    </section>
    
    <!-- Footer -->
    <footer id="contact">
        <div class="footer-container">
            <h2 class="footer-title">Let's Connect</h2>
            <p class="footer-text">
                Interested in working together? Feel free to reach out for collaborations or just a friendly hello.
            </p>
            
            <div class="social-links">
                <a href="#" class="social-link">Email</a>
                <a href="#" class="social-link">LinkedIn</a>
                <a href="#" class="social-link">GitHub</a>
                <a href="#" class="social-link">Twitter</a>
            </div>
            
            <div class="copyright">
                © 2024 Portfolio. All rights reserved.
                <div class="creator">© 2024 created by Zeyad Maeen</div>
            </div>
        </div>
    </footer>
    
    <script>
        // Simple script to handle header background on scroll
        document.addEventListener('DOMContentLoaded', function() {
            const header = document.getElementById('header');
            
            window.addEventListener('scroll', function() {
                if (window.scrollY > 50) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            });
        });
    </script>
</body>
</html>
`;

// Append to the document
document.body.appendChild(container);
