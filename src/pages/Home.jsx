import { AnimesGrid } from "../components/home/AnimesGrid"
import { Banner } from "../components/home/Banner"
import { EpisodiesGrid } from "../components/home/EpisodiesGrid"
import { Slider } from '../components/home/Slider'

export const Home = () => {
  
  return (
    <div className="">

      <Slider />

      <EpisodiesGrid title="Últimos Episodios" />

      <Banner />

      <AnimesGrid title="Últimos animes" />

    </div>
  )
}