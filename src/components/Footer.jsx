import { useSelector } from "react-redux";
import AppContext from "../contexts/AppContext";
import { useElementOnScreen } from "../hooks/useElementOnScreen";

const Footer = () => {
  const { content} = useSelector((state) => state.data);

  const [targetRef, isVisible] = useElementOnScreen({ threshold: 0.1 });

  if (!content) return null;

  const { footerSection } = content;

    return(
        <footer ref={targetRef} className="w-full bg-white dark:bg-dark-skills">
            <div className="flex flex-col sm:flex-row w-full justify-center items-center sm:items-end mx-auto pt-20 pb-50 gap-15 xs:flex-col xs:items-center lg:flex-row">
                <div className="flex justify-end text-end font-inter font-medium text-[42px] leading-[150%] text-custom-text-black dark:text-white xs:text-center lg:text-end lg:flex-none xl:flex-5 "><span className={`footer-highlight ${isVisible ? 'active' : ''}`}>{footerSection.text} <br/> {footerSection.text_2}</span></div>
                <div className="flex flex-col sm:flex-row items-start font-inter font-medium text-2xl leading-[150%] capitalize xs:flex-row xs:gap-9 lg:flex-none lg:gap-1 xl:flex-3 lg:flex-col">
                    <a href={footerSection.githubLink} target="_blank" className="text-custom-github">{footerSection.github}</a>
                    <a href={footerSection.personalLink} target="_blank" className="text-custom-text-black dark:text-white">{footerSection.personal}</a>
                    <a href={footerSection.linkedinLink} target="_blank" className="text-custom-linkedin">{footerSection.linkedin}</a>
                    <a href={`mailto:${footerSection.emailLink}`} target="_blank" className="text-custom-email">{footerSection.email}</a>
                </div>
            </div>

        </footer>
    )

}

export default Footer;