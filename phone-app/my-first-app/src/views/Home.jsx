import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <h1 className="page-title">The Phone Cave</h1>
      <Link to="/phones">
      <img className="phone-img"
        src="https://cdn.vox-cdn.com/thumbor/jLsR_FM9_CxkIyVMEJr9GKBd8y4=/0x0:2040x1360/2400x1356/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/24222843/226422_K_Radtke_budget_phone_buying_guide.jpg"
        alt=""
      />
      </Link>;
    </div>
  );
};
