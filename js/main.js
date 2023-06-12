let work = document.querySelectorAll(".work-frente")
let play = document.querySelectorAll(".play-frente")
let study = document.querySelectorAll(".study-frente")
let exercise = document.querySelectorAll(".exercise-frente")
let social = document.querySelectorAll(".social-frente")
let selfcare = document.querySelectorAll(".selfcare-frente")

var contador = -1;

function tempos(classe, indice) {
    fetch("data.json").then((response) => {
        response.json().then((indices) => {
            var d_c = indices[indice].timeframes.daily.current;
            var d_p = indices[indice].timeframes.daily.previous;
            var w_c = indices[indice].timeframes.weekly.current;
            var w_p = indices[indice].timeframes.weekly.previous;
            var m_c = indices[indice].timeframes.monthly.current;
            var m_p = indices[indice].timeframes.monthly.previous;
            for (i=1; i <= 3; i++) {
                if (i == 1) {
                    classe[i].innerHTML += `<h2 class="diario">${d_c}hrs</h2>` + 
                    `<p class="semanal">Yesterday - ${d_p}hrs</p>`;
                }else if (i == 2) {
                    classe[i].innerHTML += `<h2 class="semanal">${w_c}hrs</h2>` +
                    `<p class="semanal">Last week - ${w_p}hrs</p>`;
                } else {
                    classe[i].innerHTML += `<h2 class="mensal">${m_c}hrs</h2>` +
                    `<p class="mensal">Last Month - ${m_p}hrs</p>`;
                }
            }
            contador++;
        })
    })
}

tempos(work,0);
tempos(play,1);
tempos(study,2);
tempos(exercise,3);
tempos(social,4);
tempos(selfcare,5);

const dailyButton = document.querySelector('#botao-daily');
const weeklyButton = document.querySelector('#botao-weekly');
const monthlyButton = document.querySelector('#botao-monthly');
const diario = document.querySelector('.diario');
const semanal = document.querySelector('.semanal');
const mensal = document.querySelector('.mensal');

dailyButton.addEventListener('click', () => {
    dailyButton.style.color = "#fff";
    weeklyButton.style.color = "hsl(235, 45%, 61%)";
    monthlyButton.style.color = "hsl(235, 45%, 61%)";
    for(i = contador; i >= 0; i -= 1) {
        diario[i].classList.remove('inativo');
        semanal[i].classList.add('inativo');
        mensal[i].classList.add('inativo');
    }
})

weeklyButton.addEventListener('click', () => {
    dailyButton.style.color = "hsl(235, 45%, 61%)";
    weeklyButton.style.color = "#fff";
    monthlyButton.style.color = "hsl(235, 45%, 61%)";
    for(i = contador; i >= 0; i -= 1) {
        diario[i].classList.add('inativo');
        semanal[i].classList.remove('inativo');
        mensal[i].classList.add('inativo');
    }
})

monthlyButton.addEventListener('click', () => {
    dailyButton.style.color = "hsl(235, 45%, 61%)";
    weeklyButton.style.color = "hsl(235, 45%, 61%)";
    monthlyButton.style.color = "#fff";
    for(i = contador; i >= 0; i -= 1) {
        diario[i].classList.add('inativo');
        semanal[i].classList.add('inativo');
        mensal[i].classList.remove('inativo');
    }
})