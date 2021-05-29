// import User domain
import User from "../domain/User";
/**
 * Class represents repository of userss
 */
class UserRepository {
  constructor() {
    // this user collection
    // this selected user
  }

  /**
   * select a user
   * @param {string} name
   * @returns {string|null}
   */
  selectUser(name) {
    let ret = null;
    if (this.selectedUser !== name) ret = this.selectedUser = name;
    return ret;
  }

  /**
   * create user
   * @param {object} user
   * @returns {object}
   */
  create(user) {
    const userInstance = new User(user);

    return userInstance;
  }

  /**
   * follow user
   * @param {object} param0
   * @returns {object}
   */
  followUser({ id, name }) {
    try {
      this.followedUsers.push(name);
      this.userCollection.set(id, { id, name, isFollowed: true });
    } catch (error) {
      console.error(error);
    }
    return { id, name, isFollowed: true };
  }

  /**
   * unfollow user
   * @param {object} param0
   * @returns {object}
   */
  unFollowUser({ id, name }) {
    try {
      const folloedUserIndex = this.followedUsers.indexOf(name);
      this.followedUsers.slice(folloedUserIndex, 1);
      this.userCollection.delete(id);
      this.userCollection.set(id, { id, name, isFollowed: false });
    } catch (error) {
      console.error(error);
    }
    return { id, name, isFollowed: false };
  }
}

export default UserRepository;
