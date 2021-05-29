/**
 * Class represents a Message
 */
class Message {
  /**
   * Create instance of Message
   * @param {string} author
   * @param {string} content
   * @param {date} createdAt
   */
  constructor(author, content, createdAt = Date.now()) {
    this.author = author;
    this.content = content;
    this.createdAt = createdAt;
  }
}

export default Message;
