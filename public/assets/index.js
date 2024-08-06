

// document.addEventListener("DOMContentLoaded", function () {
//   // Показываем модальное окно с файлами cookie при загрузке страницы
//   const cookieModal = document.getElementById("cookie-modal");
//   cookieModal.style.display = "flex"; // Показываем модальное окно

//   // Обработчик события для кнопки "Принять"
//   const acceptCookiesBtn = document.getElementById("accept-cookies");
//   acceptCookiesBtn.addEventListener("click", function () {
//     cookieModal.style.display = "none"; // Скрываем модальное окно
//     // Можно добавить код для сохранения состояния согласия пользователя на использование файлов cookie
//   });
// });

// document.addEventListener("DOMContentLoaded", function () {
//   let orderForm = document.getElementById("contactForm");
//   let emailInput = document.getElementById("email");


//   let savedEmail = getCookie("email");




//   if (savedEmail !== "") {
//     emailInput.value = savedEmail;
//   }



//   orderForm.addEventListener("submit", function (event) {
    
//     document.cookie =
//       "email=" +
//       encodeURIComponent(emailInput.value) +
//       "; expires=Thu, 18 Dec 2024 12:00:00 UTC; path=/";
//   });
// });

// function getCookie(name) {
//   let nameEQ = name + "=";
//   let cookies = document.cookie.split(";");
//   for (let i = 0; i < cookies.length; i++) {
//     let cookie = cookies[i];
//     while (cookie.charAt(0) === " ") {
//       cookie = cookie.substring(1);
//     }
//     if (cookie.indexOf(nameEQ) === 0) {
//       return decodeURIComponent(cookie.substring(nameEQ.length, cookie.length));
//     }
//   }
//   return "";
// }


// document.querySelector('.menu-toggle').addEventListener('click', () => {
//   document.querySelector('.nav-links').classList.toggle('active');
// });
// document.querySelectorAll('.track-link').forEach(link => {
//     link.addEventListener('click', function(event) {
//         event.preventDefault(); // Предотвращаем переход по ссылке для тестирования
//         const message = this.getAttribute('data-message');
//         sendTelegramRequest(message);
//     });
// });

// function sendTelegramRequest(message) {
//   fetch('http://localhost:3000/send-telegram', {
//       method: 'GET',
//       headers: {
//           'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({ message: message })
//   })
//   .then(response => {
//       if (!response.ok) {
//           throw new Error('HTTP error, status = ' + response.status);
//       }
//       return response.json(); // Читаем и парсим ответ как JSON
//   })
//   .then(data => {
//       console.log('Сообщение отправлено:', data);
//       // window.location.href = this.href; // Убираем комментарий после тестирования
//   })
//   .catch(error => console.error('Ошибка при отправке сообщения:', error));
// }
