import { projects } from "../constants/projectsData";
import { styles } from "../styles";

const ProjectCards = () => {
  return (
    <div className="bg-white relative flex flex-col justify-start vh-100 px-5 mb-5">
      <h1 className={`${styles.subTitle} mt-3`}>My projects</h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-1 gap-4">
        {projects.map((project) => (
          <a key={project.id} href={`${project.source_code_link}`}>
            <div className="project-card-container">
              <div
                onClick={() => {}}
                className={`text-white h-[250px] flex text-center items-center justify-center my-2 mx-2 grayscale hover:grayscale-0 cursor-pointer`}
                style={{
                  backgroundImage: `url(${project.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div
                  className={`${styles.subTitle} project-title text-white hover:animate-bounce`}
                >
                  {project.name}
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};
export default ProjectCards;
