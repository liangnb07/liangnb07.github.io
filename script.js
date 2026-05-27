// ==========================================
// GLOBAL RUNNERS (Runs on EVERY single page)
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    injectNavbar();
    initRetroEffects();
});

// 1. Handle the Navigation Bar Everywhere
function injectNavbar() {
    const navElement = document.querySelector("nav");
    if (!navElement) return; // Exit early if the page doesn't have a <nav> tag

    // Determine if we are in a subfolder or root to fix paths dynamically
    const isSubfolder = window.location.pathname.includes('/blog') || 
                        window.location.pathname.includes('/photos') || 
                        window.location.pathname.includes('/projects');
    
    const prefix = isSubfolder ? "../" : "";

    navElement.innerHTML = `
        <a href="${prefix}">home</a> | 
        <a href="${prefix}blog">blog</a> |
        <a href="${prefix}photos">photos</a> |
        <a href="${prefix}projects">projects</a> |
    `;
}

// 2. Handle a global feature (like console greeting or terminal animations)
function initRetroEffects() {
    console.log("initialized.");
}

// ==========================================
// PAGE-SPECIFIC LOGIC (Only runs where needed)
// ==========================================

// 3. This will ONLY run on your mdnote or projects page if the specific ID exists
const markdownArea = document.getElementById("markdown-editor");
if (markdownArea) {
    console.log("Loading editor logic...");
    // Put your text editor keybindings or JSON parsing code here
}