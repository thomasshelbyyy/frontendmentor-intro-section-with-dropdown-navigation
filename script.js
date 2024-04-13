document.addEventListener("click", function (event) {
    const dropdowns = document.querySelectorAll(".dropdown-content")
    dropdowns.forEach(function (dropdown) {
        if (!dropdown.contains(event.target)) {
            dropdown.classList.remove("active")
            const arrowIcon = dropdown.parentElement.querySelector(".arrow")
            arrowIcon.classList.remove("active")
        }
    })
})

document.querySelectorAll(".dropdown").forEach(item => {
    item.addEventListener("click", function (event) {
        const dropdownContent = this.querySelector(".dropdown-content")
        const arrowIcon = this.querySelector(".arrow")
        dropdownContent.classList.toggle("active")
        arrowIcon.classList.toggle('active')
        document.querySelectorAll(".dropdown-content").forEach(otherDropdown => {
            if (otherDropdown !== dropdownContent) {
                otherDropdown.classList.remove("active")
                const otherArrowIcon = otherDropdown.parentElement.querySelector(".arrow")
                otherArrowIcon.classList.remove("active")
            }
        })
        event.stopPropagation()
    })
})

document.querySelectorAll('.accordion').forEach(item => {
    item.addEventListener('click', function (event) {
        const accordionContent = this.querySelector('.accordion-content');
        const arrowIcon = this.querySelector('.arrow');
        accordionContent.classList.toggle('active');
        arrowIcon.classList.toggle('active');
        event.stopPropagation();
    });
});

// Menambahkan event listener pada hamburger menu
const hamburger = document.querySelector(".hamburger");
if (hamburger) {
    hamburger.addEventListener("click", toggleSidebar);
}

// Menambahkan event listener pada tombol close
const closeBtn = document.querySelector(".close-btn");
if (closeBtn) {
    closeBtn.addEventListener("click", closeSidebar);
}

// Menutup sidebar ketika pengguna mengklik di luar area sidebar
document.addEventListener("click", function (event) {
    const sidebarContainer = document.querySelector(".sidebar-container");
    const sidebar = document.querySelector(".sidebar");
    const isHamburgerClicked = event.target.closest(".hamburger");

    if (sidebarContainer && sidebar && !sidebar.contains(event.target) && !isHamburgerClicked) {
        sidebarContainer.classList.remove("active");
        document.body.classList.remove("sidebar-active")
    }
});

// Fungsi untuk menampilkan/menyembunyikan sidebar
function toggleSidebar() {
    const sidebarContainer = document.querySelector('.sidebar-container');
    if (sidebarContainer) {
        sidebarContainer.classList.add("active");
        document.body.classList.add("sidebar-active")
    }
}

// Fungsi untuk menutup sidebar
function closeSidebar() {
    const sidebarContainer = document.querySelector(".sidebar-container");
    if (sidebarContainer) {
        sidebarContainer.classList.remove("active");
        document.body.classList.remove("sidebar-active")
    }
}
