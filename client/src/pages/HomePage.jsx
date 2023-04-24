import axios from "axios";
import React, { useEffect, useState } from "react";
import Selector from "../components/Selector";
import SimpleTable from "../components/SimpleTable";
function HomePage() {
  const [userData, setUserData] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleSelectChange = (value) => {
    setSelectedIndex(value);
  };

  const endpoints = [
    "/",
    "/income-bmw-mercedes-lower-5usd",
    "/car-email",
    "/last-name-quote-email",
    "/male-phone-price-greater-10000",
    "/top-10-cities",
  ];
  useEffect(() => {
    if(selectedIndex != 0)
      axios
        .get(`http://localhost:3000/api/users${endpoints[selectedIndex]}`)
        .then((data) => {
          setUserData(data.data);
        })
        .catch(function (error) {
          console.log(error);
        });
  }, [selectedIndex]);

  return (
    <>
      <div className="search-box-container">
        <Selector onSelectChange={handleSelectChange} />
      </div>
      <SimpleTable data={userData} />
    </>
  );
}

export default HomePage;
