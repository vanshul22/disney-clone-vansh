import React from 'react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ChevronDownIcon } from "@radix-ui/react-icons"
import Link from 'next/link';

type Props = {}

const url = "https://api.themoviedb.org/3/genre/movie/list?language=en";
const options: RequestInit = {
    method: "GET",
    headers: { accept: "application/json", Authorization: `Bearer ${process.env.TMDB_API_KEY}` },
    next: { revalidate: 60 * 60 * 24 }, // 24 hours
};

const GenreDropdown = async (props: Props) => {

    const response = await fetch(url, options);
    const data: Genres = await response.json();

    return (
        <div>

            <DropdownMenu>
                <DropdownMenuTrigger className='flex justify-center items-center text-white gap-3'>Genre<ChevronDownIcon /> </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel>Select a Genre</DropdownMenuLabel>
                    <DropdownMenuSeparator />

                    {data.genres.map(genre => <DropdownMenuItem key={genre.id}><Link href={`/genre/${genre.id}?genre=${genre.name}`}>{genre.name}</Link></DropdownMenuItem>)}

                </DropdownMenuContent>
            </DropdownMenu>

        </div>
    )
}

export default GenreDropdown;