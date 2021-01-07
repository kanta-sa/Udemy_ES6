// filterで権限の管理

var users = [
 { id: 1, admin: true },
 { id: 2, admin: false },
 { id: 3, admin: false },
 { id: 4, admin: false },
 { id: 5, admin: true },
];

var filteredUsers;

filteredUsers = users.filter(function(user){
    return user.admin;
});
