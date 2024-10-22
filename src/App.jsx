import Header from './components/header/header.component';
import About from './pages/about.page';
import Testimonial from './pages/testimonial.page';
import Banner from './pages/banner.page';
import GoodBye from './pages/goodBye.page';
import Footer from './pages/footer.page';
import Skill from './pages/skill.page';
import Experience from './pages/experience.page';


export default function App() {
  return (
    <div >
      <div className="relative">
        <div className="absolute w-full top-0 left-0 z-50">
          <Header />
        </div>
        <div className="w-full">
          <Banner/>
          <About />
          <Skill />
          <Experience />
          <Testimonial />
          <GoodBye />
          <Footer />
        </div>
      </div>
    </div>
  )
}