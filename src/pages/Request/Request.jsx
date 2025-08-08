import React, { useState, useEffect } from "react";
import "./Request.css";
import GetRequest from "../../Api/Request/GetRequest";
import Verify from "../../Api/Request/Verify";
import Cancel from "../../Api/Request/Cancel";
import avatar from "../../assets/req-ava.jpg";
import cars from "../../assets/logo.png";
import papers from "../../assets/react.svg";
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
  const [selectedRequest, setSelectedRequest] = useState(null); // الطلب الحالي
  const [activeTab, setActiveTab] = useState("id"); // التاب الحالي

  const getAllRequests = () => {
    GetRequest(setLoading, setError, setAllRequests);
  };
  const handleVerify = (id) => {
    Verify(setLoading, setError, id, getAllRequests);
  };
  const handleCancel = (id) => {
    Cancel(setLoading, setError, id, getAllRequests);
  };

  const openModal = (req) => {
    setSelectedRequest(req);
    setReqModel(true);
    setActiveTab("id");
  };

  const images = [
    { src: avatar, alt: "Avatar" },
    { src: avatar, alt: "Avatar" },
  ];

  const imagesCar = [
    { src: cars, alt: "Avatar" },
    { src: cars, alt: "Avatar" },
  ];

  const imagesPapers = [
    { src: papers, alt: "Avatar" },
    { src: papers, alt: "Avatar" },
  ];

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
                      <img src={req?.vehiclePic} alt="" />
                      <div className="request_info">
                        <span>{req.name}</span>
                        <span>#{req.driverId}</span>
                      </div>
                    </div>
                    <div className="request_files">
                      <div className="files">
                        <span>الملفات</span>
                        <button onClick={() => openModal(req)}>
                          عرض الملفات
                        </button>
                      </div>
                      <div className="files_car">
                        <span>نوع السيارة</span>
                        <span>{req.vehicleType || "سيارة خاصة"}</span>
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

        {reqModel && selectedRequest && (
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
                    <h3>{selectedRequest.name}</h3>
                    <div className="req_modal_header_info">
                      <span>
                        <FaPhone /> {selectedRequest.phone}
                      </span>
                      <span>
                        <MdOutlineEmail />
                        {selectedRequest.email}
                      </span>
                      <span>
                        <CiLocationOn />
                        {selectedRequest.city || "القاهرة - مصر الجديدة"}
                      </span>
                    </div>
                    <div className="req_modal_header_info_2">
                      <p>
                        رقم الهوية: <span>{selectedRequest.nationalId}</span>
                      </p>
                      <p>
                        رقم الرخصة: <span>{selectedRequest.licenseId}</span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Tabs */}
                <div className="tabs">
                  <button
                    className={activeTab === "id" ? "active" : ""}
                    onClick={() => setActiveTab("id")}
                  >
                    صور البطاقة
                  </button>
                  <button
                    className={activeTab === "legal" ? "active" : ""}
                    onClick={() => setActiveTab("legal")}
                  >
                    الأوراق القانونية
                  </button>
                  <button
                    className={activeTab === "car" ? "active" : ""}
                    onClick={() => setActiveTab("car")}
                  >
                    صور السيارة
                  </button>
                </div>

                <div className="req_modal_body">
                  {activeTab === "id" && (
                    <div className="cardId_images">
                      {selectedRequest.nationalityId.length ? (
                        selectedRequest.nationalityId.map((img, i) => (
                          <img key={i} src={img} alt={img.alt} />
                        ))
                      ) : (
                        <p>لا توجد صور</p>
                      )}
                    </div>
                  )}
                  {activeTab === "legal" && (
                    <div className="cardId_images">
                      {selectedRequest.verificationPapers.length ? (
                        selectedRequest.verificationPapers.map((img, i) => (
                          <img key={i} src={img} alt="Legal Doc" />
                        ))
                      ) : (
                        <p>لا توجد صور</p>
                      )}
                    </div>
                  )}
                  {activeTab === "car" && (
                    <div className="cardId_images">
                      {selectedRequest.vehiclePic.length ? (
                        selectedRequest.vehiclePic.map((img, i) => (
                          <img key={i} src={img} alt="Car" />
                        ))
                      ) : (
                        <p>لا توجد صور</p>
                      )}
                    </div>
                  )}
                </div>

                <button onClick={() => setReqModel(false)} className="closeReq">
                  إغلاق
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Request;
