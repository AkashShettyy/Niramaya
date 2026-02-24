import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import WhyChoose from "../components/WhyChoose"
import Services from "../components/Services"
import Testimonials from "../components/Testimonials"
import Doctor from "../components/Doctor"
import Footer from "../components/Footer"

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <WhyChoose />
      <Services />
      <Testimonials />
      <Doctor/>
      <Footer/>
    </div>
  )
}

export default Home
