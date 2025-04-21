AOS.init();

const dataDoEvento = new Date("May 25, 2025 10:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

function atualizarContador() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

    const diasEmMs = 1000 * 60 * 60 * 24;
    const horasEmMs = 1000 * 60 * 60;
    const minutosEmMs = 1000 * 60;
    
    const diasAteOEvento = Math.floor(distanciaAteOEvento / diasEmMs);
    const horasAteOEvento = Math.floor((distanciaAteOEvento % diasEmMs) / horasEmMs);
    const minutosAteOEvento = Math.floor((distanciaAteOEvento % horasEmMs) / minutosEmMs);
    const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutosEmMs) / 1000);

    console.log(diasAteOEvento, horasAteOEvento, minutosAteOEvento, segundosAteOEvento);

    const contadorEl = document.getElementById('contador');

    if (distanciaAteOEvento < 0) {
        clearInterval(contaAsHoras);
        contadorEl.innerHTML = 'Seu aniversário já começou';
    } else {
        contadorEl.innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;
    }
}
atualizarContador();
const contaAsHoras = setInterval(atualizarContador, 1000);
