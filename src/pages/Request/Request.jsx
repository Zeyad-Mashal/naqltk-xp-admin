import React from "react";
import "./Request.css";
const Request = () => {
  return (
    <div className="Request">
      <div className="Request_container">
        <h2>طلبات الانضمام</h2>
        <div className="table_wrapper">
          <table id="customers">
            <tr>
              <th>الإسم</th>
              <th>رقم الهاتف</th>
              <th>الباركود</th>
              <th>نوع السيارة</th>
              <th>تاريخ التسليم</th>
              <th>الباركود</th>
              <th>اجراءات</th>
            </tr>
            <tr>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Germany</td>
              <td>Germany</td>
              <td>Germany</td>
              <td>Germany</td>
              <td className="actions">
                <button>موافقه</button>
                <button>رفض</button>
              </td>
            </tr>
            <tr>
              <td>Berglunds snabbköp</td>
              <td>Christina Berglund</td>
              <td>Sweden</td>
              <td>Sweden</td>
              <td>Sweden</td>
              <td>Sweden</td>
              <td className="actions">
                <button>موافقه</button>
                <button>رفض</button>
              </td>
            </tr>
            <tr>
              <td>Centro comercial Moctezuma</td>
              <td>Francisco Chang</td>
              <td>Mexico</td>
              <td>Mexico</td>
              <td>Mexico</td>
              <td>Mexico</td>
              <td className="actions">
                <button>موافقه</button>
                <button>رفض</button>
              </td>
            </tr>
            <tr>
              <td>Ernst Handel</td>
              <td>Roland Mendel</td>
              <td>Austria</td>
              <td>Austria</td>
              <td>Austria</td>
              <td>Austria</td>
              <td className="actions">
                <button>موافقه</button>
                <button>رفض</button>
              </td>
            </tr>
            <tr>
              <td>Island Trading</td>
              <td>Helen Bennett</td>
              <td>UK</td>
              <td>UK</td>
              <td>UK</td>
              <td>UK</td>
              <td className="actions">
                <button>موافقه</button>
                <button>رفض</button>
              </td>
            </tr>
            <tr>
              <td>Königlich Essen</td>
              <td>Philip Cramer</td>
              <td>Germany</td>
              <td>Germany</td>
              <td>Germany</td>
              <td>Germany</td>
              <td className="actions">
                <button>موافقه</button>
                <button>رفض</button>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Request;
