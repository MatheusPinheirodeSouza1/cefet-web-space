// Faça o exercício dos PARÁGRAFOS aqui
// Este arquivo AINDA NÃO ESTÁ INCLUÍDO no arquivo HTML
const buttons = document.querySelectorAll('.botao-expandir-retrair');

buttons.forEach(f => {
  f.addEventListener('click', e => {
    const paragrafo = e.currentTarget.parentNode;
    paragrafo.classList.toggle('expandido');

    if (e.currentTarget.innerHTML === '+'){
      e.currentTarget.innerHTML = '-';
    } 
    else
    {
      e.currentTarget.innerHTML = '+';
    }
  })
})
