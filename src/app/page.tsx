import CarouselBannerWrapper from "@/components/CarouselBannerWrapper";
import MoviesCarousals from "@/components/MoviesCarousals";
import { getPopularMovies, getTopRatedMovies, getUpcomingMovies } from "@/lib/getMovies";

export default async function Home() {

  const upcomingMovies = await getUpcomingMovies();
  const topRatedMovies = await getTopRatedMovies();
  const popularMovies = await getPopularMovies();

  return (
    <main>
      <CarouselBannerWrapper />

      <div className="flex flex-col space-y-2 xl:-mt-48">
        <MoviesCarousals movies={upcomingMovies} title="Upcoming" />
        <MoviesCarousals movies={topRatedMovies} title="Top Rated" />
        <MoviesCarousals movies={popularMovies} title="Popular" />
      </div>
    </main>
  )
}