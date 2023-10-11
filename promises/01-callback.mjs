import { getAllUsers, getUserById } from "./users.mjs";

function loadUsers(responseHandler) {
    console.log(`Loading all users from /api/users...`);
    const responseTime = Math.random() * 4000 + 1000;
    setTimeout(function() {
        console.log(`Response from /api/users after ${responseTime.toFixed()}ms`);
        responseHandler(getAllUsers());
    }, responseTime);
}

function loadUserDetails(userid, responseHandler) {
    console.log(`Loading user details from /api/user/${userid}...`);
    const responseTime = Math.random() * 4000 + 1000;
    setTimeout(function() {
        console.log(`Response from /api/user/${userid} after ${responseTime.toFixed()}ms`);
        responseHandler(getUserById(userid));
    }, responseTime);
}


loadUsers(function(userlist) {
    console.log(`Got user list: ${userlist.map(([_, name]) => name)}`);
    for (const [userid, username] of userlist) {
        loadUserDetails(userid, function(user) {
            console.log(`Got user details for ${username}: ${JSON.stringify(user)}`);
            if (user.manager !== null) {
                console.log(`Loading manager for ${username}`);
                loadUserDetails(user.manager, function(manager) {
                    console.log(`Got manager for ${username}: ${JSON.stringify(manager)}`);
                });
            }
        });
    }
});