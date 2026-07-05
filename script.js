// ==========================================
// global
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
    try {
        injectNavbar();
    } catch (e) {
        console.error("Navbar failed to inject:", e);
    }
});

function injectNavbar() {
    const navElement = document.querySelector("nav");
    if (!navElement) return; 

    const path = window.location.pathname;
    
    let segments = path.split('/').filter(s => s.length > 0);
    
    if (segments[0] === 'liangnb07.github.io') {
        segments.shift();
    }

    if (segments.length > 0 && segments[segments.length - 1].includes('.html')) {
        segments.pop();
    }

    const depth = segments.length;
    const prefix = "../".repeat(depth);

    // Injection
    navElement.innerHTML = `
        <a href="${prefix}index.html">home</a> |
        <a href="${prefix}blog/index.html">blog</a> |
        <a href="${prefix}photos/index.html">photos</a> |
        <a href="${prefix}projects/index.html">projects</a> |
        <a href="${prefix}contact/index.html">contact</a>    
    `;
}