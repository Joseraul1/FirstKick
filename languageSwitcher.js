// Declarar todas las traducciones en un solo lugar
const translations = {
    en: {
        "login-title": "Login",
        "login-heading": "Sign In",
        "username-label": "Username",
        "password-label": "Password",
        "login-btn": "Log In",
        "forgot-password": "Forgot your password?",
        "title": "First Kick",
        "site-name": "FirstKick",
        "search-placeholder": "Search...",
        "home-link": "Home",
        "discover-link": "Discover",
        "uploads-link": "Uploads",
        "profile-link": "Profile",
        "settings-link": "Settings",
        "change-lang-btn": "Change Language",
        "my-profile": "My Profile",
        "user-name": "User Name",
        "edit-profile-btn": "Edit Profile",
        "post-user-name": "User Name",
        "post-text": "This is a sample post on the social network!",
        "like-btn": "👍 Like",
        "comment-btn": "💬 Comment",
        "share-btn": "↪️ Share",
        "connect-title": "Connect and Grow",
        "footer-text": "Join our community of professionals and take your career to the next level!",
        "about-link": "About Us",
        "careers-link": "Job Opportunities",
        "help-link": "Help and Support",
        "privacy-link": "Privacy Policy",
        "terms-link": "Terms of Use",
        "footer-copyright": "© 2024 FirstKick. All rights reserved.",
        "filter-title": "Search Filters",
        "category-label": "Category:",
        "all": "All",
        "players": "Players",
        "schools": "Schools",
        "teams": "Teams",
        "brands": "Brands",
        "sport-label": "Sport:",
        "all-sports": "All Sports",
        "football": "Football",
        "basketball": "Basketball",
        "baseball": "Baseball",
        "others": "Others",
        "apply-filters-btn": "Apply Filters",
        "create-post": "Create a New Post",
        "upload-image-label": "Upload an Image",
        "upload-video-label": "Upload a Video",
        "submit-post-btn": "Post",
        "top-post-title": "Top Post of the Day",
        "top-post-text": "This is a featured post on the platform!"
    },
    es: {
        "login-title": "Iniciar sesión",
        "login-heading": "Iniciar sesión",
        "username-label": "Nombre de usuario",
        "password-label": "Contraseña",
        "login-btn": "Iniciar sesión",
        "forgot-password": "¿Olvidaste tu contraseña?",
        "title": "First Kick",
        "site-name": "FirstKick",
        "search-placeholder": "Buscar...",
        "home-link": "Inicio",
        "discover-link": "Descubrir",
        "uploads-link": "Subir",
        "profile-link": "Perfil",
        "settings-link": "Configuración",
        "change-lang-btn": "Cambiar idioma",
        "my-profile": "Mi Perfil",
        "user-name": "Nombre de usuario",
        "edit-profile-btn": "Editar perfil",
        "post-user-name": "Nombre de usuario",
        "post-text": "¡Esta es una publicación de ejemplo en la red social!",
        "like-btn": "👍 Me gusta",
        "comment-btn": "💬 Comentar",
        "share-btn": "↪️ Compartir",
        "connect-title": "Conéctate y Crece",
        "footer-text": "¡Únete a nuestra comunidad de profesionales y lleva tu carrera al siguiente nivel!",
        "about-link": "Sobre Nosotros",
        "careers-link": "Oportunidades de Empleo",
        "help-link": "Ayuda y Soporte",
        "privacy-link": "Política de Privacidad",
        "terms-link": "Términos de Uso",
        "footer-copyright": "© 2024 FirstKick. Todos los derechos reservados.",
        "filter-title": "Filtros de búsqueda",
        "category-label": "Categoría:",
        "all": "Todas",
        "players": "Jugadores",
        "schools": "Escuelas",
        "teams": "Equipos",
        "brands": "Marcas",
        "sport-label": "Deporte:",
        "all-sports": "Todos los deportes",
        "football": "Fútbol",
        "basketball": "Baloncesto",
        "baseball": "Béisbol",
        "others": "Otros",
        "apply-filters-btn": "Aplicar filtros",
        "create-post": "Crea una nueva publicación",
        "upload-image-label": "Subir una imagen",
        "upload-video-label": "Subir un video",
        "submit-post-btn": "Publicar",
        "top-post-title": "Publicación destacada del día",
        "top-post-text": "¡Esta es una publicación destacada en la plataforma!"
    }
};

// Función para cambiar el idioma
function changeLanguage() {
    const lang = document.documentElement.lang === "en" ? "es" : "en"; // Cambia entre inglés y español
    document.documentElement.lang = lang;
    localStorage.setItem('lang', lang);
    translatePage(lang);
}

// Función para traducir la página
function translatePage(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
}

// Inicializar el idioma según la preferencia del usuario o por defecto
document.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem('lang') || 'en';
    document.documentElement.lang = savedLang;
    translatePage(savedLang);
});

// Asignar evento de cambio de idioma al botón
document.addEventListener("DOMContentLoaded", () => {
    const changeLangButton = document.getElementById("change-lang-btn");
    if (changeLangButton) {
        changeLangButton.addEventListener("click", changeLanguage);
    }
});
