import "./UserInfo.css";
import merchantLogo from "./../../images/merchantLogo.jpg";

const UserInfo = () => {
  return (
    <div className="user-info">
      <img className="UserImage" src={merchantLogo} alt="User logo" />
      <div className="user-info__text">
        <div className="user-info__intro">
          <div className="user-info__name">
            <h1>The Octocat</h1>
            <p className="user-info__handle">@octocat</p>
          </div>
          <p className="user-info__bio">This profile has no bio</p>
        </div>
        <p className="user-info__date">Joined 25 Jan 2011</p>
      </div>
    </div>
  );
};

export default UserInfo;
