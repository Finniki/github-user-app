import "./UserAccount.css";

const UserAccount = (props) => {
  return (
    <div className="user-account">
      <p>Repos</p>
      <p>Followers</p>
      <p>Following</p>
      <p className="strong">
        <strong>{props.accountInfo.repo}</strong>
      </p>
      <p className="strong">
        <strong>{props.accountInfo.followers}</strong>
      </p>
      <p className="strong">
        <strong>{props.accountInfo.following}</strong>
      </p>
    </div>
  );
};

export default UserAccount;
