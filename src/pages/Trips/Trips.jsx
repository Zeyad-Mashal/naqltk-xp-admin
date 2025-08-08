import React, { useState, useEffect } from "react";
import "./Trips.css";
import { CiDeliveryTruck } from "react-icons/ci";
import seperator from "../../assets/image.png";
import GetTrips from "../../Api/Trips/GetTrips";
const Trips = () => {
  useEffect(() => {
    getAllTrips();
  }, []);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [allTravels, setAllTravels] = useState([]);
  const addActive = (e) => {
    const elements = document.querySelectorAll(".trips_filter div");
    elements.forEach((element) => {
      element.classList.remove("active");
    });
    e.target.classList.add("active");
  };
  const getAllTrips = () => {
    GetTrips(setLoading, setError, setAllTravels);
  };
  return (
    <div className="trips">
      <h1>جميع الرحلات</h1>
      <div className="trips_filter">
        <p onClick={addActive}>عرض الكل</p>
        <div onClick={addActive}>
          test <span>30</span>
        </div>
        <div onClick={addActive}>
          test <span>19</span>
        </div>
        <div onClick={addActive}>
          test <span>20</span>
        </div>
      </div>

      <div className="trips_container">
        <div className="trips_list">
          {loading
            ? "جاري تحميل الرحلات"
            : allTravels.length > 0
            ? allTravels.map((trip, index) => {
                return (
                  <div className="trip_item">
                    <div className="trip_header">
                      <div className="trip_header_right">
                        <CiDeliveryTruck />

                        <div className="trip_header_right_info">
                          <h3>كود الرحله</h3>
                          <p>#{trip.price}</p>
                        </div>
                      </div>
                      <div className="trip_header_left">
                        <p>سعر الرحلة</p>
                        <span>{trip.price} جنيه</span>
                      </div>
                    </div>
                    <div className="trip_seperator">
                      <img src={seperator} alt="" />
                    </div>
                    <div className="trip_body">
                      <div className="trip_body_right">
                        <h3>{trip.from_city}</h3>
                        <p>التحرك</p>
                      </div>
                      <div className="trip_body_mid">
                        <p>{trip.vehicle}</p> - <p>{trip.type}</p>
                      </div>
                      <div className="trip_body_left">
                        <h3>{trip.to_city}</h3>
                        <p>الوصول</p>
                      </div>
                    </div>
                  </div>
                );
              })
            : "لا توجد رحلات حاليا"}
        </div>
      </div>
    </div>
  );
};

export default Trips;
