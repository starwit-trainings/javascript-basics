const users = [
    {
        id: 0,
        name: "sarah.jones",
        age: 32,
        manager: null
    },
    {
        id: 1,
        name: "david.smith",
        age: 40,
        manager: null
    },
    {
        id: 2,
        name: "emily.wilson",
        age: 26,
        manager: 0
    },
    {
        id: 3,
        name: "john.davis",
        age: 55,
        manager: 0
    },
    {
        id: 4,
        name: "lauren.brown",
        age: 39,
        manager: 1
    },
    {
        id: 5,
        name: "michael.martin",
        age: 20,
        manager: 1
    },
];

function getUserById(userid) {
    return users.find(user => user.id === userid);
}

function getUserByName(username) {
    return users.find(user => user.name === username);
}

function getAllUsers() {
    return users.map(user => [user.id, user.name]);
}

export { getUserById, getUserByName, getAllUsers };