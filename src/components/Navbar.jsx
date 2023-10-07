import { styles } from "../styles";
import { navLinks } from "../constants/projectsData";
import { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <ul className="flex justify-end gap-3">
      {navLinks.map((link) => (
        <li
          key={link.id}
          className={`${
            active === link.title ? "text-[#66ccff]" : "text-white"
          } ${styles.navLinks} cursor-pointer`}
          onClick={() => {
            setToggle(!toggle);
            setActive(link.title);
          }}
        >
          <a href={`#${link.id}`}>{link.title}</a>
        </li>
      ))}
    </ul>
  );
};

export default Navbar;
