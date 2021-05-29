// App start
console.group("Application initialize");
console.info("app init");
// Bind controllers to Dom Events

import MessageController from "./infra/MessageController";
import UserController from "./infra/UserController";

console.log("import controllers");

// Event delegation
/*
const publishForm = document.getElementById("messagePublishForm");
const lists = document.querySelector(".lists");
publishForm.addEventListener("submit", MessageController.onMessageSend);
lists.addEventListener("click", UserController.onUserClick);
*/
console.log("bind controllers");

console.groupEnd();
