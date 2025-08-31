import React, { useState, useEffect } from "react";
import "./Withdraw.css";
import GetWithdraws from "../../Api/Wallet/GetWithdraws";
import notFound from "../../assets/not-found.svg";
import WithdrawRequest from "../../Api/Wallet/WithdrawRequest";
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
  const makeWithdraw = (id) => {
    const data = {
      id: id,
    };
    console.log(id);

    WithdrawRequest(setLoading, setError, data, getAllRequests);
  };

  return (
    <div className="withdraw">
      <div className="withdraw_container">
        <h1>طلبات السحب</h1>
        <div className="withdraw_list">
          {loading ? (
            <p className="loading_text">جاري تحميل جميع الطلبات...</p>
          ) : allRequests.length === 0 ? (
            <div className="no_requests">
              <img src={notFound} alt="no data" />
              <h3>لا يوجد طلبات سحب حالياً</h3>
              <p>عندما يقوم العملاء بإنشاء طلب سحب سيظهر هنا</p>
            </div>
          ) : (
            allRequests.map((item, index) => {
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
                    <button onClick={() => makeWithdraw(item._id)}>
                      {loading ? "جاري الموافقه" : "موافقه الطلب"}
                    </button>
                    <button>رفض الطلب</button>
                  </div>
                  <div className="item_status">
                    <p>{item.status}</p>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default Withdraw;
