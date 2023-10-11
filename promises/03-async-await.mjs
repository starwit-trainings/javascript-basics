import { getAllUsers, getUserById } from "./users.mjs";

async function loadUsers() {
    console.log(`Loading all users from /api/users...`);
    const responseTime = Math.random() * 4000 + 1000;
    return new Promise(resolve => {
        setTimeout(function() {
            console.log(`Response from /api/users after ${responseTime.toFixed()}ms`);
            resolve(getAllUsers());
        }, responseTime);
    });
}

async function loadUserDetails(userid) {
    console.log(`Loading user details from /api/user/${userid}...`);
    const responseTime = Math.random() * 4000 + 1000;
    return new Promise(resolve => {
        setTimeout(function() {
            console.log(`Response from /api/user/${userid} after ${responseTime.toFixed()}ms`);
            resolve(getUserById(userid));
        }, responseTime);
    });
}


const userlist = await loadUsers();
console.log(`Got user list: ${userlist.map(([_, name]) => name)}`);

// naive
for (const [userid, _] of userlist) {
    const user = await loadUserDetails(userid);
    console.log(`Got user details for ${user.name}: ${JSON.stringify(user)}`);
    
    if (user.manager !== null) {
        console.log(`Loading manager for ${user.name}`);
        const manager = await loadUserDetails(user.manager);
        console.log(`Got manager for ${user.name}: ${JSON.stringify(manager)}`);
    }
}

// optimized
// const userPromises = userlist.map(([id, _]) => loadUserDetails(id));
// for await (const user of userPromises) {
//     console.log(`Got user details for ${user.name}: ${JSON.stringify(user)}`);

//     if (user.manager !== null) {
//         console.log(`Loading manager for ${user.name}`);
//         const manager = await loadUserDetails(user.manager);
//         console.log(`Got manager for ${user.name}: ${JSON.stringify(manager)}`);
//     }
// }