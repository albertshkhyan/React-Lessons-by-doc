{/* javascript & xml (html) <h1></h1> */ }

// let h1 = document.createElement("h1");
// document.body.appendChild(h1)

// const React = {
//     createElement: function(elem) {
//         let tag = document.createElement(elem);
//     }
// }


// class Auto {

// }


// const x = 10;
// const y = `<h1>${x}</h1`;


//  INCHE E TIMERY HAMARVUM SIDE EFFEKT- vorevhetev timery ashxatum e asinxron (brauzerna ashxatcnum)
// setTimeout(() => {
//     console.log(1);
// })

// console.log(2);

// setTimeout(() => {
//     console.log(3);
// })
//2,1,3

let stop = setInterval(() => {
    console.log(new Date().toLocaleTimeString());
}, 1000);

setTimeout(() => {
    clearInterval(stop);
}, 5000)
