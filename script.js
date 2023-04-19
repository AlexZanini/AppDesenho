const canvas = document.getElementById('canvas'); // seleciona o canvas
const increaseBtn = document.getElementById('increase'); // seleciona botão de aumento
const decreaseBtn = document.getElementById('decrease'); // seleciona botão de diminuição
const sizeEL = document.getElementById('size'); // seleciona a caixa de texto para o tamanho do pincel
const colorEl = document.getElementById('color'); // seleciona o seletor de cores
const clearEl = document.getElementById('clear'); // seleciona o botão de limpeza

const ctx = canvas.getContext('2d'); // obtém o contexto de renderização 2D do canvas

let size = 10; // define o tamanho inicial do pincel
let isPressed = false; // define o estado inicial do botão do mouse
colorEl.value = 'black'; // define a cor inicial do pincel
let color = colorEl.value; // armazena a cor atual do pincel
let x; // armazena a posição X do mouse
let y; // armazena a posição Y do mouse

canvas.addEventListener('mousedown', (e) => { // adiciona um event listener para quando o botão do mouse é pressionado
    isPressed = true; // define o estado do botão do mouse como pressionado

    x = e.offsetX; // obtém a posição X do mouse
    y = e.offsetY; // obtém a posição Y do mouse
});

document.addEventListener('mouseup', (e) => { // adiciona um event listener para quando o botão do mouse é solto
    isPressed = false; // define o estado do botão do mouse como solto

    x = undefined; // redefine a posição X do mouse
    y = undefined; // redefine a posição Y do mouse
});

canvas.addEventListener('mousemove', (e) => { // adiciona um event listener para quando o mouse é movido
    if(isPressed) { // verifica se o botão do mouse está pressionado
        const x2 = e.offsetX; // obtém a nova posição X do mouse
        const y2 = e.offsetY; // obtém a nova posição Y do mouse

        drawCircle(x2, y2); // desenha um círculo na nova posição do mouse
        drawLine(x, y, x2, y2); // desenha uma linha entre a posição antiga e nova do mouse

        x = x2; // atualiza a posição X do mouse
        y = y2; // atualiza a posição Y do mouse
    }
});

function drawCircle(x, y) { // função que desenha um círculo na tela
    ctx.beginPath(); // começa a definir o caminho para o desenho
    ctx.arc(x, y, size, 0, Math.PI * 2); // define um arco (círculo) no caminho
    ctx.fillStyle = color; // define a cor do preenchimento
    ctx.fill(); // preenche o caminho com a cor definida
}


// Função que desenha uma linha na tela
function drawLine(x1, y1, x2, y2) {
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.strokeStyle = color
    ctx.lineWidth = size * 2
    ctx.stroke()
}

// Atualiza o valor do tamanho na tela
function updateSizeOnScreen() {
    sizeEL.innerText = size
}

// Aumenta o tamanho do pincel
increaseBtn.addEventListener('click', () => {
    size += 5

    if(size > 50) {
        size = 50
    }

    updateSizeOnScreen()
})

// Diminui o tamanho do pincel
decreaseBtn.addEventListener('click', () => {
    size -= 5

    if(size < 5) {
        size = 5
    }

    updateSizeOnScreen()
})

// Altera a cor do pincel quando a cor é selecionada
colorEl.addEventListener('change', (e) => color = e.target.value)

// Limpa a tela do canvas quando o botão de limpar é clicado
clearEl.addEventListener('click', () => ctx.clearRect(0,0, canvas.width, canvas.height))

