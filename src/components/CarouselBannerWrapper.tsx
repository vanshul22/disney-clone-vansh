import { getDiscoverMovies } from '@/lib/getMovies';
import React from 'react';
import CarouselBanner from './CarouselBanner';

type Props = {
    id?: string;
    keywords?: string;
};

const CarouselBannerWrapper = async ({ id, keywords }: Props) => {
    const movies = await getDiscoverMovies(id, keywords);

    return <CarouselBanner movies={movies} />;
}

export default CarouselBannerWrapper;