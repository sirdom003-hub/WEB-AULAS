// Define a data do evento para Outubro do ano atual (2026)
const dataEvento = new Date('October 15, 2026 20:00:00').getTime();

// Atualiza o cronômetro a cada 1 segundo (1000 milissegundos)
const intervalo = setInterval(() => {
  const agora = new Date().getTime();
  const distancia = dataEvento - agora;

  // Cálculos matemáticos para converter milissegundos em dias, horas, min, seg
  const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

  
  document.getElementById('dias').innerText = dias < 10 ? `0${dias}` : dias;
  document.getElementById('horas').innerText = horas < 10 ? `0${horas}` : horas;
  document.getElementById('minutos').innerText = minutos < 10 ? `0${minutos}` : minutos;
  document.getElementById('segundos').innerText = segundos < 10 ? `0${segundos}` : segundos;


  if (distancia < 0) {
    clearInterval(intervalo);
    document.querySelector('.countdown').innerHTML = "<h3>O EVENTO COMEÇOU!</h3>";
  }
}, 1000);
