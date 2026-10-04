let navbarColor = document.querySelector('#navbar-color');
let linkColor = document.querySelectorAll('.linkColor');
let logo_navbar = document.querySelector('#logo_navbar');
let disabled = document.querySelector('.nav-link-disabled');
let navTogglerIcon = document.querySelector('.bi-list');
let navToggler = document.querySelector('.navbar-toggler');

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        navbarColor.style.backgroundColor = 'var(--dark-custom)';
        linkColor.forEach((navLink) => {
            navLink.style.color = 'var(--white-custom)';
            disabled.style.color = 'var(--grey-custom)';
            navTogglerIcon.style.color = 'var(--white-custom)';
            navToggler.style.borderColor = 'var(--white-custom)';
        });
        logo_navbar.src = "http://127.0.0.1:5500/media/logo2.png";
    } else {
        navbarColor.style.backgroundColor = 'transparent';
        linkColor.forEach((navLink) => {
            navLink.style.color = 'var(--dark-custom)';
            disabled.style.color = '#000000A6';
            navTogglerIcon.style.color = 'var(--dark-custom)';
            navToggler.style.borderColor = 'var(--dark-custom)';
        });

        logo_navbar.src = "http://127.0.0.1:5500/media/logo1.png";
    }

});


// button
let btnShop = document.querySelector('.button-6');

btnShop.addEventListener('click', () => {
    window.location.href = './shop.html';
})

// Increment
let numberOne = document.querySelector('#numberOne');
let numberTwo = document.querySelector('#numberTwo');
let numberThree = document.querySelector('#numberThree');

function createInterval(finalN, element) {
    let counter = 0;
    let interval = setInterval(() => {
        if (counter < finalN) {
            counter++;
            element.innerHTML = counter;
        } else {
            clearInterval(interval);
        }
    })
}

let confirm = false;
let observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting && confirm == false) {
            createInterval(250, numberOne);
            createInterval(180, numberTwo);
            createInterval(300, numberThree);
            confirm = true;
            setTimeout(() => {
                confirm = false;
            }, 5000)
        }
    })
})

observer.observe(numberOne);


// Reviews

let reviews = [
    { name: 'William', review: 'Best product' },
    { name: 'Ann', review: 'Worth the money' },
    { name: 'Michael', review: 'Very professional' },
]

let carouselInner = document.querySelector('.carousel-inner');

reviews.forEach((review) => {
    let div = document.createElement('div');
    div.classList.add('carousel-item');
    div.innerHTML = `
        <div class="reviewCard">
                <p class="lead fw-bold">${review.name}</p>
                <div class="fs-4">
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                </div>
                <p class="p-3">${review.review}</p>
        </div>
        `
    carouselInner.appendChild(div);
})