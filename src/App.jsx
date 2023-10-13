import Home from './pages/home/Home'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Gallery from './pages/gallery/Gallery'
import Plans from './pages/plans/Plans'
import NotFound from './pages/notFound/NotFound'
import Trainers from './pages/trainers/Trainers'

const App = () => {
  return (
    <div>
      <Home/>
      <About/>
      <Contact/>
      <Gallery/>
      <Plans/>
      <Trainers/>
      <NotFound/>
    </div>
  )
}

export default App