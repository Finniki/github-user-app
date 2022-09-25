import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./UserContact.css";

const UserContact = (props) => {
  return (
    <div className="user-conact">
      <div>
        <FontAwesomeIcon icon={props.icon[0]} className="icons" />
        <p className="icon-text">San Fransisco</p>
      </div>
      <div>
        <FontAwesomeIcon icon={props.icon[1]} className="icons" />
        <p className="icon-text">Not Available</p>
      </div>
      <FontAwesomeIcon icon={props.icon[2]} className="icons" />
      <div>
        {/* <a href="#" target="_blank"> */}
        Website
        {/* </a> */}
      </div>
      <div>
        <p className="icon-text">@github</p>
      </div>
    </div>
  );
};

export default UserContact;
