import { Header, Hero, Main, Contact, Footer } from "./components/index";
import { useEffect, useState } from "react";

function App() {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setshowScrollBTN(true);
      } else {
        setshowScrollBTN(false);
      }
    });
  }, []);

  const [showScrollBTN, setshowScrollBTN] = useState(false);
  return (
    <div id="up" className="container">
      <Header />

      <Hero />
      <div className="divider" />
      <Main />
      <div className="divider" />
      <Contact />
      <div className="divider" />
      <Footer />
      <a
        style={{ opacity: showScrollBTN ? 1 : 0, transition: "1s" }}
        href="#up"
      >
        <button className="icon-keyboard_arrow_up scroll2Top"></button>
      </a>
    </div>
  );
}

export default App;
