// creating a helper function for creating elements in cards
const createElement = (elementName, classNames, textContent) => {
  const element = document.createElement(elementName);
  element.classList.add(classNames);
  element.textContent = textContent;
  return element;
};

export default createElement;
