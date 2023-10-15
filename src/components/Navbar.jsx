import { styles } from "../styles";
import { navLinks } from "../constants/projectsData";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <ul className="bg-black flex justify-end gap-3">
      {navLinks.map((link) => (
        <Link to={link.link} key={link.id}>
          <li className={`${styles.navLinks}`}>{link.title}</li>
        </Link>
      ))}
    </ul>
  );
};

export default Navbar;
