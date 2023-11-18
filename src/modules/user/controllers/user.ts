// create a user class with a constructor and get/set methods

class User {
    private name: string;
    private email: string;
    private age: number;
    private static count = 0;

    constructor(name: string, email: string, age: number) {
        this.name = name;
        this.email = email;
        this.age = age;

        User.setCount();
        console.log(`User created: ${this.name}`);
    }

    static setCount(): void {
        User.count++;
    }

    static getCount(): number {
        return User.count;
    }
    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getEmail(): string {
        return this.email;
    }

    public setEmail(email: string): void {
        this.email = email;
    }

    public getAge(): number {
        return this.age;
    }

    public setAge(age: number): void {
        this.age = age;
    }

    public register(): void {
        console.log(`${this.name} is now registered`);
    }

    public payInvoice(): void {
        console.log(`${this.name} paid invoice`);
    }
}

export default User;