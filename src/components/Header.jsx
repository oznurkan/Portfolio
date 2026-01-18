import { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AppContext from "../contexts/AppContext";
import { fetchData } from "../store/actions/dataActions";
import { useElementOnScreen } from "../hooks/useElementOnScreen";

const Header = () => {
  const { lang, mode, handleToggleMode, handleLang } = useContext(AppContext);

  const dispatch = useDispatch();

  const { content, loading } = useSelector((state) => state.data);
  const [targetRef, isVisible] = useElementOnScreen({ threshold: 0.1 });

  useEffect(() => {
    dispatch(fetchData(lang));
  }, [lang, dispatch]);

  if (loading) return <div>{ lang === "en" ? "Loading ...": "Yükleniyor..."}</div>;
  if (!content) return null;

  const { heroSection } = content;

  return (
    <div className="relative h-screen w-full bg-custom-gray dark:bg-dark-header dark:text-white overflow-hidden">
      <div className="absolute -top-[7%] left-[25%] w-28 h-28 bg-custom-thin-gray-circle dark:bg-custom-bold-gray-circle rounded-[100%] z-1 "></div>
      <div className="absolute bottom-[16%] right-0 w-27 h-15 bg-custom-text-pink rounded-l-[100px] z-1"></div>

      <div className="absolute bottom-0 right-[20%] w-30 h-30 bg-custom-thin-gray-circle dark:bg-custom-bold-gray-circle rounded-t-[100%] translate-y-1/2 z-1 "></div>
      <div className="absolute bottom-0 right-[21.30%] w-20 h-20 bg-custom-gray dark:bg-dark-header rounded-t-[100%] translate-y-1/2 z-2 "></div>

      <div className="flex flex-col w-[78%] gap-4 my-10 mx-auto justify-around relative z-9 h-[80%] xs:gap-0 xl:gap-15 ">
        <nav className="flex items-center justify-end ml-auto max-w-90 gap-2 py-4 xs:text-sm md:aspect-[359 / 38] ">
          <div className="flex items-center gap-4">
            <div
              className={`relative w-12 h-6 rounded-full cursor-pointer overflow-hidden transition-colors duration-300 ${
                mode === "dark" ? "bg-black" : "bg-custom-pink"
              }`}
              onClick={handleToggleMode}
            >
              <div
                className={`absolute top-1 left-1 w-4 h-4 rounded-full transition-all duration-300 bg-custom-yellow ${
                  mode === "dark" ? "translate-x-0" : "translate-x-6"
                }`}
              >
                <div
                  className={`absolute w-full h-full rounded-full transition-transform duration-300 ${
                    mode === "dark"
                      ? "translate-x-1.5 -translate-y-0.5 bg-black  "
                      : "translate-x-full bg-transparent"
                  }`}
                />
              </div>
            </div>

            <span className="text-custom-text-gray font-inter font-bold min-w-22.5 uppercase leading-none">
              {mode === "dark"
                ? lang === "en"
                  ? "Dark Mode"
                  : "Gece Modu"
                : lang === "en"
                ? "Lıght Mode"
                : "Aydınlık Mod"}
            </span>
          </div>

          <div className="h-4 w-px bg-custom-text-gray"></div>

          <div className="flex items-center tracking-wider">
            <span className="whitespace-nowrap font-inter font-bold leading-1 uppercase gap-0.5 text-custom-text-gray">
              {lang === "en" ? (
                <>
                  Swıtch to{" "}
                  <span
                    onClick={() => handleLang("tr")}
                    className="text-custom-pink cursor-pointer hover:underline transition-all"
                  >
                    Turkısh
                  </span>
                </>
              ) : (
                <>
                  <span
                    onClick={() => handleLang("en")}
                    className="text-custom-pink cursor-pointer hover:underline transition-all"
                  >
                    İngilizce
                  </span>
                  'ye Geç
                </>
              )}
            </span>
          </div>
        </nav>
        <div ref={targetRef} className="flex xs:flex-wrap-reverse xs:gap-1 lg:flex-nowrap lg:gap-27">
          <div className="flex flex-col gap-5 text-custom-text-black dark:text-white">
            <div className="font-inter font-normal inline-flex text-3xl ">
              {heroSection.greeting} 👋
            </div>
            <div className="font-inter font-medium leading-16 text-[42px]">
              <span className={`hero-highlight ${isVisible ? 'active' : ''}`}>{heroSection.intro}</span>
            </div>
            <div className="flex gap-4">
            {heroSection.socials.map((social) => {
              return (
                <a
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={social.id}
                  className="inline-block"
                >
                  <img
                    className={`${ mode === "dark" ? "invert-85" : "invert-5"} w-6 h-6 object-contain text-custom-text-black dark:text-amber-300`}
                    src={social.logo}
                    alt={social.altText}
                  />
                </a>
              );
            })}
            </div>
            <div className="text-lg xs:hidden sm:block">
              {heroSection?.ctaHtml}{" "}
              <span className="text-custom-pink">{heroSection?.status}</span>{" "}
              {heroSection?.ctaHtml_2}{" "}
              <span className="text-custom-pink">{heroSection?.fields}</span>{" "}
              {heroSection?.ctaHtml_3}{" "}
              <br /> {heroSection?.callToAction} &rarr;
              <a
                href={`mailto:${heroSection.ctaEmailLink}`}
                className="text-custom-pink ml-2 underline hover:text-custom-yellow transition-colors"
              >
                {heroSection?.ctaEmailLink}
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative bg-custom-pink border-2 border-custom-pink rounded-4xl xs:hidden sm:flex  sm:translate-y-10 sm:translate-x-49 sm:w-20 sm:h-20 lg:translate-0 lg:w-85.25 lg:h-85.25 ">
              <img
                src={heroSection.profileImage}
                alt={heroSection.profileImage}
                className="absolute rounded-4xl object-cover shadow-2xl z-10 xs:hidden sm:flex  sm:w-20 sm:h-20 sm:top-2 sm:left-2 lg:w-85.25 lg:h-85.25 lg:top-5 lg:left-5"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
