const sample_users = [
    {
        name: "Jon Snow",
        email: "jon@snow.com",
        password: "12345",
        address: "Toronto",
        isAdmin: true
    },
    {
        name: "Jane Frost",
        email: "jane@frost.com",
        password: "12345",
        address: "Shanghao",
        isAdmin: false
    }
]

function getsSampleUsers() {
    return sample_users;
}

module.exports = getsSampleUsers;