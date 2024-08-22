import React, { useState } from "react";
import HomeContext from "./HomeContext";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const HomeState = ({ children }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState();
  const [message, setMessage] = useState("");
  const [messageLoading,setMessageLoading] = useState(false);
  const [showMessage,setShowMessage] = useState("");
  const handleSendClick = () => {
    console.log("Send click done");
    if(checkFields()){
        setMessageLoading(true);
    const serviceID = "service_9a66w2u";
    const templateID = "template_nsjoo15";
    const userID = "B_ASROg3yW9J0SFad";

    const templateParams = {
      from_name: name,
      to_name: "AMVI",
      message: message,
      reply_to: email,
      phone: contactNumber,
    };

    emailjs.send(serviceID, templateID, templateParams, userID).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        setShowMessage("Thanks For Reaching out to us : )");
        setFieldEmpty();
      },
      (err) => {
        console.log("FAILED...", err);
        setShowMessage("Unable to connect ! Please Try Again ...")
        setFieldEmpty();
      }
    );
    }
  };
  const checkFields = ()=>{
    if(name==="" || email==="" || contactNumber===""){
        toast.error("Input all the fields")
        return false;
    }
    else{
        return true;
    }
  }
  const setFieldEmpty =()=>{
    setName("");
    setEmail("");
    setMessage("");
    setContactNumber("");
    setMessageLoading(false);
  }
  const [loading, setLoading] = useState(true);
  return (
    <HomeContext.Provider
      value={{
        handleSendClick,
        name,
        setContactNumber,
        contactNumber,
        email,
        setEmail,
        setName,
        message,
        setMessage,
        messageLoading,
        setMessageLoading,
        showMessage,
        loading, setLoading
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};

export default HomeState;
