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

  const displayData = {
    profile: [avatar_url, name, login, created_at, bio],
    account: [public_repos, followers, following],
    contact: [location, twitter_username, blog, company],
  };
  console.log("data: ", userData);
  return (
    <div className={styles.userDisplay}>
      <UserInfo userInfo={{ ...displayData.profile }} />
      <UserAccount accountInfo={{ ...displayData.account }} />
      <UserContact contactInfo={{ ...displayData.contact }} />
    </div>
  );
};

export default UserDisplay;
