(function (window) {

    let speakWords = "Good bye";
    let byeSpeaker = {};
    byeSpeaker.speak = function (name) 
    {
      console.log( speakWords + " " + name);
    }

    window.byeSpeaker = byeSpeaker;

})(window);

// let speakWords = "Good bye";
// let byeSpeaker = {};
// byeSpeaker.speak = function (name) {
//    console.log( speakWords + " " + name);
// }
// juan eduardo gama torres