import classes from '../Footer/Footer.module.scss';
const Footer = () => {
  return (
    <footer className={classes.footer}>
      <h3>
        Made with ❤️ by{' '}
        <a href="https://github.com/losmarco/f-recipe" className={classes.border}>
          Marco
        </a>
      </h3>
    </footer>
  );
};

export default Footer;
