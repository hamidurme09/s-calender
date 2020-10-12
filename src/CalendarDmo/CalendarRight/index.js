import React from "react";
import styles from "./CalendarRight.module.css";

const CalendarRight = () => {
  return (
    <div className={styles.calenderRight}>
      <div>
        <h4>DELIVERY DATE</h4>
      </div>
      <p className={styles.description}>
        Select the day you wish to receive your order. Our products ship frozen-
        please make sure you plan ahead and save time for thawing.
      </p>
      <div>
        <div className={styles.standard}>
          <div
            className={styles.standardColor}
            style={{ backgroundColor: "#E07628" }}
          />
          <p>Standard - $9.99</p>
        </div>

        <div className={styles.standard}>
          <div
            className={styles.standardColor}
            style={{ backgroundColor: "#E8A771" }}
          />
          <p>Express - $24.99</p>
        </div>

        <div className={styles.standard}>
          <div
            className={styles.standardColor}
            style={{ backgroundColor: "#56A2D6" }}
          />
          <p>Overnight - $79.99</p>
        </div>

        <div className={styles.standard}>
          <div
            className={styles.standardColor}
            style={{ backgroundColor: "#064476" }}
          />
          <p>Saturday - $0.00 Upgrade Fee</p>
        </div>
        <div className={styles.info}>
          <p>$0.00 will be added to the price of delivery.</p>
          <p>
            $15.00 Saturday Upgrade fee is waived. However regular shipping
            rates still apply.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CalendarRight;
