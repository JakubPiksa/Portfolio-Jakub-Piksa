import css from './portfolio.module.css'

const Portfolio = () => {
  return (
    <div className={css.portfolioContainer}>
      <h1>WORK IN PROGRESS: My Projects</h1>
      <div className={css.portfolioList}>
        <div className={css.portfolioListEl}>
          <h2>Solo Projects</h2>
          <a href='https://jakubpiksa.github.io/goit-react-hw-05-movies/'>Project 1 - movie finder</a>
        </div>
        <div className={css.portfolioListEl}>
          <a href='https://jakubpiksa.github.io/goit-react-hw-06-phonebook/'>Project 2 - Phonebook</a>
        </div>
        <div className={css.portfolioListEl}>
          <a href='https://jakubpiksa.github.io/goit-react-hw-04-imagesTest/'>Project 3 - image finder</a>
        </div>
        <div className={css.portfolioListEl}>
          <a href='https://jakubpiksa.github.io/goit-react-hw-02-feedback2/'>Project 4 - feedback widget</a>
        </div>
        <div className={css.portfolioListEl}>
          <a href='https://jakubpiksa.github.io/goit-react-hw-01-components/'>Project 5 - components little projects i learned using components and JSON data in my projects</a>
        </div>
        <div className={css.portfolioListEl}>
          <a href='https://jakubpiksa.github.io/goit-markup-hw-08/'>Project 6 - my first serious project. It's a responsive html page. Pretty simple, NOW. 1 year ago it was like black magic for me haha</a>
        </div>
        <div className={css.portfolioListEl}>
          <h2>Team projects</h2>
        </div>
        <div className={css.portfolioListEl}>
          <a href='https://kamild90.github.io/projekt-grupa-3/'>Project 7 - My first team project</a>
        </div>
        <div className={css.portfolioListEl}>
          <a href='https://jarek-dzwolak.github.io/FILM_SEARCH_PROJECT-Group-ProjectJS/'>Project 8 - Movie finder, pretty complex project. Unfortunatly something happend and it stopped working</a>
        </div>
        <div className={css.portfolioListEl}>
          <a href='https://www.youtube.com/watch?v=HxkmXnRQblE'>Project 9 - here is gonna be Node project that we are starting i october</a>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
