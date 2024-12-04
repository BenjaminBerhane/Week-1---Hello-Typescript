document.write("Hello TypeScript world!!");

// Enum alt. Union
// enum Role {
//   "student",
//   "teacher",
// }

// let greeting: string = "Hello"; // String
// let age: number = 43; // Number
// let cool: boolean = true; // Boolean
// let role: Role = Role.student; // 'teacher'
// let role2: "student" | "teacher" = "student";
// let tel: string | number = 4670123456789;

// Alt Array<string>
// Flera datatyper i samma arr => (string|number)[]
// let greetings: string[] = ["Hello", "Tjeeeena!", "Yoyo"];

// type Work = {
//   location: string;
//   adress: string;
//   postNr: number;
// };

// type User = {
//   name: string;
//   email: string;
//   role?: "cto" | "teacher";
//   work: Work;
// };

// let user: User = {
//   name: "Johan",
//   email: "johan.kivi@zocom.se",
//   role: "cto",
//   work: {
//     location: "Götelaborg",
//     adress: "Karatevägen 3",
//     postNr: 13377,
//   },
// };

// const users: User[] = [];

// const exception: any = "";

// const button: HTMLButtonElement | null = document.querySelector("button");
// const input: HTMLInputElement | null = document.querySelector("input");

// const content = button?.innerText;
// const value = input?.value;

type User = {
  id: string;
  name: string;
  age: number;
  likes: string[];
};

type UserLight = {
  id: string;
  name: string;
};

const userLight: Pick<User, "id" | "name"> = {  // med pick väljer du vilka properties som måste vara med från typen som du skapat
  id: "458i90836590643sidjf",
  name: "Johan Kivi",
}

const userLightish: Omit<User, "age"> = {  // med omitvelljer du vilka properties som inte ska vara med från typen som du skapat
  id: "458i90836590643sidjf",
  name: "Johan Kivi",
  likes: ["Coding", "Reading"],
}

const user: User = {
  id: "458i90836590643sidjf",
  name: "Johan Kivi",
  age: 43,
  likes: ["Coding", "Reading"],
};

function multiply(a: number = 0,b:number = 0): number {
  return a * b;
}

const prod = multiply (10, 10);
console.log(prod);


 async function getData(): Promise<{ message: string }> {
  return  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ message: 'Woohoo!'})
    }, 2000)
  });
}

(async() => {
  const prom = await getData();
  console.log(prom);
  
})();

getData().then((data) => console.log(data));

async function listUsers(url: string): Promise<User[]> {
  const response = await fetch(url);
  const data = await response.json();
  return data as User[];
}
async function ListUsers<T>(url: string): Promise<T[]> {  // T är type förkortat och kan användas som en variabel
  const response = await fetch(url);
  const data = await response.json();
  return data as T[];
}

await ListUsers<User>('https...');
export {};

const obj: { items: string[], meta: Record<string, any> } = {
  items: [],
  meta: {
    key
  }
}