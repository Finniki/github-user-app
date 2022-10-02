import "./UserInfo.css";

const UserInfo = (props) => {
  return (
    <div className="user-info">
      <img
        className="user-image"
        src={props.userInfo.image.octocat}
        alt="User avatar"
      />
      <div className="user-info__intro">
        <div className="user-info__name">
          <h2>{props.userInfo.name}</h2>
          <p className="user-info__handle">{props.userInfo.handle}</p>
        </div>
        <p className="user-info__date">{props.userInfo.date}</p>
      </div>
      <p className="user-info__bio">{props.userInfo.bio} </p>
    </div>
  );
};

export default UserInfo;
