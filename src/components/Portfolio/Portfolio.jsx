
import css from './portfolio.module.css'

const Portfolio = () => {
  return (
    <div className={css.portfolioContainer}>
      <h2>WORK IN PROGRESS</h2>
      <h1>My Projects</h1>
      <h2>Solo Projects</h2>

      <div className={css.portfolioList}>
        <div className={css.portfolioListEl}>
          <a href='https://jakubpiksa.github.io/goit-react-hw-05-movies/'><h3>Movie Finder</h3>  A web application to search for movies and view details about them.</a> 
        </div>
        <div className={css.portfolioListEl}>
          <a href='https://jakubpiksa.github.io/goit-react-hw-06-phonebook/'><h3>Phonebook</h3> A simple phonebook application to manage contacts.</a> 
        </div>
        <div className={css.portfolioListEl}>
          <a href='https://jakubpiksa.github.io/goit-react-hw-04-imagesTest/'><h3>Image Finder</h3>  An application to search for images using an API.</a> 
        </div>
        <div className={css.portfolioListEl}>
          <a href='https://jakubpiksa.github.io/goit-react-hw-02-feedback2/'><h3>Feedback Widget</h3>  A widget for collecting user feedback.</a>
        </div>
        <div className={css.portfolioListEl}>
          <a href='https://jakubpiksa.github.io/goit-react-hw-01-components/'><h3>Component Little Projects</h3>  A collection of small projects demonstrating the usage of components and JSON data. </a> 
        </div>
        <div className={css.portfolioListEl}>
          <a href='https://jakubpiksa.github.io/goit-markup-hw-08/'><h3>Responsive HTML Page</h3>  My first serious project, a responsive HTML page.</a>
        </div>
      </div>
        
      <h2>Team Projects</h2>
      
      <div className={css.portfolioList}>
        <div className={css.portfolioListEl}>
          <a href='https://kamild90.github.io/projekt-grupa-3/'><h3>My First Team Project</h3>  A collaborative project with a team to create a web application. </a>
        </div>
        <div className={css.portfolioListEl}>
          <a href='https://jarek-dzwolak.github.io/FILM_SEARCH_PROJECT-Group-ProjectJS/'><h3>Movie Library</h3>  A complex movie finder project created as a team, unfortunately, it's not functional anymore. </a> 
        </div>
        <div className={css.portfolioListEl}>
          <a href='https://www.youtube.com/watch?v=HxkmXnRQblE'><h3>Upcoming Node.js Project</h3>  An upcoming Node.js project starting in October.</a> 
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
