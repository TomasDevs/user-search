// function for creating a wrapping tag ul
const createUserList = () => {
  const cardList = document.createElement("ul");
  cardList.classList.add("card__list");
  return cardList;
};

export default createUserList;
