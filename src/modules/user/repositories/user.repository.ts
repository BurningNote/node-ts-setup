import { User } from "../models/user.model";
// add all user related curd operations here you need to User module
class UserReposotory {

    public static async getUsers() {
        return User.findAll();
    }

    public static async getUser(id: number) {
        return User.findOne({ where: { userid: id } });
    }

    public static async createUser(user: any) {
        return User.create(user);
    }

    public static async updateUser(user: any) {
        return User.update(user, { where: { userid: user.id } });
    }

    public static async deleteUser(id: number) {
        return User.destroy({ where: { userid: id } });
    }
}

export default UserReposotory;