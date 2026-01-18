import { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AppContext from "../contexts/AppContext";
import { fetchData } from "../store/actions/dataActions";
import { useElementOnScreen } from "../hooks/useElementOnScreen";

const Profile = () => {
  const { lang } = useContext(AppContext);

  const dispatch = useDispatch();

  const { content, loading } = useSelector((state) => state.data);
  const [targetRef, isVisible] = useElementOnScreen({ threshold: 0.1 });

  useEffect(() => {
    dispatch(fetchData(lang));
  }, [lang, dispatch]);

  if (loading)
    return <div>{lang === "en" ? "Loading ..." : "Yükleniyor..."}</div>;
  if (!content) return null;

  const { profileSection } = content;

  return (
    <div className="w-full relative overflow-hidden bg-custom-gray dark:bg-dark-profile">
      <div className="absolute right-0 top-0 w-30 h-30 bg-custom-text-pink rounded-l-[100%] rounded-b-[100%]  translate-x-[35%] -translate-y-[24%] z-1 2xl:w-36 2xl:h-36"></div>
      <div className="absolute right-0 top-0 w-21 h-21 bg-custom-gray dark:bg-dark-profile rounded-l-[100%] rounded-b-[100%]  translate-x-[35%] -translate-y-[14%]   z-2"></div>
      <div
        ref={targetRef}
        className="flex flex-col mx-auto py-35 items-center gap-15 text-custom-text-black font-inter font-medium relative"
      >
        <h1 className="flex font-inter font-medium leading-[100%] text-custom-text-black dark:text-custom-gray text-4xl 2xl:text-6xl">
          {profileSection.title}
        </h1>
        <div className="flex gap-18 items-center justify-center flex-wrap xs:w-[84%] xl:w-[63%]">
          <div className="relative lg:flex-1">
            <div className="absolute top-2 left-2 w-full h-full bg-custom-bold-gray-circle/50 dark:bg-dark-profile-card border-none rounded-xl z-0"></div>
            <div className="relative w-full h-full bg-white dark:bg-custom-bold-gray-circle border-2 border-none rounded-xl z-10 pl-9 pr-7 pt-3">
              <div className="flex flex-col py-12 gap-8">
                <h2 className="font-playfair font-normal text-2xl leading-[100%] text-custom-text-pink 2xl:text-3xl">
                  {profileSection.subtitle}
                </h2>
                {profileSection.technicalInformation.map((item) => {
                  return (
                    <div
                      key={item.id}
                      className="flex gap-x-8 gap-y-7 font-inter text-lg leading-[100%] text-custom-text-black dark:text-white 2xl:text-xl"
                    >
                      <h3 className="font-semibold flex-2">{item.name}</h3>
                      <p className="font-normal flex-3 2xl:leading-7">
                        {item.text}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6 items-start mb-auto pt-11 lg:flex-1">
            <h2 className="font-playfair text-2xl font-normal leading-[100%] text-custom-text-black dark:text-white 2xl:text-3xl">
              <span
                className={`aboutme-highlighter ${isVisible ? "active" : ""}`}
              >
                {profileSection.personalInformation.title}
              </span>
            </h2>
            <p className="font-inter font-normal text-lg leading-[150%] text-custom-text-black dark:text-white 2xl:text-xl 2xl:leading-8">
              {profileSection?.personalInformation?.text}{" "}
              <strong className="dark:text-custom-pink">
                {profileSection?.personalInformation?.fields}
              </strong>{" "}
              {profileSection?.personalInformation?.text_2}{" "}
              <strong className="dark:text-custom-pink">
                {profileSection.personalInformation?.fields_2}
              </strong>{" "}
              {profileSection?.personalInformation?.text_3}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
