// function to create a search input
const createInput = () => {
  const input = document.createElement("input");
  input.setAttribute("class", "input");
  input.setAttribute("type", "text");
  input.setAttribute("placeholder", "Search...");

  return input;
};

export default createInput;
