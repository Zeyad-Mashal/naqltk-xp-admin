import React, { useState, useEffect } from "react";
import "./Customers.css";
import GetClients from "../../Api/Clients/GetClients";
const Customers = () => {
  useEffect(() => {
    getAllClients();
  }, []);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [allClients, setAllClients] = useState([]);
  const getAllClients = () => {
    GetClients(setLoading, setError, setAllClients);
  };
  return (
    <div className="customers">
      <div className="customers_container">
        <h1>العملاء</h1>
        <div className="table_wrapper">
          <table id="customers">
            <tr>
              <th>الإسم</th>
              <th>الايميل</th>
              <th>رقم الهاتف</th>
            </tr>
            {error}
            {loading
              ? "جاري عرض بيانات العملاء"
              : allClients.length <= 0
              ? "لا يوجد عملاء"
              : allClients.map((client, index) => {
                  return (
                    <tr key={index}>
                      <td>{client.name}</td>
                      <td>{client.email}</td>
                      <td>{client.phone}</td>
                    </tr>
                  );
                })}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Customers;
