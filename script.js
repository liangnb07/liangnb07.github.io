// ==========================================
// global
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
    // Run navbar safely exactly once when the DOM is fully loaded
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
    
    // Split path into segments and clean out empty values
    let segments = path.split('/').filter(s => s.length > 0);
    
    // If hosting on a subpath (like a project page), remove repo name if it appears
    if (segments[0] === 'liangnb07.github.io') {
        segments.shift();
    }

    // CRITICAL FIX: If the last segment is an actual file name (ends with .html), 
    // it doesn't count as a directory layer, so we pop it off.
    if (segments.length > 0 && segments[segments.length - 1].includes('.html')) {
        segments.pop();
    }

    // The length of remaining segments tells us exactly how deep we are
    const depth = segments.length;
    const prefix = "../".repeat(depth);

    // Injection
    navElement.innerHTML = `
        <a href="${prefix}index.html">home</a> |
        <a href="${prefix}blog/index.html">blog</a> |
        <a href="${prefix}photos/index.html">photos</a> |
        <a href="${prefix}projects/index.html">projects</a> |
        <a href="https://liang.atabook.org" target="_blank" rel="noopener noreferrer">contact</a>    
    `;
}