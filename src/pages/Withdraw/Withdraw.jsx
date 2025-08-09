import React, { useState, useEffect } from "react";
import "./Withdraw.css";
import GetWithdraws from "../../Api/Wallet/GetWithdraws";
const Withdraw = () => {
  useEffect(() => {
    getAllRequests();
  }, []);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [allRequests, setAllRequests] = useState([]);
  const getAllRequests = () => {
    GetWithdraws(setLoading, setError, setAllRequests);
  };
  return (
    <div className="withdraw">
      <div className="withdraw_container">
        <h1>طلبات السحب</h1>
        <div className="withdraw_list">
          {loading
            ? "جاري تحميل جميع الطلبات"
            : allRequests.map((item, index) => {
                return (
                  <div className="withdraw_item" key={index}>
                    <div className="item_header">
                      <h3>زياد مشعل</h3>
                      <p>#5125646</p>
                    </div>
                    <div className="item_body">
                      <p>مبلغ السحب</p>
                      <span>{item.amount} جنيه</span>
                    </div>
                    <div className="item_btns">
                      <button>موافقه الطلب</button>
                      <button>رفض الطلب</button>
                    </div>
                    <div className="item_status">
                      <p>{item.status}</p>
                    </div>
                  </div>
                );
              })}
        </div>
      </div>
    </div>
  );
};

export default Withdraw;
