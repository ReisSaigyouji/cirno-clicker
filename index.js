var count = 0;
var power = 1;
var i = 0
const counter = document.getElementById('counter');
const clickbtn = document.getElementById('click');
const upbtn = document.getElementById('upgrade');
const cost = document.getElementById('cost');
const prices = [20, 50, 100, 300, 600, 999]
var price = prices[0];

clickbtn.onclick = function() {
    count += power;
    counter.innerText = count;
}

upbtn.onclick = function() {
    if (count >= price && i < prices.length) {
        power *= 2;
        count -= price;
        counter.innerText = count;
        i++;
        if (i < prices.length) {
            price = prices[i];
            cost.innerText = `Upgrade cost: ${price}`;
        } else {
            cost.innerText = 'Maximal upgrade!';
        }
    }
    else if (i < prices.length && count < price) {
        cost.innerText = `Need ${price - count} more coins for next upgrade!`;
    }
}