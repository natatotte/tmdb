import { useMovies } from 'contexts/MoviesContext'
import { useState } from 'react'
import * as S from './styles'

export function Filters() {
  const { genres, movies, setSelectedGenre } = useMovies()

  // const handleClick = () => {
  //   const selectedGenre = movies?.results?.map((movie) => movie.genre_ids)
  //   localStorage.setItem('selectedGenre', selectedGenre.toString())
  //   setSelectedGenres(selectedGenre)
  // }

  return (
    <S.Container>
      <S.Content>
        <S.Title>
          Milhões de filmes, séries e pessoas para descobrir. Explore já.
        </S.Title>
      </S.Content>

      <S.FilterContainer>
        <S.FilterBy>
          <S.FilterByText>FILTRE POR:</S.FilterByText>
        </S.FilterBy>

        <S.ButtonContainer>
          {genres?.map((genre) => (
            <div key={genre.id}>
              <S.Button onClick={() => setSelectedGenre(genre.id)}>
                {genre.name}
              </S.Button>
            </div>
          ))}
        </S.ButtonContainer>
      </S.FilterContainer>
    </S.Container>
  )
}
