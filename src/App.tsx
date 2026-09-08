import './App.css'

import Layout from './components/Layout';

import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import Listings from './components/Listings';

function App() {
  return (
    <>
      <Layout>
        <Hero/>
        <About/>
        <Services/>
        <Listings/>
        <Gallery/>
        <Contact/>

      </Layout>
    </>
  )
}

export default App
