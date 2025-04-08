import AnimatedText from "../components/AnimatedText";
import Image from "../images/about-img.png";
import "../styles/about.css";

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="headline">
          <AnimatedText text="About" />
        </div>
        <div className="row ">
          <div className="col col-12 col-lg-6 p-4 about-image-container">
            <img
              src={Image}
              alt="Image of 13th Desiple standing"
              className="about-img fade-bottom"
            />
          </div>
          <div className="col col-12 col-lg-6 p-4 about-text-container">
            <p className="about-text">
              Raised on the Eastside of Atlanta, Georgia; Plain James grew up
              listening to Hip Hop arists such as Outkast, UGK, T.I. and Jeezy
              just to name a few. Those artists along with the urban environment
              in which he lived had a major influence on the music that he made
              himself. After moving to Carrollton, Ga he was locally successful
              with his music and began to get a good buzz, but one day he
              stopped and analyzed the life he was living and realized something
              was missing. He soon found out that what he was missing was a
              genuine relationship with Jesus Christ. From that point on he gave
              up his music and began to place his attention on seeking God.
              After about a year he realized that he still had a love for music
              and with the help of his good friend William "Young Noah" Bohannon
              he began to rap for the Lord. Now seeking to help lead lost souls
              to Christ and help motivate struggling Christians in their walk,
              James is back working at his craft and going as far as the Holy
              Spirit will lead him with his method of "Trap Theology".
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
