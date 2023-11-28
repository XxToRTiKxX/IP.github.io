document.addEventListener('DOMContentLoaded', function () {
    var registrationButton = document.getElementById('registration-button');
    var questionButton = document.getElementById('question-button');
    function showNotification(message) {
        if ('Notification' in window) {
            Notification.requestPermission().then(function (permission) {
                if (permission === 'granted') {
                    var notification = new Notification(message);
                }
            });
        }
    }
    if (registrationButton) {
        registrationButton.addEventListener('click', function () {
            showNotification('Произошла непредвиденная ошибка.');
        });
    }
    if (questionButton) {
        questionButton.addEventListener('click', function () {
            showNotification('Ваш вопрос успешно отправлен.');
        });
    }
});
