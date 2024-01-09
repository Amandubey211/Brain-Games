import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import "./Styles/RightBanner.css";
import HomeLoading from "../../Animation/Home.json"
import { HomeLoadingContext } from "../../Context/HomeLoadingContextProvider";
import Spinners from "../Spinner/Spinner";

const RightBanner = () => {
  const { homeloading, SetHomeLoading } = useContext(HomeLoadingContext)
  return (
    <div>
      <div className="home_right py-2 d-flex flex-column justify-content-center align-items-center ">
        {
          homeloading ? <div className="d-flex justify-content-center align-items-center gap-2 flex-column"> <Spinners animationData={HomeLoading} height="250px" width="250px" /> <b><b className="vibrant">G</b>athering <b className="vibrant">T</b>hings....</b> </div> : <><img
            src="/HomeLand.svg"
            className="landingImage p-1"
            alt="landingImage"
          />
            <h1 className="p-3 fw-bolder ">F & Q</h1>
            <p className="goodLuckNinja">
              {" "}
              <b className="vibrant">G</b>ood <b className="vibrant">L</b>
              uck <b className="vibrant">N</b>injas
            </p>
          </>
        }


      </div>
    </div>
  );
};

export default RightBanner;
