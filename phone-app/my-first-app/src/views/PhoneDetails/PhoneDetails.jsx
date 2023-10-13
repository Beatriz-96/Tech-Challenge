import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import classes from "./PhoneDetails.module.css";

export const PhoneDetails = () => {
  const { id } = useParams();

  const [phoneDetails, setPhoneDetails] = useState({});

  const getPhoneDetailsFromApi = useCallback(async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/phones/${id}`
      );

      setPhoneDetails(data);
    } catch (err) {
      console.log("error getting phone details from API", err);
    }
  });

  useEffect(() => {
    getPhoneDetailsFromApi();
  }, [getPhoneDetailsFromApi]);

  return (
    <div className={classes.PhoneItem}>
      <h1 className={classes.Title}>{phoneDetails.name}</h1>
      <div className={classes.DisplayPhone}>
        <img
          className={classes.Image}
          src={`http://localhost:3000/images/${phoneDetails.imageFileName}`}
          alt="phone-image"
        />
        <div className={classes.PhoneDetails}>
          <p>
            <b>Price:</b> &euro;{phoneDetails.price}
          </p>
          <p>
            <b>Manufacturer:</b> {phoneDetails.manufacturer}
          </p>
          <p>
            <b>Description:</b> {phoneDetails.description}
          </p>
          <p>
            <b>Color:</b> {phoneDetails.color}
          </p>
          <p>
            <b>Screen:</b> {phoneDetails.screen}
          </p>
          <p>
            <b>Processor:</b> {phoneDetails.processor}
          </p>
          <p>
            <b>Ram:</b> {phoneDetails.ram}
          </p>
            <Link to="/phones"> <button className={classes.BackBtn}>Back</button></Link>
        </div>
      </div>
    </div>
  );
};
