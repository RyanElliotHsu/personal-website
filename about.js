let funFact;
const facts = ['I haven\'t tried stinky tofu ever in my life (this is like if an Italian never had pasta or pizza)',
'I was voluntarily vegetarian as a toddler, now I struggle to go a single day without meat', 'I was once in a outdoor jacuzzi in -25 degrees celcius weather']

funFact = 'I thought the disherwasher at home was just a rack for drying dishes until I was 17 (an Asian thing).';
//Display fun fact of the day
let answer = document.getElementById('funfact');

//function to obtain random fun fact
function randomFact() {
    funFact = facts[Math.floor(Math.random()*facts.length)];
    answer.textContent = 'Extra fun fact: ' + funFact;
}

//event listener to enable new fun fact with clicking
let btn = document.querySelector('button');
btn.addEventListener('click', randomFact);
