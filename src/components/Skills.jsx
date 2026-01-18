import { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AppContext from "../contexts/AppContext";
import { fetchData } from "../store/actions/dataActions";

const Skills = () => {
  const { lang } = useContext(AppContext);

  const dispatch = useDispatch();

  const { content, loading } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(fetchData(lang));
  }, [lang, dispatch]);

  if (loading) return <div>{ lang === "en" ? "Loading ...": "Yükleniyor..."}</div>;
  if (!content) return null;

  const { skillsSection } = content;
  return (
    <div className="w-full relative dark:bg-dark-skills overflow-hidden ">
      <div className="absolute top-0 right-[20%] w-30 h-30 bg-custom-thin-gray-circle dark:bg-custom-bold-gray-circle rounded-b-[100%] -translate-y-1/2 z-1"></div>
      <div className="absolute top-0 right-[21.30%] w-20 h-20 bg-white dark:bg-dark-skills rounded-b-[100%] -translate-y-1/2 z-2 "></div>
      <div className="absolute bottom-[11%] left-0 w-24 h-12 bg-custom-bold-gray-circle  rounded-r-[100px] z-1 "></div>

      <div className="absolute right-0 bottom-0 w-31 h-31 bg-custom-text-pink rounded-full translate-x-[35%] translate-y-[78%] z-1"></div>

      <div className="absolute right-0 bottom-0 w-22 h-22 bg-white dark:bg-dark-skills rounded-full translate-x-[33%] translate-y-[90%] z-2"></div>

      <div className="flex flex-col w-[77%] mx-auto py-35 items-center gap-15 text-custom-text-black font-inter font-medium relative z-4 xs:py-35 2xl:py-40 ">
        <h1 className="flex font-inter font-medium leading-[100%] text-custom-text-black dark:text-custom-gray xs:text-5xl">
          {skillsSection.title}
        </h1>
        <div className="flex gap-9 flex-wrap items-center justify-center">
          {skillsSection.skills.map((skill) => {
            return (
              <div key={skill.id} className="flex flex-col items-center gap-5">
                <div className="flex w-30 h-30 rounded-md ">
                  <img src={skill.icon} alt={skill.name} />
                </div>
                <p className="leading-[150%] uppercase text-custom-text-gray dark:text-custom-thin-gray-circle xs:text-2xl">
                  {skill.name}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
