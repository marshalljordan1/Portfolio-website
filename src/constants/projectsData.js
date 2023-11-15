import JapaneseToursim from "../assets/img/JapaneseToursimWebsite.png";
import Bookmark from "../assets/img/Bookmark.png";
import github from "../assets/img/github.png";
import nextjs from "../assets/img/nextjs.png";

export const navLinks = [
  {
    id: "projects",
    title: "Projects",
    link: "/projects",
  },
  {
    id: "about",
    title: "About",
    link: "/about",
  },
  {
    id: "contact",
    title: "Contact",
    link: "/contact",
  },
];

export const projects = [
  {
    id: 1,
    name: "HTML + CSS",
    image: JapaneseToursim,
    source_code_link: "https://sprint1-html-and-css.vercel.app/",
  },
  {
    id: 2,
    name: "HTML + Bootstrap + Sass",
    image: Bookmark,
    source_code_link: "https://sprint2-bootstrap-and-sass.vercel.app/",
  },
  {
    id: 3,
    name: "React.js + Typescript",
    image: github,
    source_code_link: "https://git-repo-search-kohl.vercel.app/",
  },
  {
    id: 4,
    name: "Next.js",
    image: nextjs,
    source_code_link: "https://next-js-alpha-three.vercel.app/",
  },
];
