window.addEventListener('load', function() {
    setBodyLoaded();
});

function setBodyLoaded() {
    var body = document.getElementsByTagName('body')[0];
    body.classList.add('loaded');
}