import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./UserContact.module.css";

const UserContact = ({
  contactInfo: { job, location, twitter, website },
  icons: [locationIcon, twitterIcon, websiteIcon, jobIcon],
}) => {
  // console.log(location);

  const contactData = [
    {
      name: location,
      icon: locationIcon,
    },
    {
      name: twitter,
      icon: twitterIcon,
    },
    {
      name: website,
      icon: websiteIcon,
    },
    {
      name: job,
      icon: jobIcon,
    },
  ];

  return (
    <div className={styles.userContact}>
      {contactData.map((data) => (
        <a
          key={data.name}
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
