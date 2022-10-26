import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLink,
  faLocationDot,
  faBuilding,
} from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import styles from "./UserContact.module.css";

const UserContact = ({ contactInfo: { job, location, twitter, website } }) => {
  const contactData = [
    {
      name: location,
      icon: faLocationDot,
    },
    {
      name: twitter,
      icon: faTwitter,
    },
    {
      name: website,
      icon: faLink,
    },
    {
      name: job,
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
