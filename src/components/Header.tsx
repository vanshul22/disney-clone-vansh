import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ThemeToggler from './ThemeToggler';
import SearchInput from './SearchInput';
import GenreDropdown from './GenreDropdown';

type Props = {}

const Header = (props: Props) => {
    return (
        <header className='fixed top-0 w-full z-20 flex justify-between items-center p-5 bg-gradient-to-t from-gray-200/0 via-gray-900/25 to-gray-900'>
            <Link href="/" className='mr-10'>
                <Image height={100} width={120} src="https://links.papareact.com/a943ae" alt='Logo' className='cursor-pointer dark:invert' />
            </Link>
            <div className="flex space-x-2 items-center justify-center">
                <GenreDropdown />
                <SearchInput />
                <ThemeToggler />
            </div>
        </header>
    )
}

export default Header;