const genreMapper = {
    28: 'Ação',
    16: 'Animação',
    12: 'Aventura',
    35: 'Comédia',
    80: 'Crime',
    99: 'Documentário',
    18: 'Drama',
    10751: 'Família',
    14: 'Fantasia',
    36: 'História',
    27: 'Terror',
    10402: 'Música',
    9648: 'Mistério',
    10749: 'Romance',
    878: 'Ficção científica',
    53: 'Thriller',
    10770: 'War',
    37: 'Faroeste',
};


export function GenresMovie(genre_ids) {
    if (typeof genre_ids[0] === 'number') return genre_ids.map(id => genreMapper[id]);
    return genre_ids.map(id => genreMapper[id.id]);
}