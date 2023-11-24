let a: number = 1;
let b: string = "1";
let c: boolean = true;
let d: number[] = [1, 2, 3];
//unknown 변수의 타입을 미리 알지 못 할 때 사용
let e: unknown;

//optional
type Profile = { readonly name: string; age?: number };
const obj: Profile = {
  name: "ju",
};
const obj2: Profile = {
  name: "juyoungs",
  age: 20,
};

//Func return type
function playerMaker(name: string): Profile {
  return {
    name,
  };
}

//readonly
type ReadOnly = { readonly name: string; age?: number };

const obj3: ReadOnly = {
  name: "juyoungs",
  age: 20,
};
obj3.name = "12"; //error

//Tuple
const arr: [string, number, boolean] = ["test", 12, true];

//void 아무것도 return 하지않는 void

function hello(): void {
  console.log("x");
}

//Call Signatures
type Add = (a: number, b: number) => Number;
const add: Add = (a, b) => a + b;

//Overloading : Call Signatures가 여러가지 있는 함수

type Over = {
  (a: number, b: number): number;
  (a: number, b: string): number;
};

const over: Over = (a, b) => {
  if (typeof b === "string") return a;
  return a + b;
};

//Polymorphism

type SuperPrint = {
  <T>(arr: T[]): T;
};

const superPrint: SuperPrint = (arr) => {
  return arr[0];
};

const f = superPrint([1, 2, 3, 4]);
superPrint([true, false, true, true]);
superPrint(["s", "sd", "s", "d"]);
superPrint(["s", "sd", true, false]);

//generic
type PlayerGeneric<T> = {
  name: string;
  extraInfo: T;
};

const ju: PlayerGeneric<{ favFood: string }> = {
  name: "ju",
  extraInfo: {
    favFood: "ramen",
  },
};
