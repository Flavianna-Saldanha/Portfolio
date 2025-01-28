window.onload = function() {
    const menuMobile = document.querySelector(".menu-mobile");
    const menu = document.querySelector(".menu2 nav ul");
    
    menuMobile.addEventListener("click", function() {
        if(menu.style.display === 'flex') {
            menu.style.display = 'none';  
        } else {
            menu.style.display = 'flex';  
        }
    });

    const menuItems = document.querySelectorAll(".menu2 nav ul li a");
    menuItems.forEach(item => {
        item.addEventListener("click", function() {
            menu.style.display = 'none'; 
        });
    });
};