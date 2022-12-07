`strict`


// let circle = {
//     radius: 3,
//     getArea: function () {
//         return Math.PI * Math.pow(this.radius, 2);
//     },
//     logInfo: function (doRounding) {
//         if (doRounding) {
//             console.log(`Area of a circle with radius ${this.radius} is ${Math.round(this.getArea())}`);
//         } else {
//             console.log(`Area of a circle with radius ${this.radius} is ${this.getArea()}`);
//         }
//     }
// };
//
// console.log("Area of a circle with radius ${this.radius} is ${this.getArea);
//
// console.log("Circle information rounded to the nearest whole number:");
// circle.logInfo(true);
//
// console.log("Circle information with more precision:");
// circle.logInfo(false);
//
// // Change the radius of the circle to 5
// circle.radius = 5;
//
// console.log("Circle information with a new radius:");
// circle.logInfo(true)

//*********************************************************

const PI = 3.141592653589793;

function doRounding(n) {
    return Math.round(n);
}

const circle = {
    radius: 3,
    getArea: function() {
        return PI * Math.pow(this.radius, 2);
    }
};

console.log(circle.getArea()); /
console.log(doRounding(circle.getArea()));

if (circle.getArea() % 1 === 0) {
    console.log('The area of the circle is a whole number.');
} else {
    console.log('The area of the circle is not a whole number.');
}

console.log(circle.getArea().toPrecision(3));
console.log(circle.getArea().toPrecision(2));

circle.radius = 5;
console.log(circle.getArea());
