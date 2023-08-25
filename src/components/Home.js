import Header from "./Header"
import CustomNavbar from "./Navbar";
import Slider from "./Slider";
import MainContent from "./MainContent";
import Footer from "./Footer";
function Home() {
  return (
    <div>
      <Header></Header>
      <CustomNavbar></CustomNavbar>
      <Slider></Slider>
      <MainContent></MainContent>
      <Footer></Footer>
    </div>
  );
}

export default Home;
