document.addEventListener('DOMContentLoaded', function() {
    const headerLogo = document.querySelector('.header__logo');
    headerLogo.addEventListener('click', function(e){
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    

    const answer = document.querySelectorAll('.FAQ__answer');
    let answerList = Array.from(answer);
    const faqBtnList = document.querySelectorAll('.FAQ__btn');
    let faqBtn = Array.from(faqBtnList);
    faqBtn.forEach((btn, index) => {
            btn.addEventListener('click', function() {
                answerList[index].classList.toggle('active');
                btn.classList.toggle('active');
            })
    })
})