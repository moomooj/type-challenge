// interface 사용하여 추상클래스 만들기
//단점.private,protected 사용 못함
interface Person {
  firstName: string;
  lastName: string;
  sayHi(name: string): string;
  fullname(): string;
}

interface Human {
  health: number;
}

class Tester implements Person, Human {
  constructor(
    public firstName: string,
    public lastName: string,
    public health: number
  ) {}
  sayHi(name: string): string {
    return `Hello ${name}. My name is ${this.fullname()}`;
  }
  fullname(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}
