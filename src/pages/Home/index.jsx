import { About } from "../../components/About";
import { Banner } from "../../components/Banner";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Hero } from "../../components/Hero";
import { Prices } from "../../components/Prices";
import '../../styles/global.css'

export function Home () {
    return (
        <div className="home">
            <Header />
            <Hero />
            <About />
            <Banner />
            <Prices />
            <Footer />
        </div>
    )
}