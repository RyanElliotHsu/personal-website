/*greet guest by time of day*/
let hour = new Date().getHours();
let greeting = document.getElementById('greeting');
let greetingText;

if (hour >= 18) {
    greetingText = 'Good evening,';
} else if (hour >= 12) {
    greetingText = 'Good afternoon,';
} else if (hour >= 0) {
    greetingText = 'Good morning,';
} else {
    greetingText = 'Hello,';
}

console.log(greetingText);

greeting.textContent = greetingText;
