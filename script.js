document.addEventListener("DOMContentLoaded", () => {
    const toggleThemeButton = document.getElementById("toggleTheme"); // Icon element
    const githubLogo = document.querySelector('img[alt="github icon"]');
    const emailLogo = document.querySelector('img[alt="email icon"]');
    
    const lightThemeLogos = {
        github: "assets/github_light.png",
        email: "assets/email_light.png",
        theme: "assets/theme_light.png",
    };

    const darkThemeLogos = {
        github: "assets/github_dark.png",
        email: "assets/email_dark.png",
        theme: "assets/theme_dark.png",
    };

    function setTheme(isDarkMode) {
        githubLogo.src = isDarkMode ? darkThemeLogos.github : lightThemeLogos.github;
        emailLogo.src = isDarkMode ? darkThemeLogos.email : lightThemeLogos.email;
        toggleThemeButton.src = isDarkMode ? darkThemeLogos.theme : lightThemeLogos.theme;
    }

    toggleThemeButton.addEventListener("click", () => {
        const isDarkMode = document.body.classList.toggle("dark-theme");
        localStorage.setItem("theme", isDarkMode ? "dark" : "light");
        setTheme(isDarkMode);
    });

    function loadTheme() {
        const savedTheme = localStorage.getItem("theme") || "light";
        const isDarkMode = savedTheme === "dark";
        document.body.classList.toggle("dark-theme", isDarkMode);
        setTheme(isDarkMode);
    }

    loadTheme();

    // Portfolio and Skills Section Toggle
    const portfolioBtn = document.getElementById("portfolio-btn");
    const skillsBtn = document.getElementById("skilss-btn");
    const portfolioSection = document.getElementById("portfolio");
    const skillsSection = document.getElementById("skills");

    function toggleActive(button, sectionToShow, sectionToHide) {
        portfolioBtn.classList.remove("active-btn");
        skillsBtn.classList.remove("active-btn");
        button.classList.add("active-btn");

        sectionToShow.style.display = "flex";
        sectionToHide.style.display = "none";
    }

    // Show portfolio by default
    skillsSection.style.display = "none";

    portfolioBtn.addEventListener("click", () => {
        toggleActive(portfolioBtn, portfolioSection, skillsSection);
    });

    skillsBtn.addEventListener("click", () => {
        toggleActive(skillsBtn, skillsSection, portfolioSection);
    });
});
