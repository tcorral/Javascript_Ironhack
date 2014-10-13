function rollDice()
{
  var result=0;

  do
  {
    result = parseInt(Math.random()*10);
  } while (result<1 || result >6);

  console.log("The result of roll dice: " + result);
}
rollDice();
rollDice();
rollDice();