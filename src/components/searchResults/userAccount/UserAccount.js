import styles from "./UserAccount.module.css";

const UserAccount = (props) => {
  return (
    <div className={styles.userAccount}>
      <p>Repos</p>
      <p>Followers</p>
      <p>Following</p>
      <p className={styles.strong}>
        <strong>{props.accountInfo.repo}</strong>
      </p>
      <p className={styles.strong}>
        <strong>{props.accountInfo.followers}</strong>
      </p>
      <p className={styles.strong}>
        <strong>{props.accountInfo.following}</strong>
      </p>
    </div>
  );
};

export default UserAccount;
