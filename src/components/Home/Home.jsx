import css from './home.module.css';
import myPhoto from '../../utils/images/officialPortrait.jpg'

const Home = () => {
  return (
    <div className={css.homeContainer}>
      <h1 className={css.homeContainerHeader}>Welcome to My Portfolio</h1>
      <span className={css.photoContainer}>
      <img src={myPhoto} alt='Jakub Piksa In Turkey' />
      <p className={css.homeTextWelcome}>
        Hello there! I'm Jakub Piksa, a passionate and creative FullStack Developer based in Poland. Welcome to my digital playground, where I showcase my skills, projects, and a glimpse of who I am.
        </p>
      </span>
      <h2>About ME</h2>
      <p className={css.homeText}>
        A tech enthusiast, and a creator at heart. With expertise in React, Node.js, HTML, CSS, MongoDB, and proficiency in tools like Figma, Trello, and Slack, I'm dedicated to creating user-friendly applications that make a difference. My experience extends to utilizing libraries like Notifly and Joi to enhance functionality and streamline development.
      </p>

      <h2>
        What do I have experience with?
      </h2>
      
      <p className={css.homeText}>
        Frontend Development: I specialize in crafting engaging and intuitive user interfaces using React and HTML/CSS.
        Backend Development: Working with Node.js, I build robust server-side applications and APIs.
        Database Management: I'm skilled in handling data using MongoDB to ensure efficient storage and retrieval.
      </p>

      <h2>Let's connect</h2>

      <p className={css.homeText}>I thrive on challenges and welcome collaboration opportunities. Whether you have a project in mind or simply want to say hello, don't hesitate to get in touch!</p>
    </div>
  );
};

export default Home;
