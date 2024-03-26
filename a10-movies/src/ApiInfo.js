export const APIAccessToken = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNWU5ZDllMGU1NmZiNWU3NThlNDdmYWZkOTdiNmM2ZiIsInN1YiI6IjY1NjYwMmUzNmMwYjM2MDBlNGRiYzQ2NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YX6hYgkuzF5tWmexeSHHIGsTAZKgkenbn620fCiH-VI";

export const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer '+ APIAccessToken
    }
  };

  export const ImageUrl ="https://image.tmdb.org/t/p/original/";