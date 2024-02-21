/* 32. Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.

• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a
new username. If a username has not been used, print a message saying that the username is available.

• Make sure your comparison is case insensitive. If 'Ahmed' has been used, 'Ahmed' should not be accepted. */

// Define the current users and new users arrays
let current_users: string[] = ['khaliq', 'Abubakar', 'Sajan', 'Usman', 'Ahmed'];
let new_users: string[] = ['Abubakar', 'Sajan', 'Imran', 'Ahmed', 'Hafeez'];

// Loop through the new_users list to check for unique usernames
for (let new_user of new_users) {
    if (current_users.includes(new_user)) {
        console.log(`Sorry, the username "${new_user}" is already taken. Please enter a new username.`);
    } else {
        console.log(`Congratulations! The username "${new_user}" is available.`);
    }
}
