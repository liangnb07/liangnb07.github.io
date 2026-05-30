// ==========================================
// global
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    injectNavbar();
    initRetroEffects();
});

// 1. Handle the Navigation Bar Everywhere
function injectNavbar() {
    const navElement = document.querySelector("nav");
    if (!navElement) return; // Exit early if no nav tag

    // 1. Check if we are inside a subfolder or looking at a file inside a subfolder
    const path = window.location.pathname;
    const isSubfolder = path.includes('/blog/') || path.includes('/photos/') || path.includes('/projects/');

    // 2. Set the prefix to reach the root folder relatively
    const prefix = isSubfolder ? "../" : "";

    // 3. Inject the clean relative paths
    navElement.innerHTML = `
        <a href="${prefix}index.html">home</a> |
        <a href="${prefix}blog/index.html">blog</a> |
        <a href="${prefix}photos/index.html">photos</a> |
        <a href="${prefix}projects/index.html">projects</a>
    `;
}

// ==========================================
// sub specific logic
// ==========================================
/* (example)
const markdownArea = document.getElementById("markdown-editor");
if (markdownArea) {
    console.log("Loading editor logic...");
    // Put your text editor keybindings or JSON parsing code here
}
    */