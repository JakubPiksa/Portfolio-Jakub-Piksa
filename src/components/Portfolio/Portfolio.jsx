
import css from './portfolio.module.css'

const Portfolio = () => {
  return (
    <div className={css.portfolioContainer}>
      <h2>WORK IN PROGRESS</h2>
        <h1>My Projects</h1>
      <div className={css.portfolioList}>
        <h2>Solo Projects</h2>
        <div className={css.portfolioListEl}>
          <a href='https://jakubpiksa.github.io/goit-react-hw-05-movies/'>Movie Finder - A web application to search for movies and view details about them.</a> 
        </div>
        <div className={css.portfolioListEl}>
          <a href='https://jakubpiksa.github.io/goit-react-hw-06-phonebook/'>Phonebook - A simple phonebook application to manage contacts.</a> 
        </div>
        <div className={css.portfolioListEl}>
          <a href='https://jakubpiksa.github.io/goit-react-hw-04-imagesTest/'>Image Finder - An application to search for images using an API.</a> 
        </div>
        <div className={css.portfolioListEl}>
          <a href='https://jakubpiksa.github.io/goit-react-hw-02-feedback2/'>Feedback Widget - A widget for collecting user feedback.</a>
        </div>
        <div className={css.portfolioListEl}>
          <a href='https://jakubpiksa.github.io/goit-react-hw-01-components/'>Component Little Projects - A collection of small projects demonstrating the usage of components and JSON data. </a> 
        </div>
        <div className={css.portfolioListEl}>
          <a href='https://jakubpiksa.github.io/goit-markup-hw-08/'>Responsive HTML Page - My first serious project, a responsive HTML page.</a>
        </div>
        
        <h2>Team Projects</h2>
        <div className={css.portfolioListEl}>
          <a href='https://kamild90.github.io/projekt-grupa-3/'>My First Team Project - A collaborative project with a team to create a web application. </a>
        </div>
        <div className={css.portfolioListEl}>
          <a href='https://jarek-dzwolak.github.io/FILM_SEARCH_PROJECT-Group-ProjectJS/'>Movie Finder (Group Project) - A complex movie finder project created as a team, unfortunately, it's not functional anymore. </a> 
        </div>
        <div className={css.portfolioListEl}>
          <a href='https://www.youtube.com/watch?v=HxkmXnRQblE'>Upcoming Node.js Project - An upcoming Node.js project starting in October.</a> 
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
