import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./UserContact.css";

const UserContact = ({
  contactInfo: { job, location, twitter, website },
  icons,
}) => {
  console.log(location);
  return (
    <div className="user-contact">
      <FontAwesomeIcon
        icon={icons[0]}
        className="icons grid-item grid-item__1"
      />
      <p className="icon-text grid-item grid-item__2">{location}</p>
      <FontAwesomeIcon
        icon={icons[1]}
        className="icons grid-item grid-item__3"
      />
      <p className="icon-text grid-item grid-item__4">{twitter}</p>
      <FontAwesomeIcon
        icon={icons[2]}
        className="icons grid-item grid-item__5"
      />
      <a href="#" target="_blank" className="link">
        {website}
      </a>
      <FontAwesomeIcon
        icon={icons[3]}
        className="icons grid-item grid-item__7"
      />
      <p className="icon-text grid-item grid-item__8">@{job}</p>
    </div>
  );
};

export default UserContact;
