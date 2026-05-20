import { useSelector } from "react-redux";
import AppContext from "../contexts/AppContext";
import { IoLogOutOutline } from "react-icons/io5";

const Project = () => {
  const { content } = useSelector((state) => state.data);

  if (!content) return null;

  const { projectSection } = content;

  return (
    <main className="w-full dark:bg-dark-skills">
      <div className="flex flex-col py-35 items-center gap-15 text-custom-text-black font-inter font-medium">
        <h1 className="flex font-inter font-medium text-4xl leading-[100%] text-custom-text-black dark:text-custom-gray ">
          {projectSection.title}
        </h1>
        <div className="flex flex-wrap gap-x-17 gap-y-60 justify-center pb-20">
          {projectSection.projects
          .slice()
          .reverse()
          .map((project) => {
            return (
              <div
                key={project.id}
                className={`${
                  Number(project.id) % 2 === 0
                    ? "bg-custom-baby-green dark:bg-dark-project-card-2"
                    : "bg-custom-baby-blue dark:bg-dark-project-card"
                } relative dark:text-white flex flex-col items-start w-100 h-230 sm:w-140 sm:h-205 rounded-xl py-13 px-10 gap-5 overflow-visible`}
              >
                {" "}
                <h2 className="font-playfair font-bold text-3xl leading-[100%]">
                  {project.name}
                </h2>
                <p className="w-full font-inter font-normal text-base leading-[150%]">
                  {project.description}{" "}
                </p>
                <div className="flex text-center w-full flex-wrap gap-2 font-playfair font-bold text-sm leading-[100%] text-custom-text-black dark:text-white">
                  {project.tags.map((tag, index) => {
                    return (
                      <span
                        key={index}
                        className={`${
                          Number(project.id) % 2 === 0
                            ? " dark:bg-dark-project-card"
                            : " dark:bg-custom-bold-gray-circle"
                        } border-none rounded-[76px] px-4 py-2 flex justify-center items-center bg-white `}
                      >
                        {tag}
                      </span>
                    );
                  })}
                </div>
                <div className="flex justify-between w-full font-inter font-semibold text-xl leading-[150%] pt-5 text-custom-text-black dark:text-white ">
                  <a href={project.githubLink} target="_blank" className="flex justify-center items-center gap-1">
                    {project.github}<IoLogOutOutline size={24}/>
                  </a>
                  {project.websiteLink && (
                    <a
                      href={project.websiteLink}
                      target="_blank"
                      className="flex gap-1 items-center"
                    >
                      {project.website}
                      <svg
                        width="18"
                        height="12"
                        viewBox="0 0 18 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="transition-transform group-hover:translate-x-1"
                      >
                        <path
                          d="M1 6H17"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                        <path
                          d="M12 1L17 6L12 11"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  )}
                </div>
                <div className="absolute -bottom-11.5 left-1/2 -translate-x-1/2 w-100 sm:w-140 z-30">
                  <div className="relative w-full">
                    <img
                      src={project.imgComputer}
                      alt={project.imgComputer}
                      className="relative z-20 w-full h-auto pointer-events-none"
                    />
                    <div className="absolute top-[5.5%] left-[14%] w-[73%] h-[77%] z-10 overflow-hidden">
                      <img
                        src={project.imgProject}
                        className="w-full h-full object-fill" 
                        alt={project.title}
                        style={{ display: 'block' }} 
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Project;
