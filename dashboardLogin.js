

// function signup(username, password) {
//   if (!username || !password || password.length < 8) return;
//   users.set(username, password);
// }

// function login(username, password) {
//   if (!username || !password) {
//     return "Error: Invalid credentials";
//   }

//   const userPassword = users.get(username);
//   if (userPassword && userPassword === password) {
//     loginAttempts.set(username, 0); // reset attempts
//     return "Login success, token returned";
//   }

//   let attempts = loginAttempts.get(username) || 0;
//   loginAttempts.set(username, attempts + 1);

//   return "Error: Invalid credentials";
// }


module.exports = { signup, login};