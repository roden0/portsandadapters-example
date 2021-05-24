class Message {
  constructor(author, content, createdAt = Date.now()) {
    this.author = author;
    this.content = content;
    this.createdAt = createdAt;
  }
}

export default Message;
