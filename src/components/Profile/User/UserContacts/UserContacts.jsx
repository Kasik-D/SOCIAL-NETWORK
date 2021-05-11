import "./UserContacts.css";

let UserContacts = (props) => {
  return (
    <div className="User__contacts">
      <ul className="User__contacts__list">
        <li className="User__contacts__item">
          {props.contacts.facebook == null ? (
            "Facebook : no information"
          ) : (
            <a
              className="User__contacts__item__link"
              href={props.contacts.facebook}
            >
              Facebook
            </a>
          )}
        </li>
        <li className="User__contacts__item">
          {props.contacts.website == null ? (
            "Website : no information"
          ) : (
            <a
              className="User__contacts__item__link"
              href={props.contacts.website}
            >
              Website
            </a>
          )}
        </li>
        <li className="User__contacts__item">
          {props.contacts.vk == null ? (
            "Vk : no information"
          ) : (
            <a className="User__contacts__item__link" href={props.contacts.vk}>
              VKontakte
            </a>
          )}
        </li>
        <li className="User__contacts__item">
          {props.contacts.twitter == null ? (
            "Twitter : no information"
          ) : (
            <a
              className="User__contacts__item__link"
              href={props.contacts.twitter}
            >
              Twitter
            </a>
          )}
        </li>
        <li className="User__contacts__item">
          {props.contacts.instagram == null ? (
            "Instagram : no information"
          ) : (
            <a
              className="User__contacts__item__link"
              href={props.contacts.instagram}
            >
              Instagram
            </a>
          )}
        </li>
        <li className="User__contacts__item">
          {props.contacts.youtube == null ? (
            "Youtube : no information"
          ) : (
            <a
              className="User__contacts__item__link"
              href={props.contacts.youtube}
            >
              Youtube
            </a>
          )}
        </li>
        <li className="User__contacts__item">
          {props.contacts.github == null ? (
            "Github : no information"
          ) : (
            <a
              className="User__contacts__item__link"
              href={props.contacts.github}
            >
              Github
            </a>
          )}
        </li>
        <li className="User__contacts__item">
          {props.contacts.mainLink == null ? (
            "MainLink : no information"
          ) : (
            <a
              className="User__contacts__item__link"
              href={props.contacts.mainLink}
            >
              MainLink
            </a>
          )}
        </li>
      </ul>
    </div>
  );
};

export default UserContacts;
