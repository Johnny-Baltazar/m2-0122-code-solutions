/* exported Account */
function Account(number, holder) {
  this.holder = holder;
  this.number = number;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  if (Number.isInteger(amount) && amount > 0) {
    this.transactions.push(new Transaction('deposit', amount));
    return true;
  } else {
    return false;
  }
};

Account.prototype.withdraw = function (amount) {
  if (Number.isInteger(amount) && amount > 0) {
    var accountWithdrawal = new Transaction('withdrawal', amount);
    this.transactions.push(accountWithdrawal);
    return true;
  } else {
    return false;
  }
};

Account.prototype.getBalance = function () {
  if (this.transactions.length > 0) {
    var depositSum = 0;
    var withdrawSum = 0;
    var balance = 0;
    for (var i = 0; i < this.transactions.length; i++) {
      if (this.transactions[i].type === 'deposit') {
        depositSum = this.transactions[i].amount + depositSum;
      } else {
        withdrawSum = withdrawSum + this.transactions[i].amount;
      }
    }
    balance = depositSum - withdrawSum;
    return balance;
  } else {
    balance = 0;
    return balance;
  }
};
