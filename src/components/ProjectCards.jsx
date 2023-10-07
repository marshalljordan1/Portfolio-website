import { projects } from "../constants/projectsData";
import { styles } from "../styles";

const ProjectCards = () => {
  return (
    <div className="bg-white relative flex flex-col justify-start vh-100 px-5 mb-5">
      <h1 className={`${styles.subTitle} mt-3`}>My projects</h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-1 gap-4">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => {}}
            className={`text-white h-[250px] flex text-center items-center justify-center my-2 mx-2 grayscale hover:grayscale-0 cursor-pointer`}
            style={{
              backgroundImage: `url(${project.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <a
              href={`${project.source_code_link}`}
              className={`${styles.subTitle} text-white hover:animate-bounce`}
            >
              {project.name}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ProjectCards;
