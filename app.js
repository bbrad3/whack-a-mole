console.log('hello from app.js')

// grab HTML elemnts
const squares = document.querySelectorAll('.square')
const imgs = document.querySelectorAll('img')
const startBtn = document.querySelector('.startBtn')
const currentScore = document.querySelector('#currentScore')
const highScore = document.querySelector('#highScore')
const diffBtns = document.querySelectorAll('.diff')

const difficulty = {
    easy: 2000,
    medium: 1200,
    hard: 800
}

let mode = difficulty.easy;
let counter = 0;
let countHigh = 0;

function randPic() {
    const randInt = Math.floor(Math.random() * 9)

    for(let img of imgs) {
        img.style.display = 'none'
        img.addEventListener('click', () => {
            if(img.style.display === 'block'){
                counter++
                currentScore.innerHTML = `${counter}`
                img.style.display = 'none'
            }
        })
    }
    imgs[randInt].style.display = 'block'
}

let startGame;
let endGame;
startBtn.addEventListener('click', () => {
    startGame = setInterval(randPic, mode)
    endGame = setTimeout(stopGame, 10000)
})

function stopGame() {
    clearInterval(startGame)
    alert(`Game Over! You got ${counter} points!`)

    if (counter > countHigh) {
        highScore.innerHTML = counter
    }
    // reset game
    resetGame();
}

function resetGame() {
    counter = 0;
    for(let img of imgs) {
        img.style.display = 'none'
    }
}


for(let diff of diffBtns) {
    diff.addEventListener('click', (e) => {
        const choice = e.target.innerHTML.toLowerCase()
        mode = difficulty[choice]

        for(let btn of diffBtns) {
            btn.classList.remove('modeSelected')
        }
        e.target.classList.add('modeSelected')
    })
}
