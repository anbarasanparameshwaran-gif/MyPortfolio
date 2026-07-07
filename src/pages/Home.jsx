import Hero from '../components/Hero.jsx'
import About from '../components/About.jsx'
import Experience from '../components/Experience.jsx'
import Skills from '../components/Skills.jsx'
import Projects from '../components/Projects.jsx'
import Contact from '../components/Contact.jsx'

function Home() {
    return (
        <>
            <Hero />
            <About />
            <Experience />
            <Skills />
            {/* <Projects /> */}
            <Contact />
        </>
    )
}

export default Home
