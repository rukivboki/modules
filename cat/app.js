const humanAge = document.querySelector('.input');

const answer = document.querySelector('.answer');

const check = document.querySelector('.check');

let year = '';
let month = ''

humanAge.addEventListener('input', (e) => {
    e.target.value = e.target.value.replace(/[^0-9]/g, '').substr(0, 3)
})

check.addEventListener('click', () => {
    let cat = catCalculator.getCatAgeObject(Number(humanAge.value));
    if (cat.years === 0) {
        year = ''
    }
    if (cat.years === 1) {
        year = 'год'
    }
    if (cat.years > 1 && cat.years < 5) {
        year = 'года'
    }
    if (cat.years >= 5) {
        year = 'лет'
    }
    if (cat.months === 0) {
        month = ''
    }
    if (cat.months === 1) {
        month = 'месяц'
    }
    if (cat.months > 1 && cat.months < 5) {
        month = 'месяца'
    }
    if (cat.months > 4) {
        month = 'месяцев'
    }
    if (cat.years === 0) {
        answer.textContent = `Ваш кошачий возраст: ${cat.months} ${month} `
    }
    if (cat.months === 0) {
        answer.textContent = `Ваш кошачий возраст: ${cat.years} ${year} `
    }
    if (cat.months !== 0 && cat.years !== 0) {
        answer.textContent = `Ваш кошачий возраст: ${cat.years} ${year} и ${cat.months} ${month}`
    }
})