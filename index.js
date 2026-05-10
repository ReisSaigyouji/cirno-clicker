let count = 0;
let power = 1;
let i = 0;
let stage = 1;

const counter = document.getElementById('counter');
const clickbtn = document.getElementById('click');
const upbtn = document.getElementById('upgrade');
const cost = document.getElementById('cost');
const cirno = document.getElementById('cirno');
const resetbtn = document.getElementById('reset');

const prices = [20, 50, 100, 300, 600, 999];
let price = prices[0];

// load from local storage

if (localStorage.getItem('count')) {
    count = Number(localStorage.getItem('count'));
    power = Number(localStorage.getItem('power'));
    i = Number(localStorage.getItem('i'));
    price = Number(localStorage.getItem('price'));
    stage = Number(localStorage.getItem('stage'));
}

// restore everything for ui if reloaded

if (count >= 9999) {
    count = 9999;
    counter.innerText = '9999! You won!';
    clickbtn.style.display = 'none';
} else {
    counter.innerText = count;
}

if (stage === 2) {
    cirno.src = './img/c2.png';
}
else if (stage >= 3) {
    cirno.src = './img/c3.png';
}

if (i >= prices.length) {
    cost.innerText = 'Max upgrade!';
    upbtn.style.display = 'none';
} else {
    cost.innerText = `Upgrade cost: ${price}`;
}

// clicker

clickbtn.onclick = function() {

    cirno.classList.add('pulse');

    count += power;

    // limit
    if (count >= 9999) {
        count = 9999;
    }

    // pics for stages
    if (count >= 99 && stage === 1) {
        cirno.src = './img/c2.png';
        stage = 2;
    }
    else if (count >= 999 && stage === 2) {
        cirno.src = './img/c3.png';
        stage = 3;
    }

    // win state
    if (count >= 9999) {
        counter.innerText = '9999! You won!';
        clickbtn.style.display = 'none';
    } else {
        counter.innerText = count;
    }

    saveGame();
};

// pulse reset

cirno.addEventListener('animationend', () => {
    cirno.classList.remove('pulse');
});

// upgrade

upbtn.onclick = function() {

    if (i >= prices.length) {
        cost.innerText = 'Maximal upgrade!';
        return;
    }

    if (count < price) {
        cost.innerText = `Need ${price - count} more coins for next upgrade!`;
        return;
    }
    power *= 2;
    count -= price;
    counter.innerText = count;
    i++;

    if (i >= prices.length) {
        cost.innerText = 'Max upgrade!';
        upbtn.style.display = 'none';
    } else {
        price = prices[i];
        cost.innerText = `Upgrade cost: ${price}`;
    }

    saveGame();
};

// save to local storag

function saveGame() {
    localStorage.setItem('count', count);
    localStorage.setItem('power', power);
    localStorage.setItem('i', i);
    localStorage.setItem('price', price);
    localStorage.setItem('stage', stage);
}

resetbtn.onclick = function() {
    // reset variables
    count = 0;
    power = 1;
    i = 0;
    stage = 1;
    price = prices[0];

    // reset text
    counter.innerText = count;
    cost.innerText = `Upgrade cost: ${price}`;

    // reset image
    cirno.src = './img/c1.png';

    // restore buttons
    clickbtn.style.display = 'inline-block';
    upbtn.style.display = 'inline-block';

    // clear localStorage
    localStorage.clear();

}
