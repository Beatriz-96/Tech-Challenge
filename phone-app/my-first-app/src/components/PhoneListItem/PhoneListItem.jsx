import { Link } from "react-router-dom";

import classes from "./PhoneListItem.module.css";

export const PhoneListItem = ({ phone }) => {
  return (
    <Link to={`/phones/${phone.id}`} className={classes.Link}>
      <div className={classes.PhoneListItem}>
        <img
          className={classes.Image}
          src={`http://localhost:3000/images/${phone.imageFileName}`}
          alt=""
        />

        <div>
          <h2>{phone.name}</h2>
          <p>
            <b>Manufacturer:</b> {phone.manufacturer}
          </p>
          <p>
            <b>Color:</b> {phone.color}
          </p>
        </div>
      </div>
    </Link>
  );
};
