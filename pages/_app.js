import "../styles/globals.scss";
import { gsap } from "gsap";
import { CSSPlugin } from "gsap/CSSPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(CSSPlugin);
gsap.registerPlugin(ScrollTrigger);

// import Header from "components/Header/Header";
// import Footer from "components/Footer/Footer";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
