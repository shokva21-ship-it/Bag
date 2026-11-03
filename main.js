const shopButton = document.getElementById('shop');
const plusButtons = document.querySelectorAll('#plus');

let count = 0;

plusButtons.forEach(button => {
    button.addEventListener('click', () => {
        count++; 
        shopButton.textContent = count;
    });
});
