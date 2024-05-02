import React, { useEffect, useState } from "react";
import {
  DashboardCard,
  DashboardBg,
  DashboardMain,
  HeroGrid,
} from "../../utils/Styles.js";
import { SiStartrek, line } from "../../utils/Icons.js";
import Sidebar from "../../components/Sidebar.js";
import Header from "../../components/Header.js";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1IjoiYW1hbnIwMDEiLCJhIjoiY2x2Z3ZsbzlvMHoyZzJrbnpxc2dta3ZxbCJ9._kBWW2EW_K0qKSlJ3b1Jdw";

const HomeUser = () => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v12",
      center: [73.992074, 17.686999],
      zoom: 8,
    });
    addToMap(map);
  }, []);

  const addToMap = (map) => {
    const marker1 = new mapboxgl.Marker({ color: "#228b22" })
      .setLngLat([73.992074, 17.686999])
      .addTo(map);
  };

  return (
    <DashboardBg>
      <DashboardMain>
        <Sidebar />
        <div>
          <Header />
        </div>
        <DashboardCard>
          <HeroGrid>
            <div className="card">
              <div className="hero">
                <div className="data">
                  <h3>The Best Payroll With</h3>
                  <h3>Advanced Modules</h3>
                  <div className="modules">
                    <img src={line} className="line1 lineImg" alt="" />
                    <img src={line} className="line2 lineImg" alt="" />
                    <img src={line} className="line3 lineImg" alt="" />
                    <img src={line} className="line4 lineImg" alt="" />
                  </div>
                  <button className="d-flex">
                    Go Pro <SiStartrek className="icon" />
                  </button>
                </div>
              </div>
            </div>
            <div id="map"></div>
          </HeroGrid>
        </DashboardCard>
      </DashboardMain>
    </DashboardBg>
  );
};

export default HomeUser;
