const randomId = (idLength) => {
  let id = "";
  const characters = "ABCDEFGHIJKLMNOPRSTUWXYZabcdefghijklmnoprstuwxyz";
  const amount = characters.length;

  for (let i = 0; i < idLength; i++) {
    id += characters.charAt(Math.floor(Math.random() * amount));
  }
  return id;
};

module.exports = randomId;
