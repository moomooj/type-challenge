//추상클래스
abstract class User {
  constructor(
    private firstName: string,
    private lastName: string,
    protected nickName: string
  ) {}
  //추상메서드
  abstract getNickName(): void;
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Player extends User {
  getNickName(): void {
    console.log(this.nickName);
  }
}

const juyoung = new Player("oh", "juyoung", "JU");

juyoung.getFullName();
