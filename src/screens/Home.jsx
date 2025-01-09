// import Logo from "../Components/Home/Logo.jsx";
// import Github from "../Components/Home/Github.jsx";
import OpenLink from "../Components/Core/OpenLink.jsx";
import Body from "../Components/Home/Body.jsx";
import Footer from "../Components/Home/Footer.jsx";

import ViteLogo from "../assets/vite.svg";
import ReactLogo from "../assets/react.svg";
import GithubLogo from "../assets/github.svg";

const Home = () => {
  return (
    <div>
      <div>
        <OpenLink
          redirectURL={"https://vite.dev"}
          logoImage={ViteLogo}
          altValue={"Vite"}
        />
        <OpenLink
          redirectURL={"https://react.dev"}
          logoImage={ReactLogo}
          altValue={"React"}
        />
        <OpenLink
          redirectURL={"https://github.com/navarro-joaquin/desarrollo-frontend-react"}
          logoImage={GithubLogo}
          altValue={"Github"}
        />
      </div>
      <Body />
      <Footer />
    </div>
  )
}

export default Home;