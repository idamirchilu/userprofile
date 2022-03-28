import classes from "./PublicProfile.module.css";
import { Link } from "react-router-dom";
import PublicCard from "../UI/PublicCard";
import avatar from "../../assets/images/avatar.png";

export default function PublicProfile() {
  return (
    <div className={classes.main}>
      <PublicCard>
        <div className={classes.container}>
          <div className={classes["top-section"]}>
            <div className={classes.avatar}>
              <img
                style={{ margin: "1rem" }}
                src={avatar}
                alt="avatar"
                width="250px"
                height="250px"
              />
            </div>
            <div className={classes["field-one"]}>
              <h2>Frist Name: Soheil</h2>
              <h2>Last Name: Hamzebeigi</h2>
              <h2>Gender: </h2>
              <div className={classes.radio}>
                <input type="radio" value="MALE" name="gender" id="male" />
                <label htmlFor="male">Male</label>
                <input type="radio" value="FEMALE" name="gender" id="female" />
                <label htmlFor="female">Female</label>
                <input type="radio" value="Prefer" name="gender" id="prefer" />
                <label htmlFor="prefer">Prefer Not To Answer</label>
              </div>
            </div>
          </div>
          <div className={classes["buttom-section"]}>
            <div className={classes["field-three"]}>
              <h2>A Little Aboute ME: </h2>
              <textarea placeholder="write here" cols="50" rows="15"></textarea>
            </div>
            <div className={classes["field-two"]}>
              <h2>University: IUST </h2>
              <h2>Field Of Study: Computer Engineering</h2>
              <h2>Soft Skills: Public relations, Critical thinking</h2>
              <h2>Hard Skills: Reactjs, CSS, HTML</h2>
              <h2>Languages: English </h2>
            </div>
          </div>
        </div>
      </PublicCard>
      <div className={classes["btn-container"]}>
        <Link to="/">
          <button className={classes.button} type="primary" size="large">
            Return to Home Page
          </button>
        </Link>
      </div>
    </div>
  );
}
