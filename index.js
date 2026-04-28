var count = 0;
var power = 1;
var price = 20;
const counter = document.getElementById('counter');
const clickbtn = document.getElementById('click');
const upbtn = document.getElementById('upgrade');
const cost = document.getElementById('cost');

clickbtn.onclick = function() {
    count += power;
    counter.innerText = count;
}

upbtn.onclick = function() {
    if (count >= price && price === 20) {
        power *= 2;
        count -= price;
        price = 100;
        cost.innerText = 'Upgrade cost: 100';
    }
    else if (count >= price && price === 100) {
        power *= 2;
        count -= price;
        price = 300;
        cost.innerText = 'Upgrade cost: 300';
    }
    else if (count >= price && price === 300) {
        power *= 2;
        count -= price;
        price = 600;
        cost.innerText = 'Upgrade cost: 600';
    }
    else if (count >= price && price === 600) {
        power *= 2;
        count -= price;
        price = 999;
        cost.innerText = 'Upgrade cost: 999';
    }
    else if (count >= price && price === 999) {
        power *= 2;
        count -= price;
        cost.innerText = 'Maximum upgrade!';
    }
}