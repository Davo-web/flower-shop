document.addEventListener('DOMContentLoaded', function() {
    const headerLogo = document.querySelector('.header__logo');
    headerLogo.addEventListener('click', function(e){
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    

    // draft for FAQ
    const faqBtn = document.querySelectorAll('.FAQ__btn');
    faqBtn.forEach(btn => {
            console.log(btn)
        })
})