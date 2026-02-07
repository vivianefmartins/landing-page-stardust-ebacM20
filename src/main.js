document.addEventListener('DOMContentLoaded', function() {
    const questions = document.querySelectorAll('[data-knowledge-question]');

    for (let i = 0; i < questions.length; i++) {
        questions[i].addEventListener('click', abreOuFechaResposta);
    }
})

function abreOuFechaResposta(elemento) {
    const classe = 'knowledge__questions__item--is-open';
    const elementoPai = elemento.target.parentNode;

    elementoPai.classList.toggle(classe);
}