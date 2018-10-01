class Human {
    constructor(name, years) {
        this.name = name;
        this.years = years;
    }
    viewData() {
        console.log(this.name + " " + this.years);
    }
}
class Worker extends Human {
    constructor(name, years, placeWork) {
        super(name, years);
        this.placeWork = placeWork;
    }
    viewData() {
        super.viewData();
        console.log(this.placeWork);
    }
}
let worker = new Worker("b",1992,'aaaa');

worker.viewData();


// Number.prototype.add = function () {
//     return console.log(this);
// };
// (5).add();


// let a = new Number(5);
// let b = 6;

// console.log(a === 5);
// console.log(a);
// a.space = 'aaaa';
// a.ololo = 'adad';
// console.log(a.space); // aaaa
// console.log(a + b); // aaaa