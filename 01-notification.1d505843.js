!function(){var i=null;function e(){refs.notificationEl.classList.remove("is-visible")}refs={notificationEl:document.querySelector(".js-alert")},refs.notificationEl.addEventListener("click",(function(){console.log("Прибираємо нагадування та видаляємо сеттаймаут"),e(),clearTimeout(i)})),refs.notificationEl.classList.add("is-visible"),i=setTimeout((function(){console.log("Закриваємо нагадування черз 3 секунди!"),e()}),3e3)}();
//# sourceMappingURL=01-notification.1d505843.js.map
