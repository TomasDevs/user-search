import createElement from "./createElement";

// create a list of cards for users with information
const createUserListItem = (users, container) => {
  // loop all users and create new list elements
  const listItems = users.map((user) => {
    const card = document.createElement("li");
    card.classList.add("card__item");

    // creating the image and adding the src and alt properties
    const img = createElement("img", ["card__item--img"], "");
    img.src = `https://robohash.org/${user.name}.png`;
    img.alt = `Robots - ${user.name}`;

    // creating a name
    const name = createElement("div", ["card__item--name"], user.name);

    // creating a company name
    const company = createElement(
      "div",
      ["card__item--company"],
      `Company: ${user.company.name}`
    );

    // creating a position in company
    const position = createElement(
      "div",
      ["card__item--position"],
      `Position: ${user.company.catchPhrase}`
    );

    // creating a phone number with tel link
    const phone = createElement("div", ["card__item--phone"], "Phone: ");
    const phoneLink = createElement("a", ["link"], user.phone);
    phoneLink.href = `tel:${user.phone}`;
    phone.appendChild(phoneLink);

    // creating an email address with mailto link
    const email = createElement("div", ["card__item--email"], "Email: ");
    const emailLink = createElement("a", ["link"], user.email);
    emailLink.href = `mailto:${user.email}`;
    email.appendChild(emailLink);

    // creating a web address with link
    const website = createElement("div", ["card__item--link"], "Website: ");
    const websiteLink = createElement("a", ["link"], user.website);
    websiteLink.href = user.website;
    website.appendChild(websiteLink);

    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(company);
    card.appendChild(position);
    card.appendChild(phone);
    card.appendChild(email);
    card.appendChild(website);
    return card;
  });

  // adding all the elements in the listItems array to the container
  container.append(...listItems);
};

export default createUserListItem;
