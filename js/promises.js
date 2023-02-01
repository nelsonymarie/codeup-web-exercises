`strict`

function getLastCommitDate(username) {
    const url = `https://api.github.com/users/${username}/events/public`;
    const headers = { 'Authorization': `token YOUR_TOKEN_HERE` };
    return fetch(url, { headers })
        .then(response => response.json())
        .then(events => {
            const commits = events.filter(event => event.type === 'PushEvent');
            return commits[0].created_at;
        });
}

function wait(time) {
    return new Promise(resolve => setTimeout(() => resolve(time), time));
}

getLastCommitDate('octocat')
    .then(date => console.log(`Last commit date: ${date}`));

wait(1000).then(time => console.log(`You'll see this after ${time} milliseconds`));

// <script src="js/promises.js"></script>
