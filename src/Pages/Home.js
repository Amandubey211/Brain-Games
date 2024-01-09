import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import LeftBanner from "../Components/HomeComponents/LeftBanner";
import Popular from "../Components/HomeComponents/Popular";
import RightBanner from "../Components/HomeComponents/RightBanner";
// import {
//   Alert,
//   AlertIcon,
//   AlertTitle,
//   AlertDescription,
// } from "@chakra-ui/react";
// import axios from "axios";

const Home = () => {
  // const [server, setServer] = useState(true);
  // useEffect(async () => {
  //   const { data } = await axios.get(`https://opentdb.com/api.php?amount=10`);
  //   if (data) {
  //     console.log(data);
  //     setServer(false);
  //   }
  // }, []);
  return (
    <Layout title="home page">
      {/* {server && (
        <>
          <div className="d-flex justify-content-center align-items-center gap-2">
            <Alert status="error">
              <AlertIcon />
              <AlertTitle>Server in Maintenance :</AlertTitle>
              <AlertDescription>
                The server is temporarily close
              </AlertDescription>
            </Alert>
          </div>
        </>
      )} */}

      <div className="row">
        <div className="col-md-12 col-sm-12 col-lg-6 col-xl-6 ">
          <LeftBanner />
        </div>
        <div className="  col-md-12 col-sm-12 col-lg-6 col-xl-6">
          <RightBanner />
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-12">
          <Popular />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
