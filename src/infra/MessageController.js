// import service instance
import instanceService from "../services/MessageService";

// class with static methods
/**
 * Class represents a controller for messages
 */
class MessageController {
  // message creation

  /**
   * method bound for message form submit
   * @param {Event} ev
   * @returns Event
   */
  static onMessageSend(ev) {
    console.group("Message Controller");

    ev.preventDefault();

    const form = ev.target;
    const data = new FormData(form);

    for (let [key, value] of data) {
      console.log(`on message send. ${key}: ${value}`);
    }

    console.groupEnd();
    return ev;
  }
}

export default MessageController;
