import UserInfo from "./../../searchResults/userInfo/UserInfo";
import UserAccount from "./../../searchResults/userAccount/UserAccount";
import UserContact from "./../../searchResults/userContact/UserContact";
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
