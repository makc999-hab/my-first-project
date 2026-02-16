// Получаем кнопку и элемент для результата
const button = document.getElementById('myButton');
const result = document.getElementById('result');

let clickCount = 0;

// Добавляем функцию на клик кнопки
button.addEventListener('click', function() {
    clickCount++;
    result.textContent = `Ты кликнул ${clickCount} раз! 🎉`;
});