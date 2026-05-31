// ==========================================
// global
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
    //run navbar
    try {
        injectNavbar();
    } catch (e) {
        console.error("Navbar failed to inject:", e);
    }
});

function injectNavbar() {
    const navElement = document.querySelector("nav");
    if (!navElement) return; // Exit early if no nav tag

    // get current pathname
    const path = window.location.pathname;
    const pathSegments = path.split('/').filter(segment => segment.length > 0);

    //count how many folders deep we are
    let depth = pathSegments.length;
    if (pathSegments[pathSegments.length - 1].includes('.')) {
        depth -= 1;
    }

    if (pathSegments[0] === 'liangnb07.github.io') {
        depth -= 1;
    }

    //generate number of ../ needed to hit root
    const prefix = "../".repeat(Math.max(0, depth));

    //injection
    navElement.innerHTML = `
        <a href="${prefix}index.html">home</a> |
        <a href="${prefix}blog/index.html">blog</a> |
        <a href="${prefix}photos/index.html">photos</a> |
        <a href="${prefix}projects/index.html">projects</a> |
        <a href="https://liang.atabook.org" target="_blank" rel="noopener noreferrer">contact</a>    
    `;
}