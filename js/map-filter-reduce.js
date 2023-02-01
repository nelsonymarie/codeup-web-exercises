// This code uses several array methods to manipulate the data in the users array. 
// The first line with the strict keyword is used to enable JavaScript's strict mode,
// which makes it easier to write secure code by making it easier to detect common programming errors.
//
// The filter() method is used to filter out users who have fewer than three languages, 
// and the resulting array is stored in the usersWithThreeLangs variable. 
// The map() method is used to create an array of emails from the users array, and the resulting array is stored in the emailArray variable.
//
//The reduce() method is used to calculate the total years of experience, 
// which is stored in the totalYears variable, and then to calculate the average years of experience, 
// which is stored in the totalYears/users.length variable. 
// The reduce() method is also used to create the longestEmail variable, 
// which stores the longest email address, and the namesString variable, which stores a string of all the users' names.


`strict`

const users = [
    {
        id: 1,
        name: "Ryan",
        email: "ryan@codeup.com",
        languages: ["ruby", "javascript"],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: "Luis",
        email: "luis@codeup.com",
        languages: ["java", "bootstrap", "php"],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: "Zach",
        email: "zach@codeup.com",
        languages: ["javascript", "python"],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: "Fernando",
        email: "fernando@codeup.com",
        languages: ["java", "php", "C+"],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: "Justin",
        email: "justin@codeup.com",
        languages: ["html", "css", "javascript", "bootstrap"],
        yearsOfExperience: 9
    }
];

const usersWithThreeLangs = users.filter(user => user.languages.length >= 3);
console.log(usersWithThreeLangs);

const emailArray = users.map(user => user.email);
console.log(emailArray);

const totalYears = users.reduce((total, user) => total + user.yearsOfExperience, 0);
console.log(totalYears);
console.log(totalYears / users.length);

const longestEmail = users.reduce((longest, user) => {
    if (user.email.length > longest.length) {
        return user.email;
    } else {
        return longest;
    }
}, "");
console.log(longestEmail);

const namesString = users.reduce((names, user) => names + ", " + user.name,"Your instructors are these guys: ");
console.log(namesString);

