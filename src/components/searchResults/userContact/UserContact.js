import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./UserContact.css";

const UserContact = (props) => {
  return (
    <div className="user-contact">
      <FontAwesomeIcon
        icon={props.icons[0]}
        className="icons grid-item grid-item__1"
      />
      <p className="icon-text grid-item grid-item__2">
        {props.contactInfo.location}
      </p>
      <FontAwesomeIcon
        icon={props.icons[1]}
        className="icons grid-item grid-item__3"
      />
      <p className="icon-text grid-item grid-item__4">
        {props.contactInfo.twitter}
      </p>
      <FontAwesomeIcon
        icon={props.icons[2]}
        className="icons grid-item grid-item__5"
      />
      <a href="#" target="_blank" className="link">
        {props.contactInfo.website}
      </a>
      <FontAwesomeIcon
        icon={props.icons[3]}
        className="icons grid-item grid-item__7"
      />
      <p className="icon-text grid-item grid-item__8">
        @{props.contactInfo.job}
      </p>
    </div>
  );
};

export default UserContact;
