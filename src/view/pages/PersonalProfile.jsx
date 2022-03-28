import classes from "./PersonalProfile.module.css";
import { Link } from "react-router-dom";
import PersonalCard from "../UI/PersonalCard";
import avatar from "../../assets/images/avatar.png";

export default function PersonalProfile() {
  return (
    <div className={classes.main}>
      <PersonalCard>
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
              <h2>Cell Phone: </h2>
              <h2>Telephone: </h2>
              <h2>Postal code: </h2>
            </div>
            <div className={classes["field-two"]}>
              <h2>Country: Iran</h2>
              <h2>Town: Tehran</h2>
              <h2>Full Address: </h2>
              <h2>Degree: Bachelor </h2>
              <h2>University: IUST </h2>
              <h2>Field Of Study: Computer Engineering</h2>
            </div>
          </div>

          <div className={classes["buttom-section"]}>
            <div className={classes["field-three"]}>
              <h2>Soft Skills: Public relations, Critical thinking</h2>
              <h2>Hard Skills: Reactjs, CSS, HTML</h2>
              <h2>Languages: English </h2>
            </div>
            <div className={classes["field-four"]}>
              <h2>A Little Aboute ME: </h2>
              <textarea placeholder="write here" cols="50" rows="13"></textarea>
            </div>
          </div>
        </div>
      </PersonalCard>
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
