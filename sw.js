/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */

self.addEventListener('push', (event) => {
  // console.log('[Service Worker] Push Received.');
  // console.log(`[Service Worker] Push had this data: "${event.data.json()}"`);
  Promise.resolve(event.data.json())
    .then((data) => {
      const { title } = data.notification;
      const options = {
        body: data.notification.body,
        icon: data.notification.icon,
      };
      event.waitUntil(self.registration.showNotification(title, options));
    });
});

self.addEventListener('notificationclick', (event) => {
  // console.log('[Service Worker] Notification click Received.');
  event.notification.close();
  event.waitUntil(
    clients.openWindow('https://nikhils4.github.io'),
  );
});
