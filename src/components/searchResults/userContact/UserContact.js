import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./UserContact.css";

const UserContact = ({
  contactInfo: { job, location, twitter, website },
  icons: [locationIcon, twitterIcon, websiteIcon, jobIcon],
}) => {
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
    <div className="user-contact">
      {contactData.map((data) => (
        <a className="contact-data link" href={`www.test.com/${data.name}`}>
          <FontAwesomeIcon icon={data.icon} className="icons" />
          {data.name}
        </a>
      ))}
    </div>
  );
};

export default UserContact;
