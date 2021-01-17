//VARIABLES GLOBALES
const start = document.querySelector('.circulo')

const spinnerColor = {
    active_red : '#f86f6e',
    active_lightBlue : '#78f0f5',
    active_purple : '#d981fa'
};

//Objeto con los tiempos predeterminados
const spinnerTime = {
    pomodoro : 3000,//1500000,
    shortBreak : 300000,
    longBreak: 900000
};

//Variables globales del spinner
let timeDuration = spinnerTime.pomodoro;
let colorElegido = spinnerColor.active_red


//FUNCIONES

const porgressBar = () =>{
    const circle = new ProgressBar.Circle('#spinner', {
        color: colorElegido,
        strokeWidth: 3,
        duration: timeDuration,
        easing: 'easeInOut'
    });

    circle.animate(1);
}

const timer = () =>{
    let clock = document.querySelector('.timer')
    let minutes = Math.floor(timeDuration/1000/60);
    let seconds = Math.floor(timeDuration/1000);

    setInterval(() =>{
        clock.innerHTML = `${minutes}:${seconds}`;

    }, 1000)

}

const iniciarConteo = e =>{
    timer();
    porgressBar();
}

//Listeners
start.addEventListener('click', iniciarConteo);











