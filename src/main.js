document.addEventListener('DOMContentLoaded', function(){
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question]');
    const heroSel= document.querySelector('.hero');
    const alturaHero = heroSel.clientHeight;

    window.addEventListener('scroll', function(){
        const posAtual = this.window.screenY;

        if (posAtual > alturaHero){
            ocultaElementos();
        } else {
            exibeElementos();
        }
    })

    for(let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(botao){
            const alvo = botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${alvo}]`)
            hiddenAbs();
            aba.classList.add('shows__list--active')
            removeButtonActive();
            botao.target.classList.add('shows__tabs__button--active');
        })
    }

    for(let i = 0; i < questions.length; i++){
        questions[i].addEventListener('click', openOrClose);
    }
})


function exibeElementos(){
    const header = document.querySelector('header');
    header.classList.remove('header--hiden');
}

function ocultaElementos(){
    const header = document.querySelector('header');
    header.classList.add('header--hiden');
}

function openOrClose(elemento){
    const classe = 'faq__questions__item--is-open';
    const elementoPai = elemento.target.parentNode;

    elementoPai.classList.toggle(classe);
}

function removeButtonActive(){
    const buttons = document.querySelectorAll('[data-tab-button]');

    for(let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--active')
    }
}

function hiddenAbs(){
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for(let i = 0; i < tabsContainer.length; i++){
        tabsContainer[i].classList.remove('shows__list--active');
    }
}