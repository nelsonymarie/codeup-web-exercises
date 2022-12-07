// (function(){
//     "use strict";
//
//     let planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
//     let planetsArray;
//
//     /**
//      * TODO:
//      * Convert planetsString to an array, and save it in a letiable named
//      * planetsArray.
//      * console.log planetsArray to check your work
//      */
//     planetsArray = planetsString.split("|");
//     console.log(planetsArray);
//
//     /**
//      * TODO:
//      * Create a string with <br> tags between each planet. console.log() your
//      * results. Why might this be useful?
//      *
//      * BONUS:
//      * Create another string that would display your planets in an undordered
//      * list. You will need an opening AND closing <ul> tags around the entire
//      * string, and <li> tags around each planet.
//      */
//     let newPlanets = planetsArray.join("<br>");
//     console.log(newPlanets);
// })();
//


//     //Practice
//
// let ul = "<ul>< li > Earth</li><li>Pluto</li><li>Mars</li><li>Saturn</li></ul > ";
// console.log(ul);
// let ul2 = `
//       <ul>
//         <li>Earth</li>
//         <li>Pluto</li>
//         <li>Mars</li>
//         <li>Saturn</li>
//     </ul>
//     `;
// console.log(ul2);
// let ul3 = "<ul>";
// ul3 += "<li> Earth</li>";
// ul3 += "<li>Pluto</li>";
// ul3 += "<li>Mars</li>";
// ul3 += "<li>Saturn</li>";
// ul3 += "</ul>";
// console.log(ul3);