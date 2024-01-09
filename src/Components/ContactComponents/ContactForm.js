import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { FcInvite } from "react-icons/fc";
import "../../Pages/Styles/Contact.css";
import { useState } from "react";
import { HomeLoadingContext } from "../../Context/HomeLoadingContextProvider";

const ContactForm = () => {
  const [Name, Setname] = useState("");
  const [Email, Setemail] = useState("");
  const [Message, Setmessage] = useState("");
  const { SetHomeLoading } = useContext(HomeLoadingContext);

  const submitForm = async (e) => {
    e.preventDefault();
    SetHomeLoading(true);
    try {
      // const { data } = await axios.post("/api/contact", {
      //   Name,
      //   Email,
      //   Message,
      // });
      if (true) {
        setTimeout(() => {
          SetHomeLoading(false);
        }, 2450);

        toast.success("Message Sended successfully");
        Setemail("");
        Setname("");
        Setmessage("");
      }
    } catch (error) {
      SetHomeLoading(false);

      toast.error("something went wrong");
    }
  };

  return (
    <div>
      <div className="row">
        <div className="p-4 ">
          <form
            className=" form  border bg-light p-4 rounded-4 "
            style={{
              boxShadow:
                "rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset",
            }}
            onSubmit={submitForm}
          >
            <div
              className="mt-2  fw-semibold text-capitalize text-center d-flex  py-2 flex-row flex-wrap gap-2 justify-content-center  align-items-center rounded-2 bg-none "
              style={{
                boxShadow:
                  "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
              }}
            >
              <FcInvite className="fs-3  " />
              <h5 className="text-center fw-bold text-capitalize">
                {" "}
                <b>
                  {" "}
                  <b className="vibrant fs-3">M</b>essage box
                </b>
              </h5>
            </div>

            <div className="txt_field ">
              <input
                type="text"
                name="Name"
                maxLength={30}
                value={Name}
                onChange={(e) => Setname(e.target.value)}
                required
              />
              <span></span>
              <label> Name</label>
            </div>
            <div className="txt_field">
              <input
                type="email"
                name="Email"
                value={Email}
                onChange={(e) => Setemail(e.target.value)}
                required
              />
              <span></span>
              <label>Email</label>
            </div>
            <div className="txt_field">
              <input
                type="text"
                name="Message"
                maxLength={200}
                value={Message}
                onChange={(e) => Setmessage(e.target.value)}
                required
              />
              <span></span>
              <label>Message</label>
            </div>
            <div className="d-flex justify-content-start ">
              <button className="button-52" role="button">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
