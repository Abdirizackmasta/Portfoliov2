import Footer from "./components/Footer/Footer";
import MyExpertise from "./components/MyExpertise/MyExpertise";
import People from "./components/People/People";
import Portfolio from "./components/Portfolio/portfolio";
import Works from "./components/Works/Works";
// import Expertise from "./components/expertise/expertise";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import css from "./styles/app.module.scss";

const App = () => {
  return (
    <div className={`bg-primary ${css.container}`}>
      <Header />
      <Hero />
      <MyExpertise />
      <Works />
      <Portfolio />
      <People />
      <Footer />
    </div>
  );
};

export default App;
