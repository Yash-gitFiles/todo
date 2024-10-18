import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from "../../styles/componet/common/modal.module.css";

function Modal({ toggleModal, title, body, footer }) {
  return (
    <div className={styles.outerContainer}>
      <div className={styles.innerContainer}>
        <div className={styles.headerContainer}>
          <h2>{title}</h2>
          <button onClick={toggleModal}>
            <FontAwesomeIcon icon={faClose} />
          </button>
        </div>
        {body && <div className={styles.body}>{body}</div>}
        {footer && <div className={styles.footer}>{footer}</div>}
      </div>
    </div>
  );
}

export default Modal;
