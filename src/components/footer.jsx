import React from "react";
import styles from ".././styles/footer.module.scss";

const Footer = () => {
  return (
    <footer className="fixed-bottom">
      <div className={styles.footer}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="copyright-text">
                <p>
                  © 2018
                  <a href="to">DigiPro</a>. All rights reserved. Created by
                  <a href="to">AazzTech</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
