import { Link } from "react-router";
import { useSelector} from "react-redux";

const Navigator = () => {
  const formData = useSelector((state) => state.form.formData);
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/login" className="nav-link">Login</Link>
      <Link to="/counter" className="nav-link">Counter</Link>
      <Link to="/think" className="nav-link">Think</Link>
      <Link to="/product" className="nav-link">Product</Link>
      <Link to="/about" className="nav-link">About</Link>

      <span style={{position: "absolute", right: "70px" ,color: "black"}}>{`${formData.username} | ${formData.email}`}</span>
    </nav>
  );
}

export default Navigator;