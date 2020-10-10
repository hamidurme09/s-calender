import React from "react";

const CalenderLeft = () => {
  const dateRow = [1, 2, 3, 4, 5, 6];
  return (
    <div className="calender-left">
      <p>OCT 2020</p>
      <div className="week">
        <table>
          <thead>
            <tr>
              <th>SU</th>
              <th>MO</th>
              <th>TU</th>
              <th>WE</th>
              <th>TH</th>
              <th>FR</th>
              <th>SA</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>8</td>
              <td style={{ background: "red" }}>9</td>
              <td>10</td>
              <td>11</td>
              <td>12</td>
              <td>13</td>
              <td>100</td>
            </tr>

            <tr>
              <td>8</td>
              <td>9</td>
              <td>10</td>
              <td>11</td>
              <td>12</td>
              <td>13</td>
              <td>100</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CalenderLeft;
