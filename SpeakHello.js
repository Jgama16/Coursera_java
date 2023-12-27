
//  let names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  (function (window){

    let speakWord = "Hello";
    let helloSpeaker = {};
    helloSpeaker.speak = function (name) {
       console.log( speakWord + " " + name);
    }

    window.helloSpeaker = helloSpeaker;

  })(window);
  //juan eduardo gama torres


