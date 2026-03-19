document.querySelectorAll('.learn-more').forEach(button => {
    button.addEventListener('click', function () {
        this.closest('.box-inner').classList.toggle('flipped');
    });
});