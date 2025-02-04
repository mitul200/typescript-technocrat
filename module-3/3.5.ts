// private means it only work or defiend in bankAccount in the second breacket
{
  class BankAccount {
    constructor(
      public readonly id: number,
      public name: string,
      private _balance: number
      // protacted 
    ) {}

    addDiposit(amount: number) {
      return (this._balance = this._balance + amount);
    }

    getBalance() {
      return this._balance;
    }
  }
  const personAccount = new BankAccount(1, "khaled", 5);
  personAccount.addDiposit(30000);

  const myBalance = personAccount.getBalance();
  console.log(myBalance);
}
