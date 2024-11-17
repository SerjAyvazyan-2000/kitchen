document.addEventListener("DOMContentLoaded", function() {
    const menuItems = document.querySelectorAll('.header_menu ul li a');
    const footerMenuItems = document.querySelectorAll('.footer_bottom_menu ul a');
    const allMenuItems = [...menuItems, ...footerMenuItems];

    const activePageId = localStorage.getItem('activePageId');
    if (activePageId) {
        const activeItem = document.querySelector(`a[data-id="${activePageId}"]`);
        if (activeItem) {
            activeItem.classList.add('active');
        }
    }

    allMenuItems.forEach(item => {
        item.addEventListener('click', function() {
            allMenuItems.forEach(item => item.classList.remove('active'));
            item.classList.add('active');
            const pageId = item.getAttribute('data-id');
            localStorage.setItem('activePageId', pageId);
            console.log("Сохранен data-id:", pageId);
        });
    });
});

const burger = document.querySelector('.burger');
const menu = document.querySelector('.header_mobile_menu');


document.addEventListener('DOMContentLoaded', function () {
    burger.addEventListener("click", function (e) {
        if (menu.classList.contains('active')) {
            closeMenu();
        } else {
            openMenu();
        }
    });


    function openMenu() {
        menu.classList.add('active');
        burger.classList.add('active');

    }

    function closeMenu() {
        menu.classList.remove('active');
        burger.classList.remove('active');

    }


});


document.addEventListener('DOMContentLoaded', function () {
    const kitchenItems = document.querySelectorAll('.kitchen_layout_item');
    const kitchenDecors = document.querySelectorAll('.kitchen_layout_decor');

    kitchenItems.forEach(function (item, index) {
        item.addEventListener("click", function (e) {
            kitchenDecors.forEach(function (decor) {
                closeDecor(decor);
            });

            if (!kitchenDecors[index].classList.contains('show')) {
                showDecor(kitchenDecors[index]);
            }
        });
    });

    function showDecor(decor) {
        decor.classList.add('show');
    }

    function closeDecor(decor) {
        decor.classList.remove('show');
    }
});


window.addEventListener('scroll', function() {
    const headerTop = document.querySelector('.header_top');
    if (window.scrollY > 0) {
        headerTop.classList.add('fixed');
    } else {
        headerTop.classList.remove('fixed');
    }
});


$(document).ready(function() {
    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function(item) {
                return item.el.attr('title') + 'certificate';
            }
        }
    });
});





document.addEventListener("DOMContentLoaded", function() {
    const filterItems = document.querySelectorAll('.catalog-filter ul a');

    filterItems.forEach(item => {
        item.addEventListener('click', function(event) {
            event.preventDefault();
            filterItems.forEach(item => item.classList.remove('active'));
            this.classList.add('active');
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const filterItems = document.querySelectorAll('.make-kitchens_item');
    filterItems.forEach(item => {
        item.addEventListener('click', function(event) {
            event.preventDefault();
            filterItems.forEach(item => item.classList.remove('active'));
            this.classList.add('active');
        });
    });
});

