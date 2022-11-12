const openBtn = document.querySelector('.open-btn');
const closeBtn = document.querySelector('.close-btn');
const offcanvasMenu = document.querySelector('.offcanvas-menu')

openBtn.addEventListener('click', function (e) {
    e.preventDefault();
    offcanvasMenu.classList.add('active');
    const backdropDiv = document.createElement("div");
    backdropDiv.className = "modal-backdrop active";
    document.body.appendChild(backdropDiv);
});

closeBtn.addEventListener('click', function (e) {
    e.preventDefault();
    offcanvasMenu.classList.remove('active');
    const backdropDiv = document.querySelector(".modal-backdrop.active");
    backdropDiv && backdropDiv.remove();
});
