//todo-> access modifire

class BankAcccount {
  public readonly id: number;
  public name: string;
  protected _balance: number = 0;
  constructor(id: number, name: string, balance: number) {
    this.id = id;
    this.name = name;
    this._balance = balance;
  }
  addBalance(amount: number) {
    this._balance = this._balance + amount;
  }
  showBalance() {
    console.log(this._balance);
  }
}


class StudentAccount extends BankAcccount{
    test(){
        // !IF we use protected modifire we can access them within the drived class
        // this.
    }

}


const goribManush = new BankAcccount(1, "Rezwan", 100);
goribManush.addBalance(50);
goribManush.addBalance(50);
goribManush.showBalance();
