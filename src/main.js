document.addEventListener('DOMContentLoaded', function(){
    const buttons = document.querySelectorAll('[data-tab-button]');

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
})

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