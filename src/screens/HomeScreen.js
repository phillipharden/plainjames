import HeroImage from "../images/hero-img.png";
import Videos from "../sections/Videos";
import Music from "../sections/Music";
import VideoCarousel from "../components/VideoCarousel";
import "../styles/homescreen.css";
import About from "../sections/About";
import Video from "../images/marta.mp4";

const HomeScreen = () => {
  return (
    <div>
      <section id="home" className="hero-section d-flex justify-content-center">
        <video autoPlay loop muted className="background-video">
          <source src={Video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="overlay"></div>
        <div className="content">
          <img
            src={HeroImage}
            atl="Plain James"
            className="hero-img fade-bottom rise-image"
          />
        </div>
      </section>

      <Videos />

      <Music />
      <About />
    </div>
  );
}

export default HomeScreen