import MoviesCarousals from '@/components/MoviesCarousals';
import { getPopularMovies, getSearchedMovies } from '@/lib/getMovies';
import { notFound } from 'next/navigation';
import React from 'react';

type Props = {
    params: { term: string };
}

async function SearchPage({ params: { term } }: Props) {
    // If nothing is there then return with 404 page.
    if (!term) notFound();

    const termToUse = decodeURI(term);

    // API calls to get the Searched movies.
    const movies = await getSearchedMovies(termToUse);
    // API calls to get the Popular movies.
    const popularMovies = await getPopularMovies();


    return (
        <div className='max-w-7xl mx-auto'>
            <div className="flex flex-col space-y-5 mt-32 xl:mt-42">
                <h1 className='text-6xl font-bold px-10'>Results for {termToUse}</h1>
                <MoviesCarousals title='Movies' movies={movies} isVertical />
                <MoviesCarousals title='You May also like' movies={popularMovies} />
            </div>
        </div>
    )
}

export default SearchPage;