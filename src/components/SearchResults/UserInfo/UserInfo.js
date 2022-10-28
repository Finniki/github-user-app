import styles from "./UserInfo.module.css";

const UserInfo = ({
  userInfo: { avatar_url, name, login, bio, created_at },
}) => {
  return (
    <div className={styles.userInfo}>
      <img className={styles.userImage} src={avatar_url || octocat} alt="User avatar" />
      <div className={styles.userInfoIntro}>
        <div className={styles.userInfoName}>
          <h2>{`${name || "Not Available"}`}</h2>
          <p className={styles.userInfoHandle}>{`${
            login || "Not Available"
          }`}</p>
        </div>
        <p className={styles.userInfoDate}>{`Joined ${
          new Date(created_at).toLocaleString("en-US", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          }) || "Not Available"
        }`}</p>
      </div>
      <p className={styles.userInfoBio}>
        {`${bio || "This profile has no bio"}`}
      </p>
    </div>
  );
};

export default UserInfo;
