import "../Assets/Css/NavBar.css";
import image from "../Assets/Img/logo.png";

function NavBar() {
  return (
    <div className="NavBar">
      <div className="Image">
        <img className="Img" src={image} />
      </div>
    </div>
  );
}

export default NavBar;
