import { useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import AppContext from "../contexts/AppContext";
import { fetchData } from "../store/actions/dataActions";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Profile from "../components/Profile";
import Project from "../components/Project";
import Skills from "../components/Skills";

const HomePage = () => {
  const { lang } = useContext(AppContext);
  const dispatch = useDispatch();
  const { content, loading } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(fetchData(lang));
  }, [lang, dispatch]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen text-gray-500 font-medium">
        {lang === "en" ? "Loading resume..." : "Özgeçmiş yükleniyor..."}
      </div>
    );
  }

  if (!content) return null;


  return (
    <>
      <Header/>
      <Skills/>
      <Profile/>
      <Project/>
      <Footer/>
    </>
  );
};

export default HomePage;