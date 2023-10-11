import { getAllUsers, getUserById } from "./users.mjs";

function loadUsers() {
    console.log(`Loading all users from /api/users...`);
    const responseTime = Math.random() * 4000 + 1000;
    return new Promise(resolve => {
        setTimeout(function() {
            console.log(`Response from /api/users after ${responseTime.toFixed()}ms`);
            resolve(getAllUsers());
        }, responseTime);
    });
}

function loadUserDetails(userid) {
    console.log(`Loading user details from /api/user/${userid}...`);
    const responseTime = Math.random() * 4000 + 1000;
    return new Promise(resolve => {
        setTimeout(function() {
            console.log(`Response from /api/user/${userid} after ${responseTime.toFixed()}ms`);
            resolve(getUserById(userid));
        }, responseTime);
    });
}

loadUsers()
    .then(function(userlist) {
        console.log(`Got user list: ${userlist.map(([_, name]) => name)}`);
        const userPromises = userlist.map(([id, _]) => loadUserDetails(id));
        return Promise.all(userPromises);
    })
    .then(function(users) {
        for (const user of users) {
            console.log(`Got user details for ${user.name}: ${JSON.stringify(user)}`);
            if (user.manager !== null) {
                console.log(`Loading manager for ${user.name}`);
                loadUserDetails(user.manager)
                    .then(function(manager) {
                        console.log(`Got manager for ${user.name}: ${JSON.stringify(manager)}`);
                    });
            }
        }
    })
