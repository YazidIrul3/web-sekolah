const { signIn, signUp } = require("./user.repository");

const postUser = async (username, password) => {
  const { user } = await signUp(username, password);

  if (user) {
    throw new Error("User already exist");
  }

  if (!username || !password) {
    throw new Error("username and password is required");
  }
};

const userSingIn = async (username, password) => {
  const { token, tokenOption, checkPassword } = await signIn(
    username,
    password
  );

  if (!username) {
    throw new Error("username is required");
  } else if (!password) {
    throw new Error("password is required");
  } else if (!token) {
    throw new Error("You must login first");
  } else if (!checkPassword) {
    throw new Error("Password is incorrect");
  }

  return [token, tokenOption];
};

module.exports = {
  userSingIn,
  postUser,
};
