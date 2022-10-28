import UserInfo from "../../SearchResults/UserInfo/UserInfo";
import UserAccount from "../../SearchResults/UserAccount/UserAccount";
import UserContact from "../../SearchResults/UserContact/UserContact";
import styles from "./UserDisplay.module.css";

const UserDisplay = ({ userData }) => {
  const {
    avatar_url,
    name,
    login,
    created_at,
    bio,
    public_repos,
    followers,
    following,
    location,
    twitter_username,
    blog,
    company,
  } = userData;
  console.log(userData, name);
  const displayData = {
    profile: {
      avatar_url,
      name,
      login,
      created_at,
      bio,
    },
    account: {
      public_repos,
      followers,
      following,
    },
    contact: {
      location,
      twitter_username,
      blog,
      company,
    },
  };
  console.log(displayData.account, displayData.profile, displayData.contact);

  return (
    <div className={styles.userDisplay}>
      <UserInfo {...displayData.profile} />
      <UserAccount {...displayData.account} />
      <UserContact {...displayData.contact} />
    </div>
  );
};

export default UserDisplay;
