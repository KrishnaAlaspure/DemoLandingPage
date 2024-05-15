import FeatureSection from "./components/FeatureSection"
import Footer from "./components/Footer"
import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
import Pricing from "./components/Pricing"
import Textimonial from "./components/Textimonial"
import WorkFlow from "./components/WorkFlow"

export default function App() {
  return (
   <>
   <Navbar></Navbar>
   <div className="max-w-7xl mx-auto pt-20 px-6">
    <HeroSection/>
    <FeatureSection/>
    <WorkFlow/>
    <Pricing/>
    <Textimonial/>
    <Footer/>
   </div>
   </>
  )
}