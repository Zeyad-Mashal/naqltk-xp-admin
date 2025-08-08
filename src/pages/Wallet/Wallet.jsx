import React, { useState, useEffect } from "react";
import "./Wallet.css";
import ava from "../../assets/ava.jpg";
import { MdAttachMoney } from "react-icons/md";
import { FiTruck } from "react-icons/fi";
import { FaRegCheckCircle } from "react-icons/fa";
import tran from "../../assets/trans1.png";
import GetWallet from "../../Api/Wallet/GetWallet";
import { useParams } from "react-router-dom";
import IntialAmout from "../../Api/Wallet/IntialAmout";
import Deposite from "../../Api/Wallet/Deposite";
const Wallet = () => {
  const { driverId } = useParams();
  useEffect(() => {
    getWalletData();
  }, []);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [walletData, setWalletData] = useState([]);
  const [done, setDone] = useState(false);
  const [intialNumber, setIntialNumber] = useState("");
  const [depositeAmount, setDepositeAmount] = useState("");
  const getWalletData = () => {
    GetWallet(setLoading, setError, setWalletData, driverId);
  };
  const DriverIntialAmount = () => {
    const data = {
      amount: intialNumber,
    };
    IntialAmout(setLoading, setError, driverId, data, getWalletData, setDone);
  };
  const DriverDeposite = () => {
    const data = {
      amount: depositeAmount,
    };
    Deposite(setLoading, setError, driverId, data, getWalletData, setDone);
  };
  return (
    <div className="wallet">
      <div className="wallet_container">
        <h1>لوحة المحفظة</h1>
        <p>إدارة محفظة اللوجستيات وتأمين الشاحنات</p>
        <div className="wallet_body">
          <div className="driver_info_wallet">
            <img src={ava} alt="" />
            <div className="driver_info_wallet_data">
              <p>Zeyad Mashaal</p>
              <span>#001122</span>
            </div>
            <div className="driver_info_wallet_data">
              <p>مبلغ التأمين</p>
              <span>{walletData[0]?.initialAmount} جنيه</span>
            </div>
          </div>
          <div className="wallet_amount">
            <MdAttachMoney />
            <div className="wallet_amount_data">
              <p>الرصيد الحالي</p>
              <h2>{walletData[0]?.amount} جنيه</h2>
            </div>
          </div>
        </div>
        <div className="wallet_controllers">
          <div className="wallet_field">
            <div className="wallet_field_title">
              <FiTruck />
              <h3>تأمين الشاحنة</h3>
            </div>
            <label>
              <span>مبلغ التأمين</span>
              <input
                type="text"
                placeholder="مثال الدبابه, 1000"
                value={intialNumber}
                onChange={(e) => setIntialNumber(e.target.value)}
              />
            </label>
            <button onClick={DriverIntialAmount}>
              {loading && "جاري التحقق"}
              <FaRegCheckCircle />
              تحقق
            </button>
          </div>
          <div className="wallet_field">
            <div className="wallet_field_title">
              <FiTruck />
              <h3>سحب</h3>
            </div>
            <label>
              <span>مبلغ السحب</span>
              <input type="text" placeholder="مثال الدبابه, 500" />
            </label>
            <button>
              <FaRegCheckCircle />
              سحب
            </button>
          </div>
          <div className="wallet_field">
            <div className="wallet_field_title">
              <FiTruck />
              <h3>إيداع</h3>
            </div>
            <label>
              <span>مبلغ الإيداع</span>
              <input
                type="text"
                placeholder="مثال الدبابه, 500"
                value={depositeAmount}
                onChange={(e) => setDepositeAmount(e.target.value)}
              />
            </label>
            <button onClick={DriverDeposite}>
              {loading && "جاري الايداع"}
              <FaRegCheckCircle />
              إيداع
            </button>
          </div>
        </div>
        <div className="wallet_transactions">
          <h2>احدث عمليات</h2>
          <div className="transaction">
            <img src={tran} alt="" />
            <div className="transaction_type">
              <p>عمليه سحب</p>
              <span>25 يناير 2021</span>
            </div>
            <div className="transaction_amount">150-</div>
            <div className="tansaction_status">قيد الانتظار</div>
          </div>
          <div className="transaction">
            <img src={tran} alt="" />
            <div className="transaction_type">
              <p>عمليه سحب</p>
              <span>25 يناير 2021</span>
            </div>
            <div className="transaction_amount">150-</div>
            <div className="tansaction_status">قيد الانتظار</div>
          </div>
          <div className="transaction">
            <img src={tran} alt="" />
            <div className="transaction_type">
              <p>عمليه سحب</p>
              <span>25 يناير 2021</span>
            </div>
            <div className="transaction_amount">150-</div>
            <div className="tansaction_status">قيد الانتظار</div>
          </div>
        </div>
        {done && (
          <div className="transaction_done">
            <p>تمت العمليه بنجاح</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Wallet;
