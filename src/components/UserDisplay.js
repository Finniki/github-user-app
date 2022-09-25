import UserInfo from "./searchResults/UserInfo";
import UserAccount from "./searchResults/UserAccount";
import UserContact from "./searchResults/UserContact";
import "./UserDisplay.css";

const UserDisplay = (props) => {
  return (
    <div className="user-display">
      <UserInfo />
      <UserAccount />
      <UserContact icons={props.icons} />
    </div>
  );
};

export default UserDisplay;
