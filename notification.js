document.addEventListener("DOMContentLoaded", function() {
    // После загрузки страницы
    setTimeout(showNotification, 2000);
  });
  
  function showNotification() {
    const notificationContainer = document.getElementById("notification-container");
    const closeButton = document.getElementById("close-button");
  
    // Заполнение информации
    const notificationData = { name: "John", message: "Hello, World!" };
    document.getElementById("notification-name").textContent = notificationData.name;
    document.getElementById("notification-message").textContent = notificationData.message;
  
    // Отображение уведомления
    notificationContainer.style.opacity = 1;
  
    // Закрытие уведомления при клике на кнопку
    closeButton.addEventListener("click", function() {
      hideNotification();
    });
  }
  
  function hideNotification() {
    const notificationContainer = document.getElementById("notification-container");
    notificationContainer.style.opacity = 0;
  }
  