// import Message domain
import Message from "../domain/Message";
/**
 * Class represents repository of messages
 */
class MessageRepository {
  constructor() {
    // this message collection
  }

  /**
   * create message
   * @param {object} message
   * @returns {object} message instance
   */
  create(message) {
    const messageInstance = new Message(message);
    return messageInstance;
  }
}

export default MessageRepository;
