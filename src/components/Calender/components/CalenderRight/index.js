import React from "react";

const CalenderRight = () => {
  return (
    <div className="calender-right">
      <div>
      <h4>DELIVERY DATE</h4>
      </div>
      <p className="description">
        Select the day you wish to receive your order. Our products ship frozen-
        please make sure you plan ahead and save time for thawing.
      </p>
      <div>
        <div className="cal-standard">
          <div className="cal-standard-color cal-standard-color-1" />
          <p>Standard - $9.99</p>
        </div>

        <div className="cal-standard">
          <div className="cal-standard-color cal-standard-color-2" />
          <p>Express - $24.99</p>
        </div>

        <div className="cal-standard">
          <div className="cal-standard-color cal-standard-color-3" />
          <p>Overnight - $79.99</p>
        </div>

        <div className="cal-standard">
          <div className="cal-standard-color cal-standard-color-4" />
          <p>Saturday - $0.00 Upgrade Fee</p>
        </div>
        <div className="info">
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

export default CalenderRight;
