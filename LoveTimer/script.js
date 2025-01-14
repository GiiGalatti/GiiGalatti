// Data de início: 04 de maio de 2024
const startDate = new Date("2024-05-04T00:00:00-03:00");

// Função para calcular o tempo decorrido
function updateTimer() {
    const now = new Date();

    // Tempo decorrido em milissegundos
    const timeDifference = now - startDate;

    // Cálculo de dias, horas, minutos e segundos
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    // Exibição do tempo decorrido
    const timeElement = document.getElementById("time");
    timeElement.innerHTML = `${days} dias, ${hours} horas, ${minutes} minutos e ${seconds} segundos.`;
}

// Atualizar o timer a cada segundo
setInterval(updateTimer, 1000);

// Função para criar corações caindo
function createFallingHearts() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerText = '♥';
    
    // Posição aleatória do coração
    const leftPosition = Math.random() * 100;
    const delay = Math.random() * 3;
    heart.style.left = `${leftPosition}%`;
    heart.style.animationDelay = `-${delay}s`;

    document.body.appendChild(heart);

    // Remover corações após a animação
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Gerar corações caindo a cada 200ms
setInterval(createFallingHearts, 200);
