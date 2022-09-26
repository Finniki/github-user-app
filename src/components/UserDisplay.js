import UserInfo from "./searchResults/UserInfo";
import UserAccount from "./searchResults/UserAccount";
import UserContact from "./searchResults/UserContact";
import "./UserDisplay.css";

const UserDisplay = (props) => {
  return (
    <div className="user-display">
      <UserInfo userInfo={props.userData.profile} />
      <UserAccount accountInfo={props.userData.account} />
      <UserContact icons={props.icons} contactInfo={props.userData.contact} />
    </div>
  );
};

export default UserDisplay;
