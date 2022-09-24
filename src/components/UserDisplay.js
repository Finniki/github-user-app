import UserInfo from "./searchResults/UserInfo";
import UserAccount from "./searchResults/UserAccount";
import UserContact from "./searchResults/UserContact";

const UserDisplay = () => {
  return (
    <div>
      <UserInfo />;
      <UserAccount />
      <UserContact />
    </div>
  );
};

export default UserDisplay;
