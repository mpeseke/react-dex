import PropTypes from "prop-types";
import styles from "./TypePill.module.css";

export default function TypePill({ typeName }) {
  return (
    <span className={`${styles.typePill} ${styles[typeName]}`}>{typeName}</span>
  );
}

TypePill.propTypes = {
  typeName: PropTypes.string,
};
