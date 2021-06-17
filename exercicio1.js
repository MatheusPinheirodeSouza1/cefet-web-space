// Faça o exercício da equação de GRAVITAÇÃO UNIVERSAL aqui
// Este arquivo AINDA NÃO ESTÁ INCLUÍDO no arquivo HTML

const calcular = document.querySelector('#calcular');
const resultado = document.querySelector('#resultado');
const constateGravitacional = document.querySelector('#constante').valueAsNumber;

calcular.addEventListener('click', () => {
  const massa1 = document.querySelector('#massa1').valueAsNumber;
  const massa2 = document.querySelector('#massa2').valueAsNumber;
  const distancia = document.querySelector('#distancia').valueAsNumber;
  resultado.value = (constateGravitacional*massa1*massa2)/(Math.pow(distancia, 2));
});