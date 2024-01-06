import MoviesCarousals from '@/components/MoviesCarousals';
import { getDiscoverMovies } from '@/lib/getMovies';
import React from 'react'

type Props = {
    params: { id: string };
    searchParams: { genre: string };
}



const Genrepage = async ({ params: { id }, searchParams: { genre } }: Props) => {

    // API calls to get the Discover movies.
    const movies = await getDiscoverMovies(id);



    return (
        <div className="max-w-7xl mx-auto">
            <div className="flex flex-col space-y-5 mt-32 xl:mt-42">
                <h1 className="text-6xl font-bold px-10">Results for {genre}</h1>

                {/* <AIAzureSuggestion term={genre} /> */}
                {/* <AISuggestion term={genre} /> */}
                <MoviesCarousals title={`Genre`} movies={movies} isVertical />
            </div>
        </div>
    )
}

export default Genrepage;