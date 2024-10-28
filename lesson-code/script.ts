document.write("Hello TypeScript world!!");

// Enum alt. Union
enum Role {
  "student",
  "teacher",
}

let greeting: string = "Hello"; // String
let age: number = 43; // Number
let cool: boolean = true; // Boolean
let role: Role = Role.student; // 'teacher'
let role2: "student" | "teacher" = "student";
let tel: string | number = 4670123456789;

// Alt Array<string>
// Flera datatyper i samma arr => (string|number)[]
let greetings: string[] = ["Hello", "Tjeeeena!", "Yoyo"];

type Work = {
  location: string;
  adress: string;
  postNr: number;
};

type User = {
  name: string;
  email: string;
  role?: "cto" | "teacher";
  work: Work;
};

let user: User = {
  name: "Johan",
  email: "johan.kivi@zocom.se",
  role: "cto",
  work: {
    location: "Götelaborg",
    adress: "Karatevägen 3",
    postNr: 13377,
  },
};

const users: User[] = [];

const exception: any = "";

const button: HTMLButtonElement | null = document.querySelector("button");
const input: HTMLInputElement | null = document.querySelector("input");

const content = button?.innerText;
const value = input?.value;
