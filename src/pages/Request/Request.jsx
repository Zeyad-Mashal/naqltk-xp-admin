import React, { useState, useEffect } from "react";
import "./Request.css";
import GetRequest from "../../Api/Request/GetRequest";
import Verify from "../../Api/Request/Verify";
import Cancel from "../../Api/Request/Cancel";
import avatar from "../../assets/req-ava.jpg";
import { FaPhone } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";

const Request = () => {
  useEffect(() => {
    getAllRequests();
  }, []);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [allRequests, setAllRequests] = useState([]);
  const [reqModel, setReqModel] = useState(false);

  const getAllRequests = () => {
    GetRequest(setLoading, setError, setAllRequests);
  };
  const handleVerify = (id) => {
    Verify(setLoading, setError, id, getAllRequests);
  };
  const handleCancel = (id) => {
    Cancel(setLoading, setError, id, getAllRequests);
  };

  return (
    <div className="Request">
      <div className="Request_container">
        <h2>طلبات الانضمام</h2>
        <div className="request_list">
          {loading
            ? "جاري تحميل الطلبات"
            : allRequests.length <= 0
            ? "لا يوجد طلبات تقديم"
            : allRequests?.map((req, index) => {
                return (
                  <div className="request_item" key={index}>
                    <div className="request_header">
                      <img src={avatar} alt="" />
                      <div className="request_info">
                        <span>{req.name}</span>
                        <span>#{req.driverId}</span>
                      </div>
                    </div>
                    <div className="request_files">
                      <div className="files">
                        <span onClick={() => console.log(req._id)}>
                          الملفات
                        </span>
                        <button onClick={() => setReqModel(true)}>
                          عرض الملفات
                        </button>
                      </div>
                      <div className="files_car">
                        <span>نوع السيارة</span>
                        <span>سيارة خاصة</span>
                      </div>
                    </div>
                    {error}
                    <div className="request_actions">
                      <button
                        className="accept"
                        onClick={() => handleVerify(req._id)}
                      >
                        {loading ? "جاري التحقق" : "قبول"}
                      </button>

                      <button
                        className="reject"
                        onClick={() => handleCancel(req._id)}
                      >
                        رفض
                      </button>
                    </div>
                  </div>
                );
              })}
        </div>
        {reqModel && (
          <>
            <div
              className="modal_overlay"
              onClick={() => setReqModel(false)}
            ></div>
            <div className="req_modal">
              <div className="req_modal_content">
                <div className="req_modal_header">
                  <img src={avatar} alt="Avatar" />
                  <div className="req_modal_info">
                    <h3>اسم السائق</h3>
                    <div className="req_modal_header_info">
                      <span>
                        <FaPhone /> 0123456789
                      </span>
                      <span>
                        <MdOutlineEmail />
                        zyadomar112@gmail.com
                      </span>
                      <span>
                        <CiLocationOn />
                        القاهرة - مصر الجديدة{" "}
                      </span>
                    </div>
                    <div className="req_modal_header_info_2">
                      <p>
                        رقم الهوية: <span>123456789</span>
                      </p>
                      <p>
                        رقم الرخصة: <span>987654321</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="req_modal_body">
                  <div className="cardId">
                    <h3>صور البطاقة</h3>
                    <div className="cardId_images">
                      <img src={avatar} alt="Card Front" />
                      <img src={avatar} alt="Card Back" />
                    </div>
                  </div>
                </div>
                <button onClick={() => setReqModel(false)}>إغلاق</button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Request;
