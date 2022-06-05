// callBack function 

function explain_callback(name, age, task){
  console.log('hello', name );
  console.log('Your age is ', age );
  task();
}

function washHand(){
  console.log('Wash Your hand');
}

function takeShower(){
  console.log('Go and Take Shower');
}

  explain_callback('Rony', 27, washHand);
  explain_callback('Joly', 22, takeShower);