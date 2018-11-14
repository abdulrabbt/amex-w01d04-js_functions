var pathClone = {

    users: [
        hayatAlfahad = {
            id: 1,
            email: "hayat-fahad@gmail.com" , 
            password:"dramaqueen" , 
            friendsList: [], 
            age: 70,
            banned: true
        },
        falcor = {
            id: 2,
            email: "falcor@gmail.com" , 
            password:"falcor1999" , 
            friendsList: [], 
            age: 16
        },
        
        ninnyMuggins = {
            id: 3,
            email: "ninny-muggins@hotmail.com" , 
            password:"ninny788" , 
            friendsList: [], 
            age: 20
        },
        
        shiaLaBeouf = {
            id: 4,
            email: "shiala-b@icloud.com" , 
            password:"JustDoIT2018" , 
            friendsList: [], 
            age: 32,
            banned: true
        },
    ]

};

function setAccountType(user){
    if (user.age > 16){
        console.log("normal account");
    } else {
        console.log("kids account");
    }

}

setAccountType(pathClone.users[0]);
setAccountType(pathClone.users[1]);
setAccountType(pathClone.users[2]);
setAccountType(pathClone.users[3]);


// function addFriend(friend, user){
//     if (friend.banned !== true && user.banned !== true){
//         user.friendsList.push(friend.id);
//     };
// };

// addFriend(pathClone.users[0], pathClone.users[1]);
// addFriend(pathClone.users[1], pathClone.users[2]);
// addFriend(pathClone.users[2], pathClone.users[3]);
// addFriend(pathClone.users[2], pathClone.users[1]);


// console.log(pathClone.users);


// pathClone.users[0].friendsList.push(pathClone.users[3].id);
// console.log(pathClone.users);

// pathClone.users[3].friendsList.push(pathClone.users[1].id);
// pathClone.users[3].friendsList.push(pathClone.users[2].id);
// console.log(pathClone.users);



function addFriend(friend, user){

        if (friend.banned){
            friend.friendsList.push(user.id);
         } else {
            friend.friendsList.push(user.id);
         }
     };

addFriend(pathClone.users[3], pathClone.users[0]);
addFriend(pathClone.users[3], pathClone.users[1]);
addFriend(pathClone.users[3], pathClone.users[2]);
//addFriend(pathClone.users[1], pathClone.users[0]);
//addFriend(pathClone.users[2], pathClone.users[1]);
//addFriend(pathClone.users[3], pathClone.users[2]);
//addFriend(pathClone.users[2], pathClone.users[1]);

console.log(pathClone.users);

function countFriends(user){
    console.log("The number of the user's friends is : ", user.friendsList.length);
};

// countFriends(pathClone.users[0].friendsList);
// countFriends(pathClone.users[1].friendsList);
// countFriends(pathClone.users[2].friendsList);
countFriends(pathClone.users[3]);
 
function removeFriend(friendId, user){
    if (user.friendsList.length > 0){
        user.friendsList = [];
    } else {
        console.log("He don't have any frindes", friendId);
    };
};

removeFriend (pathClone.users[3].id, pathClone.users[3]);
removeFriend (pathClone.users[0].id, pathClone.users[0]);

console.log(pathClone.users);
 