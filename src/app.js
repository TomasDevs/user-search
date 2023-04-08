import createUserList from "./components/createUserList";
import createUserListItem from "./components/createUserListItem";
import createInput from "./components/createInput";
import createTitle from "./components/createTitle";
import fetchData from "./utils/fetchData";

const app = async () => {
  // get data using the fetchData function
  const data = await fetchData();

  // creating h1 heading
  const h1 = createTitle();
  document.getElementById("app").appendChild(h1);

  // creating input
  const input = createInput();
  document.getElementById("app").appendChild(input);

  // creating a list for users
  const userListElement = createUserList();
  document.getElementById("app").appendChild(userListElement);

  // creating user items
  let userListItem = createUserListItem(data, userListElement);

  input.addEventListener("input", () => {
    // obtaining a text string
    const searchQuery = input.value.toLowerCase();
    // user filtering
    const filteredUsers = data.filter((user) => {
      const filter = user.name.toLowerCase().includes(searchQuery);
      return filter;
    });

    // clearing the contents of the user list
    userListElement.innerHTML = "";
    // creation of user items according to filtered data and added to the user list
    userListItem = createUserListItem(filteredUsers, userListElement);
  });
};

export default app;
