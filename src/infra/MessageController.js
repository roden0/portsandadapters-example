// import service instance
import instanceService from "../services/MessageService";

// class with static methods
class MessageController {
  // message creation
  // message sent
  static onMessageSend(ev) {
    console.group("Message Controller");

    ev.preventDefault();

    const form = ev.target;
    const data = new FormData(form);

    for (let [key, value] of data) {
      console.log(`on message send. ${key}: ${value}`);
    }

    console.groupEnd();
  }
}

export default MessageController;
