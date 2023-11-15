import NavBar from "./components/NavBar";
import BackgroundImage from "./components/BackgroundImage";
import Popular from "./components/Popular";
import Explore from "./components/Explore";
import Footer from "./components/Footer";

export function Home(){
    return(
      <div>
      <BackgroundImage/>
      <br></br>
      <Popular/>
      <br></br>
      <Explore/>
      <br></br>
      <Footer/>
      </div>
    )
}