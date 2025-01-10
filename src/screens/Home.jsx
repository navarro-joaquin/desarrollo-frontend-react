// import Logo from "../Components/Home/Logo.jsx";
// import GitHub from "../Components/Home/Github.jsx";
import { useSelector } from "react-redux";

import OpenLink from "../Components/Core/OpenLink.jsx";
import Body from "../Components/Home/Body.jsx";
import Footer from "../Components/Home/Footer.jsx";

import ViteLogo from "../assets/vite.svg";
import ReactLogo from "../assets/react.svg";
import GithubLogo from "../assets/github.svg";

const Home = () => {
  const count = useSelector((state) => state.counter.value)
  return (
    <div>
      <p>{`Count value: ${count}`}</p>
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