import React from "react";
import "./Driver.css";
const Drivers = () => {
  return (
    <div className="drivers">
      <div className="drivers_container">
        <h1>السائقين</h1>
        <div className="table_wrapper">
          <table id="customers">
            <tr>
              <th>الإسم</th>
              <th>رقم الهاتف</th>
              <th>الباركود</th>
              <th>نوع السيارة</th>
              <th>تاريخ التسليم</th>
              <th>الباركود</th>
            </tr>
            <tr>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Germany</td>
              <td>Germany</td>
              <td>Germany</td>
              <td>Germany</td>
            </tr>
            <tr>
              <td>Berglunds snabbköp</td>
              <td>Christina Berglund</td>
              <td>Sweden</td>
              <td>Sweden</td>
              <td>Sweden</td>
              <td>Sweden</td>
            </tr>
            <tr>
              <td>Centro comercial Moctezuma</td>
              <td>Francisco Chang</td>
              <td>Mexico</td>
              <td>Mexico</td>
              <td>Mexico</td>
              <td>Mexico</td>
            </tr>
            <tr>
              <td>Ernst Handel</td>
              <td>Roland Mendel</td>
              <td>Austria</td>
              <td>Austria</td>
              <td>Austria</td>
              <td>Austria</td>
            </tr>
            <tr>
              <td>Island Trading</td>
              <td>Helen Bennett</td>
              <td>UK</td>
              <td>UK</td>
              <td>UK</td>
              <td>UK</td>
            </tr>
            <tr>
              <td>Königlich Essen</td>
              <td>Philip Cramer</td>
              <td>Germany</td>
              <td>Germany</td>
              <td>Germany</td>
              <td>Germany</td>
            </tr>
            <tr>
              <td>Laughing Bacchus Winecellars</td>
              <td>Yoshi Tannamuri</td>
              <td>Canada</td>
              <td>Canada</td>
              <td>Canada</td>
              <td>Canada</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Drivers;
