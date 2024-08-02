document.addEventListener('DOMContentLoaded', () => {
    if ('Notification' in window) {
        if (Notification.permission === 'granted') {
            showNotification();
        } else if (Notification.permission !== 'denied') {
            Notification.requestPermission().then(permission => {
                if (permission === 'granted') {
                    showNotification();
                }
            });
        }
    } else {
        alert('Notifications are not supported by this browser.');
    }
});

function showNotification() {
    new Notification('FitSphere', {
        body: 'Stay motivated and keep up the good work!',
        icon: 'images/intro_img_FitSphere.jpg' // Update with your icon path
    });

    localStorage.setItem('notificationShown', 'true');
}