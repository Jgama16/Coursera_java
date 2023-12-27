
//juan eduardo gama torres

 (function () {

     let names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

     for (let i = 0; i < names.length; i++){
        var firstLetter = names[i].charAt(0).toLowerCase();
        if (firstLetter === 'j') {
            byeSpeaker.speak(names[i]);
     }else {
        helloSpeaker.speak(names[i]);
     }
    }
 })();    

// (function () {
//     console.log("Hello Coursera! My name is Juan");
// })();