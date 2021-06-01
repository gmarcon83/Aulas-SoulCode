interface UserProps {
  firstName: string;
  lastName: string;
  userName: string;
  password: string;
  email: string;
  cpf: string;
  contact: string;
  isAdmin: boolean;
}

class User implements UserProps {
  firstName: string = "";
  lastName: string = "";
  userName: string = "";
  password: string = "";
  email: string = "";
  cpf: string = "";
  contact: string = "";
  isAdmin: boolean = false;

  constructor(
    firstName: string,
    lastName: string,
    userName: string,
    password: string,
    email: string,
    cpf: string,
    contact: string,
    isAdmin: boolean
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.userName = userName;
    this.password = password;
    this.email = email;
    this.cpf = cpf;
    this.contact = contact;
    this.isAdmin = isAdmin;
  }

  getFirstName(): string {
    return this.firstName;
  }
  setFirstName(firstName: string): void {
    this.firstName = firstName;
  }

  getLastName(): string {
    return this.lastName;
  }
  setLastName(lastName: string): void {
    this.lastName = lastName;
  }

  getUserName(): string {
    return this.userName;
  }
  setUserName(userName: string): void {
    this.userName = userName;
  }

  getPassword(): string {
    return this.password;
  }
  setPassword(password: string): void {
    this.password = password;
  }

  getEmail(): string {
    return this.email;
  }
  setEmail(email: string): void {
    this.email = email;
  }

  getCpf(): string {
    return this.cpf;
  }
  setCpf(cpf: string): void {
    this.cpf = cpf;
  }

  getContact(): string {
    return this.contact;
  }
  setContact(contact: string): void {
    this.contact = contact;
  }

  getIsAdmin(): boolean {
    return this.isAdmin;
  }
  setIsAdmin(isAdmin: boolean): void {
    this.isAdmin = isAdmin;
  }

  toString(): string {
    return JSON.stringify(this);
  }
}

const user = new User(
  "Renato",
  "Pereira",
  "renato3x",
  "renato@gmail.com",
  "123",
  "654687351",
  "(65) 555-5855",
  true
);

console.log(user.toString());
