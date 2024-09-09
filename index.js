console.log("hello")
const paper = document.getElementById('paper');
const rock = document.getElementById('rock');
const scissor = document.getElementById('scissor');
const first = document.getElementById('first');
const second = document.getElementById('second')
var count = 0;
var newArr = ["./assets/paperLeft.svg", "./assets/rockLeft.svg", "./assets/scissorsLeft.svg"];
var newArr2 = ["./assets/paperRight.svg", "./assets/rockRight.svg", "./assets/scissorsRight.svg"]
const result = document.getElementById('result');

const executePaper = () => { executeGame('paper') };
const executeRock = () => { executeGame('rock') };
const executeScissor = () => { executeGame('scissor') }

const executeGame = (value) => {
    const inter = setInterval(() => {
        if (first.classList.contains('img1')) {
            first.classList.remove('img1');
            first.classList.add('rockdown')
        }
        else {
            first.classList.remove('rockdown');
            first.classList.add('img1')
        }

        if (second.classList.contains('img2')) {
            second.classList.remove('img2');
            second.classList.add('rockUp')
        }
        else {
            second.classList.remove('rockUp');
            second.classList.add('img2');
        }

    }, 500)

    setTimeout(() => {
        clearInterval(inter);
        let num1 = -1;
        if (value == 'paper') {
            num1 = 0;
        } 
        if (value == 'rock') {
            num1 = 1;
        }
        if (value == 'scissor') {
            num1 = 2;
        }
        let num2 = (Math.floor(Math.random() * (4 - 1) + 1)) - 1
        first.src = newArr[num1]
        second.src = newArr2[num2];
        if (num1 == num2) {
            result.innerHTML = `<h4>play again</h4>`
        } else {
            switch (num1) {
                case 0: {
                    if (num2 == 1)
                        result.innerHTML = `<h2>congratulations user A</h2>`
                    if (num2 == 2)
                        result.innerHTML = `<h2>congratulations user B</h2>`
                    break;
                }
                case 1: {
                    if (num2 == 0)
                        result.innerHTML = `<h2>congratulations user B</h2>`
                    if (num2 == 2)
                        result.innerHTML = `<h2>congratulations user A</h2>`
                    break;
                }
                case 2: {
                    if (num2 == 0)
                        result.innerHTML = `<h2>congratulations user A</h2>`
                    if (num2 == 1)
                        result.innerHTML = `<h2>congratulations user B</h2>`
                    break;
                }

            }
            result.classList.add('congoColor')
        }



    }, 2000);



    Math.random()
}

paper.addEventListener('click', executePaper)
rock.addEventListener('click', executeRock)
scissor.addEventListener('click', executeScissor)
const newGameBtn = document.getElementById('newGameBtn');


newGameBtn.addEventListener('click', () => {
    first.src = newArr[1];
    second.src = newArr2[1];

})