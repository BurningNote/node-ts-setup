import UserReposotory from "../repositories/user.repository";


class UserService {

    public static async getUsers() {
        return UserReposotory.getUsers();
    }

    public static async getUser(id: number) {
        return UserReposotory.getUser(id);
    }

    public static async createUser(user: any) {
        return UserReposotory.createUser(user);
    }

    public static async updateUser(user: any) {
        return UserReposotory.updateUser(user);
    }

    public static async deleteUser(id: number) {
        return UserReposotory.deleteUser(id);
    }
}

export default UserService;