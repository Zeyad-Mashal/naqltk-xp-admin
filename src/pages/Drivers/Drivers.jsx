import React, { useState, useEffect } from "react";
import "./Driver.css";
import GetDrivers from "../../Api/Drivers/GetDrivers";
import avatar from "../../assets/req-ava.jpg"; // صورة افتراضية للسائق
import { FaPhone } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
const Drivers = () => {
  useEffect(() => {
    getAllDrivers();
  }, []);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [allDrivers, setAllDrivers] = useState([]);
  const [selectedDriver, setSelectedDriver] = useState(null); // السائق اللي هنفتحه
  const [showModal, setShowModal] = useState(false); // حالة المودال

  const getAllDrivers = () => {
    GetDrivers(setLoading, setError, setAllDrivers);
  };

  const openDriverModal = (driver) => {
    setSelectedDriver(driver);
    setShowModal(true);
  };

  return (
    <div className="drivers">
      <div className="drivers_container">
        <h1>السائقين</h1>
        <div className="table_wrapper">
          <table id="customers">
            <thead>
              <tr>
                <th>الإسم</th>
                <th>الايميل</th>
                <th>رقم الهاتف</th>
                <th>كود التعريفي للسائق</th>
                <th>نوع السيارة</th>
                <th>تاريخ التسليم</th>
              </tr>
            </thead>
            <tbody>
              {loading
                ? "جاري تحميل بيانات السائقين"
                : allDrivers.map((driver, index) => (
                    <tr key={index} onClick={() => openDriverModal(driver)}>
                      <td>{driver.name}</td>
                      <td>{driver.email}</td>
                      <td>{driver.phone}</td>
                      <td>{driver.driverId}</td>
                      <td>{driver.vehicle}</td>
                      <td>
                        {driver.verify ? (
                          <button className="activated">مفعل</button>
                        ) : (
                          <button className="driver_verfiy">قيد التحقق</button>
                        )}
                      </td>
                    </tr>
                  ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* المودال */}
      {showModal && selectedDriver && (
        <>
          <div className="modal_overlay" onClick={() => setShowModal(false)} />
          <div className="driver_modal">
            <div className="driver_modal_content">
              <div className="driver_modal_right">
                <img src={avatar} alt="Driver" />
                <h3>{selectedDriver.name}</h3>
                <p>
                  <FaPhone /> {selectedDriver.phone}
                </p>
                <p>
                  <MdOutlineEmail />
                  {selectedDriver.email}
                </p>
                <p>
                  <CiLocationOn />{" "}
                  {selectedDriver.city || "القاهرة - مصر الجديدة"}
                </p>
                <div className="right_info">
                  <span>
                    <b>نوع السيارة:</b> {selectedDriver.vehicle}
                  </span>
                  <span>
                    <b>رقم التسجيل:</b> {selectedDriver.driverId}
                  </span>
                </div>
              </div>
              <div className="driver_modal_left">
                <div className="left_header">
                  <h3>الملفات</h3>
                  <button className="upload_btn">تحميل</button>
                </div>
                <ul>
                  <li>
                    صور البطاقة <span>.png</span>
                  </li>
                  <li>
                    صور السيارة <span>.png</span>
                  </li>
                  <li>
                    صور الرخصة <span>.png</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* جدول الرحلات */}
            <div className="driver_modal_table">
              <h3>تاريخ الرحلات</h3>
              <table>
                <thead>
                  <tr>
                    <th>رقم الشحنة</th>
                    <th>المصدر</th>
                    <th>الوجهة</th>
                    <th>نوع الشحنة</th>
                    <th>تاريخ التسليم</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>#67890</td>
                    <td>القاهرة - مصر الجديدة</td>
                    <td>القاهرة - مصر الجديدة</td>
                    <td>نقل أثاث</td>
                    <td>12.09.2019 - 12:53 PM</td>
                  </tr>
                  <tr>
                    <td>#67890</td>
                    <td>القاهرة - مصر الجديدة</td>
                    <td>القاهرة - مصر الجديدة</td>
                    <td>نقل أثاث</td>
                    <td>12.09.2019 - 12:53 PM</td>
                  </tr>
                  <tr>
                    <td>#67890</td>
                    <td>القاهرة - مصر الجديدة</td>
                    <td>القاهرة - مصر الجديدة</td>
                    <td>نقل أثاث</td>
                    <td>12.09.2019 - 12:53 PM</td>
                  </tr>
                  <tr>
                    <td>#67890</td>
                    <td>القاهرة - مصر الجديدة</td>
                    <td>القاهرة - مصر الجديدة</td>
                    <td>نقل أثاث</td>
                    <td>12.09.2019 - 12:53 PM</td>
                  </tr>
                  <tr>
                    <td>#67891</td>
                    <td>القاهرة - مصر الجديدة</td>
                    <td>القاهرة - مصر الجديدة</td>
                    <td>نقل أثاث</td>
                    <td>12.09.2019 - 12:53 PM</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <button className="close_btn" onClick={() => setShowModal(false)}>
              إغلاق
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Drivers;
