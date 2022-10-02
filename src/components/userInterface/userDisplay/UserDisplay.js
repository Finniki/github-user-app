import UserInfo from "./../../searchResults/userInfo/UserInfo";
import UserAccount from "./../../searchResults/userAccount/UserAccount";
import UserContact from "./../../searchResults/userContact/UserContact";
import "./UserDisplay.css";

const UserDisplay = ({ icons, userData: { profile, account, contact } }) => {
  return (
    <div className="user-display">
      <UserInfo userInfo={profile} />
      <UserAccount accountInfo={account} />
      <UserContact icons={icons} contactInfo={contact} />
    </div>
  );
};

export default UserDisplay;
