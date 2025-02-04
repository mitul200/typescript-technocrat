// gatter and setter
{
  class BankAccount {
    constructor(
      public readonly id: number,
      public name: string,
      private _balance: number // protacted
    ) {}

    // public addDiposit(amount: number) {
    //   return (this._balance = this._balance + amount);
    // }

    // public getBalance() {
    //   return this._balance;
    // }

    // getter
    public get Balance(): number {
      return this._balance;
    }

    // setter

    public set deposit(amount: number) {
      this._balance = this._balance + amount;
    }
  }
  const personAccount = new BankAccount(1, "khaled", 5);
  // personAccount.addDiposit(30000);
  const myBalance = personAccount.Balance; //propaty sr moto kore
  const myDeposit = (personAccount.deposit = 80);

  // const myBalance = personAccount.getBalance(); && use korsilam function ar moto kore
  console.log(myDeposit);
}
