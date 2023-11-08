import css from 'components/Section/Section.module.css'
import PropTypes from 'prop-types';

const Section = ({ title, children }) => (
  <section className={css.section}>
    <h2>{title}</h2>
    {children}
  </section>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Section;
