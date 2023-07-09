import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h1>Here's what i do </h1>
              <ul>
                <p>Frontend Development:</p>
                <li>
                  Proficient in React.js, JavaScript, HTML, CSS, Next.js,
                  TypeScript, and Tailwind CSS.
                </li>
                <li>
                  Extensive experience in developing dynamic and responsive user
                  interfaces.
                </li>
                <li>
                  Strong focus on writing clean and modular code to ensure
                  maintainability and scalability.
                </li>
              </ul>
              <ul>
                <p>UI/UX Design:</p>
                <li>
                  {" "}
                  Skilled in creating visually appealing and user-friendly
                  interfaces.
                </li>
                <li>
                  {" "}
                  Knowledgeable in user-centered design principles and best
                  practices.
                </li>
                <li>
                  {" "}
                  Ability to translate complex concepts into intuitive designs
                  that enhance user experience.
                </li>
              </ul>
              <ul>
                <p>Web3 and Blockchain:</p>
                <li>
                  {" "}
                  Currently exploring Web3 technology and blockchain
                  development.
                </li>
                <li>
                  Experience working on blockchain-based projects in
                  collaboration with friends.
                </li>
                <li>
                  Familiarity with the principles of decentralized applications
                  (dApps) and smart contracts.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
