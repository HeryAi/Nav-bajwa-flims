// Banner Posters Script
function updateBannerImages() {
    $('.banner-img').each(function () {

        if ($(window).width() <= 768) {
            $(this).attr('src', $(this).data('mobile'));
        } else {
            $(this).attr('src', $(this).data('desktop'));
        }

    });
}

$(document).ready(function () {

    updateBannerImages();

    $(window).resize(function () {
        updateBannerImages();
    });

    $('.posters-slider').slick({
        arrows: true,
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 1000,
        prevArrow: '<button type="button" class="slick-prev">❮</button>',
        nextArrow: '<button type="button" class="slick-next">❯</button>'
    });

});

// Movies Slider JavaScript Here ---------------

$(document).ready(function () {

    $('.movie-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        speed: 500,
        arrows: false,
        dots: true,
        infinite: true,

        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

});

// ------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", function () {

    const descriptions = document.querySelectorAll(".description");

    descriptions.forEach(desc => {

        const fullText = desc.textContent.trim();

        if (fullText.length > 70) {

            const shortText = fullText.substring(0, 70);

            desc.innerHTML = `
                <span class="short-text">${shortText}...</span>
                <span class="full-text" style="display:none;">${fullText}</span>
                <a href="#" class="read-toggle"> Read More</a>
            `;
        }
    });

    document.addEventListener("click", function (e) {

        if (!e.target.classList.contains("read-toggle")) return;

        e.preventDefault();

        const currentDesc = e.target.closest(".description");

        // Close all other cards
        document.querySelectorAll(".description").forEach(desc => {

            if (desc !== currentDesc) {

                const shortText = desc.querySelector(".short-text");
                const fullText = desc.querySelector(".full-text");
                const btn = desc.querySelector(".read-toggle");

                if (shortText && fullText && btn) {
                    shortText.style.display = "inline";
                    fullText.style.display = "none";
                    btn.textContent = " Read More";
                }
            }
        });

        const shortText = currentDesc.querySelector(".short-text");
        const fullText = currentDesc.querySelector(".full-text");

        if (fullText.style.display === "none") {

            shortText.style.display = "none";
            fullText.style.display = "inline";
            e.target.textContent = " Read Less";

        } else {

            shortText.style.display = "inline";
            fullText.style.display = "none";
            e.target.textContent = " Read More";
        }
    });
});

// Sticky Navbar 

window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".main-navbar");

    if (window.scrollY > 50) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
});