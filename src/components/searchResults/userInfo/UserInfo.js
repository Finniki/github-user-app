import "./UserInfo.css";

const UserInfo = ({ userInfo: { image, name, handle, bio, date } }) => {
  // console.log();
  //console.log("PROPS: ", name, handle, date, bio);
  // console.log("DAT:", bio);
  return (
    <div className="user-info">
      <img className="user-image" src={image} alt="User avatar" />
      <div className="user-info__intro">
        <div className="user-info__name">
          <h2>{name}</h2>
          <p className="user-info__handle">{handle}</p>
        </div>
        <p className="user-info__date">{date}</p>
      </div>
      <p className="user-info__bio">{bio} </p>
    </div>
  );
};

export default UserInfo;
