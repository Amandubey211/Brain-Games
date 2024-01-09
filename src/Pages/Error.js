import React from 'react'
import Spinners from '../Components/Spinner/Spinner'
import ERRORPAGE from "../Animation/ERROR.json"
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const Error = () => {
  const history = useNavigate();
  return (
    <div className='d-flex justify-content-center flex-column gap-2 align-items-center p-5 '>

      <Spinners height="350px" animationData={ERRORPAGE} />
      <button
        className="button-52"
        onClick={()=>{
          history("/")
        }}

        role="button"
      >
        {" "}
        <div className="d-flex justify-content-center align-items-center gap-3">
          <IoMdArrowRoundBack /> <b> 
            Go to Home
          </b>
        </div>
      </button>{" "}
    </div>
  )
}

export default Error
