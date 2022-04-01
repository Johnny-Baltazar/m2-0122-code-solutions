const takeAChance = require('./take-a-chance');

var returnedThen;

takeAChance('Johnny').then(resolve => {
  returnedThen = resolve;
  console.log(returnedThen);
}, reject => {
  returnedThen = reject;
  console.log(returnedThen.message);
});
