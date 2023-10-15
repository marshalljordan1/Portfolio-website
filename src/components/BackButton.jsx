import logo1 from "../assets/img/logo-white-bg.svg";
import logo2 from "../assets/img/logo-black-bg.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function BackButton() {
  const [hover, setHover] = useState(false);

  return (
    <div>
      <div>
        <Link to="/home">
          <button
            className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg ml-5 mt-5 bg-transparent border-0 hover:bg-white"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <img src={hover ? logo2 : logo1} className="h-[50px]"></img>
          </button>
        </Link>
      </div>
    </div>
  );
}
