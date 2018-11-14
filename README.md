#  Path clone !

![](https://media1.tenor.com/images/0a49fe26ff3d58ad98782b8df9378586/tenor.gif?itemid=7198602)


### Directions:
Sad to see Path closing its private social network for good! No worries we can make a new one!! and we already have a new line-up users:

```javascript

var hayatAlfahad = {
    id: 1,
    email: "hayat-fahad@gmail.com" , 
    password:"dramaqueen" , 
    friendsList: [], 
    age: 70,
    banned: true
}

var falcor = {
    id: 2,
    email: "falcor@gmail.com" , 
    password:"falcor1999" , 
    friendsList: [], 
    age: 16
}

var ninnyMuggins = {
    id: 3,
    email: "ninny-muggins@hotmail.com" , 
    password:"ninny788" , 
    friendsList: [], 
    age: 20
}

var shiaLaBeouf = {
    id: 4,
    email: "shiala-b@icloud.com" , 
    password:"JustDoIT2018" , 
    friendsList: [], 
    age: 32,
    banned: true
}

```

1. Sign up the users by creating an object `pathClone` then add all the lined-up users inside `users` property.

2. Define a function `setAccountType` that takes a user and assign an `accountType` property to it. If the user is older than 16 years old then assign his/her account as a `"normal account"` if not then it is a `"kids account"`.

3. Define a function `addFriend` that takes two arguments, the first argument name is `friend` which is a user object and the second argument name is `user` which is another user object, the function will take a user id from the friend object and add it to the other user’s friendList but don’t add a friends if they are banned instead print a message ` banned users cant have friends :)`

4. Add `shiaLaBeouf` to `hayatAlfahads` friendsList
5. Add `ninnyMuggins` and `falcor` to `shiaLaBeouf`'s friendsList  

6. Define a function `countFriends` that takes one argument as a `user` object and return the number of the user's friends.

7. Return shiaLaBeouf frinds count 

## Bonus 

1. Define a function `removeFriend` that takes two arguments the first argument `friendId` which is a user id and the second argument is `user` another user object, the function will look for the friendId inside the other user’s friendList then remove the friend if there is no match return a funny message!

2. Remove `ninnyMuggins` from `shiaLaBeouf` 's friends list

3. Remove `hayatAlfahads` from `shiaLaBeouf` 's friends list