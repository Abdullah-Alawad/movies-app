import React from 'react';
import { ImageUrl, options } from '@/ApiInfo';
import Link from 'next/link';
import Navbar from '@/components/Navbar';


  const MovieList = ({ movies }) => {
       
    return (
      <div className='bg-gradient-to-r from-teal-950 to-yellow-600'>
        <Navbar />
        <ul className="flex flex-wrap justify-center font-custom">
          {movies.map((movie) => (
            <li key={movie.id} className="w-1/4 p-4">
              <Link href={`/movies/${movie.id}`}>
                <div className="min-h-[565px] bg-stone-200 border rounded-lg shadow-md mb-4 mt-6 mx-2 p-4 transition ease-in-out delay-80 hover:-translate-y-1 hover:scale-110 duration-300">
                  <img
                    src={`${ImageUrl}${movie.poster_path}`}
                    alt={movie.title}
                    className=" w-full max-h-[500px] object-cover rounded-xl "
                  />
                  <div className="mt-4">
                    <h2 className="text-lg font-bold">{movie.title.length>36 ? movie.title.slice(0, 36): movie.title} ({movie.release_date.substring(0,4)})</h2>
                    <p className="text-gray-500">{movie.overview.length > 100 ? movie.overview.slice(0, 100)+'...': movie.overview}</p>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  
  export async function getServerSideProps(context) {
    const { query } = context;
    const movieCategory = query.MovieCategory || "popular";
  
    let apiUrl;
      apiUrl = `https://api.themoviedb.org/3/movie/${movieCategory}?language=en-US&page=3`;
  
    const response = await fetch(apiUrl, options);
    const data = await response.json();
  
    return {
      props: {
        movies: data.results || []
      },
    };
  }

  export default MovieList;