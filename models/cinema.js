const Cinema = function (films) {
  this.films = films;

};


Cinema.prototype.filmTitles = function(){
  return result = this.films.map((film)=>{ return film.title})
}

Cinema.prototype.findFilmByTitle = function(film_title){
  return result = this.films.filter((film)=>{return film_title == film.title})

}

Cinema.prototype.filmsByGenre = function(genre){
  return result = this.films.filter((film)=>{return genre == film.genre})
}

Cinema.prototype.filmsFromYear = function(year){
  return result = this.films.some((film)=>{return year == film.year})
}



module.exports = Cinema;
