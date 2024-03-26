import { options ,ImageUrl} from '@/ApiInfo';
import Link from 'next/link';



const ActorsList = ({actors}) => {
    
    return (
      <div className='bg-gradient-to-r from-yellow-600 to-teal-950'>
      <div className="container mx-auto w-3/4 ">
      <ul className="flex flex-wrap justify-center">
        {actors.map((actor) => (
          <li key={actor.id} className="w-1/4 p-4 mt-5 mb-2 transition ease-in-out delay-80 hover:-translate-y-1 hover:scale-110 duration-300">
          <Link href={`/actors/${actor.id}`}>
             <div className="bg-stone-200 border rounded-lg shadow-md p-3">
              {(!!actor.profile_path) && <img
                src={`${ImageUrl}${actor.profile_path}`}
                alt={actor.name}
                className="w-full h-auto object-cover rounded-xl"
              />}
              <div className="mt-4">
                <h2 className="text-lg font-bold">{actor.name}</h2>
              </div>
            </div>
            </Link> 
          </li>
        ))}
      </ul>

      </div>
      </div>
    );
  };
  
  export async function getServerSideProps({query}){
    let currentPage = query.page || 1;

    const actorsResponse = await fetch(
      `https://api.themoviedb.org/3/person/popular?language=en-US&page=${currentPage}`,
       options
      );
    const data = await actorsResponse.json();

    const actors = data.results;
    
    return {
      props: {actors},
    }
  }

  export default ActorsList;