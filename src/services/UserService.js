import UserRepository from "../infra/UserRepository";
import MessageRepository from "../infra/MessageRepository";

/**
 * Class represents service for users
 */
class UserService {
  /**
   * build service and create own repo instance
   */
  constructor() {
    this.userRepo = new UserRepository();
    // this presenter
  }

  /**
   * create a user
   * @param {object} constructor
   */
  createUser(constructor) {
    const user = this.userRepo.create(constructor);
    // render user
  }

  /**
   * toggle follow user status
   * @param {object} user
   * @param {string} action
   */
  toggleFollow(user, action) {
    if (action === "follow") {
      this.userRepo.followUser(user);
    } else {
      this.userRepo.unFollowUser(user);
    }
  }

  /**
   * filter messages by user name
   * @param {object} param0
   */
  filterMessages({ name }) {
    const selected = this.userRepo.selectUser(name);
  }
}

const instanceService = new UserService();

export default instanceService;
