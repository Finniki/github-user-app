import styles from "./UserAccount.module.css";

const UserAccount = ({ public_repos, followers, following }) => {
  return (
    <div className={styles.userAccount}>
      <p>Repos</p>
      <p>Followers</p>
      <p>Following</p>
      <p className={styles.strong}>
        <strong>{`${public_repos || "-"}`}</strong>
      </p>
      <p className={styles.strong}>
        <strong>{`${followers || "-"}`}</strong>
      </p>
      <p className={styles.strong}>
        <strong>{`${following || "-"}`}</strong>
      </p>
    </div>
  );
};

export default UserAccount;
