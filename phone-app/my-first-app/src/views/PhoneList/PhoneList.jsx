import { usePhones } from "../../hooks/usePhones";
import { PhoneListItem } from "../../components/PhoneListItem/PhoneListItem";
import { Spinner } from "../../components/Spinner/Spinner";

import classes from "./PhoneList.module.css";

export const PhoneList = () => {
  const { phones, isLoading } = usePhones();

  return (
    <div className={classes.PhoneList}>
      <h1 className={classes.Title}>Phones for Sale</h1>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className={classes.List}>
          {phones.map((phone) => {
            return (
              <div className={classes.ListItem}>
                <PhoneListItem key={phone.id} phone={phone} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
