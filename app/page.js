import Advange from "./Components/Advange"
import CopyRight from "./Components/CopyRight"
import Footer from "./Components/Footer"
import Header from "./Components/Header/Header"
import Hero from "./Components/Hero"
import MainLayout from "./Components/MainLayout"
import OurServices from "./Components/OurServices"
import Power from "./Components/Power"
import Stats from "./Components/Stats"

const page = () => {
  return (
    <MainLayout>
    <Hero/>
    <br/>
    <br/>
    <OurServices/>
    <Advange/>
    <Stats/>
    <Power/>
    </MainLayout>
  )
}
export default page