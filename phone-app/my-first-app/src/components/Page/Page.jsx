import classes from "./Page.module.css";

export const Page = ({ children }) => {
  return <div className={classes.Page}>{children}</div>;
};
