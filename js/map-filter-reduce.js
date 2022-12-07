`strict`


//**
//**Create a file named map-filter-reduce.js in your js directory and copy the users data below into it.
//**    Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.
//**    Use .map to create an array of strings where each element is a user's email address
//**Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.
//**    Use .reduce to get the longest email from the list of users.
//**    Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.
//**Bonus
//**Use .reduce to get the unique list of languages from the list of users.
//
//**    const users = [
//**    {
//**        id: 1,
//**        name: 'ryan',
//**        email: 'ryan@codeup.com',
//**        languages: ['clojure', 'javascript'],
//**        yearsOfExperience: 5
//**    },
//**    {
//**        id: 2,
//**        name: 'luis',
//**        email: 'luis@codeup.com',
//**        languages: ['java', 'scala', 'php'],
//**        yearsOfExperience: 6
//**    },
//**    {
//**        id: 3,
//**        name: 'zach',
//**        email: 'zach@codeup.com',
//**        languages: ['javascript', 'bash'],
//**        yearsOfExperience: 7
//**    },
//**    {
//**        id: 4,
//**        name: 'fernando',
//**        email: 'fernando@codeup.com',
//**        languages: ['java', 'php', 'sql'],
//**        yearsOfExperience: 8
//**    },
//**    {
//**        id: 5,
//**        name: 'justin',
//**        email: 'justin@codeup.com',
//**        languages: ['html', 'css', 'javascript', 'php'],
//**        yearsOfExperience: 9
//**    }
//**];
// **********************************************************

// // Create an array of user objects where each user object has at least 3 languages in the languages array
// const usersWithAtLeastThreeLanguages = users.filter(user => user.languages.length >= 3);
//
// // Create an array of strings where each element is a user's email address
// const emails = users.map(user => user.email);
//
// // Get the total years of experience from the list of users and calculate the average
// const totalYearsOfEx
// perience = users.reduce((total, user) => total + user.yearsOfExperience, 0);
// const averageYearsOfExperience = totalYearsOfExperience / users.length;
//
// // Get the longest email from the list of users
// const longestEmail = users.reduce((longest, user) => user.email.length > longest.length ? user.email : longest, "");
//
// // Get the list of user names in a single string
// const names = users.reduce((names, user) => `${names}${names ? ", " : ""}${user.name}`, "");
//
// // Get the unique list of languages from the list of users
// const languages = users.reduce((languages, user) => {
//     user.languages.forEach(language => {
//         if (!languages.includes(language)) {
//             languages.push(language);
//         }
//     });
//     return languages;
// }, []);
