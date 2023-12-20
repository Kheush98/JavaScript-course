class Wallet {
  constructor() {
    this._balance = 0;
    this._transactions = [];
  }

  deposit(amount) {
    this._balance += amount;
    this._transactions.push(`${new Date()}: Depot de ${amount} $`)
  }

  withdraw(amount) {
    if (amount > this._balance) {
      console.log('Pas assez de fonds :(');
      return;
    }
    this._balance -= amount;
    this._transactions.push(`${new Date()}: Retrait de ${amount} $`)
  }

  get balance() {
    return this._balance;
  }

  get transactions() {
    return this._transactions;
  }
}

const wallet = new Wallet();
wallet.deposit(300);
wallet.withdraw(100);

console.log(wallet.balance);
console.log(wallet.transactions);