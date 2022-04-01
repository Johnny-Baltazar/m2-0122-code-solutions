const takeAChance = require('./take-a-chance');

takeAChance('Johnny').then(resolve => {
  console.log(resolve);
}, reject => {
  console.log(reject.message);
});
