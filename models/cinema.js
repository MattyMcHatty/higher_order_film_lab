const Cinema = function (films) {
  this.films = films;

};


Cinema.prototype.filmTitles = function(){
  return result = this.films.map((film)=>{ return film.title})
}

Cinema.prototype.findFilmByTitle = function(film_title){
  return result = this.films.filter((film)=>{return film_title == film.title})
}
module.exports = Cinema;
