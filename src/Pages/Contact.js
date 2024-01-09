import React, { useContext } from "react";
import Layout from "../Layout/Layout";
import Spinners from "../Components/Spinner/Spinner";
import ContactForm from "../Components/ContactComponents/ContactForm";
import { HomeLoadingContext } from "../Context/HomeLoadingContextProvider";
import SendingMessage from "../Animation/SendingMessage.json";
const Contact = () => {
  const { homeloading, SetHomeLoading } = useContext(HomeLoadingContext);

  return (
    <Layout>
      <div className="row">
       
        <div className="col-lg-5 col-md-12 col-sm-12 ">
          <div className="d-flex gap-3 justify-content-center  flex-column  p-3 align-items-center">
            {/* <div className="d-flex justify-content-center  py-2"> */}
            <b>
              {" "}
              <b className="vibrant">C</b>ontact Us
            </b>
            {/* </div> */}

            {homeloading ? (
              <Spinners animationData={SendingMessage} height="300px" />
            ) : (
              <img className="contactImage" src="Contact2.svg" />
            )}

            <b>
              <b className="vibrant">T</b>hanks for Your Precious{" "}
              <b className="vibrant">T</b>ime
            </b>
          </div>
        </div>

        <div className="col-lg-7 col-md-12 col-sm-12">
          <ContactForm />
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
