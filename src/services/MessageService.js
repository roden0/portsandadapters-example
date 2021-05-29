// import repo
import MessageRepository from "../infra/MessageRepository";
// import presenter
/**
 * Class represents service for messages
 */
class MessageService {
  constructor() {
    this.repo = new MessageRepository();
    // this presenter instance
  }
  /**
   *
   * @param {string} message
   */
  createMessage(message) {
    this.repo.create(message);
  }
}

const instanceService = new MessageService();

export default instanceService;
