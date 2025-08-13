//todo-> access modifire

class BankAcccount {
  public readonly id: number;
  public name: string;
  private _balance: number = 0;
  constructor(id: number, name: string, balance: number) {
    this.id = id;
    this.name = name;
    this._balance = balance;
  }

  //todo-> we can write a getter function and can use as a property
  set deposit(amount: number) {
    this._balance = this._balance + amount;
  }
  get balance() {
    return this._balance;
  }
}

const goribManush = new BankAcccount(1, "Rezwan", 100);

goribManush.deposit = 100;
const myBalance = goribManush.balance;
console.log("🚀 ~ myBalance:", myBalance);
