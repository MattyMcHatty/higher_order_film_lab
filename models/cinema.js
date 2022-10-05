const Cinema = function (films) {
  this.films = films;

};


Cinema.prototype.filmTitles = function(){
  return result = this.films.map((film)=>{ return film.title})
}

Cinema.prototype.findFilmByTitle = function(film_title){
  return result = this.films.find((film)=>{return film_title === film.title})

}

// Cinema.prototype.filmsByGenre = function(genre){
//   return result = this.films.filter((film)=>{return genre === film.genre})
// }

Cinema.prototype.filmsFromYear = function(year){
  return result = this.films.some((film)=>{return year === film.year})
}

Cinema.prototype.allFilmsOverLength = function(length){
  return result = this.films.every((film)=>{return length < film.length})
}

Cinema.prototype.totalRunningTime = function(){
  return this.films.reduce((total, film)=>{
    return total + film.length
  }, 0) 
}

Cinema.prototype.filmsByProperty = function(property, value){
  return result = this.films.filter((film)=>{return film[property] === value})
}


module.exports = Cinema;
