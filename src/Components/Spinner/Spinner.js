import React from "react";
import Lottie from "lottie-react";

const Spinners = ({ height, width, animationData,shadow,borderRadius }) => {
  return (
    <>
      <Lottie
        style={{ boxShadow:shadow, height: height, width: width,borderRadius:borderRadius }}
        animationData={animationData}
      />
    </>
  );
};

export default Spinners;
