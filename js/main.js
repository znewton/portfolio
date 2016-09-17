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