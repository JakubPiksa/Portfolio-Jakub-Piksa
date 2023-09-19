import css from './nav.module.css'

const Nav = () => {
    return (
    <div className={css.navContainer}>
      
      <nav>
        <ul className={css.navList}>
            <li className={css.navElement}><a href='/portfolio-jakub-piksa/'><button>Home</button></a></li>
            <li className={css.navElement}><a href='/portfolio'><button>My projects</button></a></li>
            <li className={css.navElement}><a href='/about'><button>About me</button></a></li>
            <li className={css.navElement}><a href='https://jakubpiksa.github.io/goit-react-hw-05-movies/'><button>Contact</button></a></li>
        </ul>
      </nav>

    </div>
  );
}

export default Nav