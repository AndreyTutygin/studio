window.onload = function() {
    const preloader = document.querySelector('.preloader');

    preloader.classList.add('hide-preloader');
    setTimeout(() => {
        preloader.classList.add('preloader-hidden');
    }, 450);
}