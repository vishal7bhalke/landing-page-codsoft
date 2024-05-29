// Initialization for ES Users

let isSidebarActive = false;

function toggleSidebar() {
    const sidebar = document.querySelector(".sidebar");
    isSidebarActive = !isSidebarActive;

    if (isSidebarActive) {
        sidebar.classList.add('active');
        sidebar.style.left = '0';
    } else {
        sidebar.classList.remove('active');
        sidebar.style.left = '-250px';
    }
}
