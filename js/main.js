var filename = window.location.pathname.substring(window.location.pathname.lastIndexOf('/')+1);
console.log(filename);
function navbarSetUp(){
    var siteLinks = document.getElementById('site-navbar').getElementsByClassName('site-links')[0].getElementsByTagName('a');
    if(filename == ''){
        document.getElementById('home').className = 'active';
    } else {
        for (var i = 0; i < siteLinks.length; i++) {
            if (siteLinks[i].getAttribute('href') == filename) {
                siteLinks[i].className = 'active';
                break;
            }
        }
    }
}
document.addEventListener('DOMContentLoaded', function() {
    navbarSetUp();
}, false);


function createCarousel(carousel){
    var car = carousel;
    var next = car.getElementsByClassName('increment')[0];
    var prev = car.getElementsByClassName('decrement')[0];
    var slides = car.getElementsByTagName('ol')[0].getElementsByTagName('li');
    var counter = 0;
    var amount = slides.length;
    var current = slides[0];
    // car.classList.add('active');
    function navigate(direction) {
        current.className = '';
        counter = counter + direction;
        if (direction === -1 &&
            counter < 0) {
            counter = amount - 1;
        }
        if (direction === 1 && !slides[counter]) {
            counter = 0;
        }
        current = slides[counter];
        current.className = 'active';
    }

    next.addEventListener('click', function (ev) {
        navigate(1);
    });
    prev.addEventListener('click', function (ev) {
        navigate(-1);
    });
    navigate(0);

    if(amount < 2){
        next.style = 'display: none';
        prev.style = 'display: none';
    }
}

window.onload = function () {
    carousels = document.getElementsByClassName('carousel');
    for(var i=0; i < carousels.length; i++){
        createCarousel(carousels[i]);
    }
};