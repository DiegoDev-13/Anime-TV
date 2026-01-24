import { AnimesGrid } from "../components/home/AnimesGrid"
import { EpisodiesGrid } from "../components/home/EpisodiesGrid"

export const Home = () => {
  return (
    <div className="">

        <EpisodiesGrid title="Últimos Episodios" />

        <AnimesGrid title="Ultimos Animes" />

    </div>
  )
}