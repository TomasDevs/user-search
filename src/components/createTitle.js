// function to create a title
const createTitle = () => {
  const h1 = document.createElement("h1");
  h1.textContent = "User search";
  h1.classList.add("heading__title");
  return h1;
};

export default createTitle;
