import UserInfo from "../../SearchResults/UserInfo/UserInfo";
import UserAccount from "../../SearchResults/UserAccount/UserAccount";
import UserContact from "../../SearchResults/UserContact/UserContact";
import "./UserDisplay.css";

const UserDisplay = ({ icons, userData: { profile, account, contact } }) => {
  //console.log("PROFILE: ", profile, account, contact);
  return (
    <div className="user-display">
      <UserInfo userInfo={{ ...profile }} />
      <UserAccount accountInfo={{ ...account }} />
      <UserContact icons={icons} contactInfo={{ ...contact }} />
    </div>
  );
};

export default UserDisplay;
