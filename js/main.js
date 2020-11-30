console.log("connected")

let navItems = document.querySelectorAll('.nav-item');
console.log(navItems)

for (let navItem of navItems){
    navItem.addEventListener('click', function () {
        let activeNav = document.querySelector('.active');
        activeNav.classList.remove('active');
        navItem.classList.add('active');
    })
}