import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLink,
  faLocationDot,
  faBuilding,
} from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import styles from "./UserContact.module.css";

const UserContact = ({ location, twitter_username, blog, company }) => {
  const contactData = [
    {
      name: location || "Not Available",
      icon: faLocationDot,
    },
    {
      name: twitter_username || "Not Available",
      icon: faTwitter,
    },
    {
      name: blog || "Not Available",
      icon: faLink,
    },
    {
      name: company || "Not Available",
      icon: faBuilding,
    },
  ];

  return (
    <div className={styles.userContact}>
      {contactData.map((data, index) => (
        <a
          key={index}
          className={styles.contactData}
          href={`www.test.com/${data.name}`}
        >
          <FontAwesomeIcon icon={data.icon} className={styles.icons} />
          {data.name}
        </a>
      ))}
    </div>
  );
};

export default UserContact;
