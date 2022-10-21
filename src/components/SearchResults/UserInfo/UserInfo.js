import styles from "./UserInfo.module.css";

const UserInfo = ({ userInfo: { image, name, handle, bio, date } }) => {
  // console.log();
  //console.log("PROPS: ", name, handle, date, bio);
  // console.log("DAT:", bio);
  return (
    <div className={styles.userInfo}>
      <img className={styles.userImage} src={image} alt="User avatar" />
      <div className={styles.userInfoIntro}>
        <div className={styles.userInfoName}>
          <h2>{name}</h2>
          <p className={styles.userInfoHandle}>{handle}</p>
        </div>
        <p className={styles.userInfoDate}>{date}</p>
      </div>
      <p className={styles.userInfoBio}>{bio} </p>
    </div>
  );
};

export default UserInfo;
