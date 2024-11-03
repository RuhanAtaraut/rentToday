import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import FetchService from "../service/FetchService";
import hasRole from "../util/hasRole";
import UserContext from "../context/UserContext";

const SubmitOffer = ({ propertyDetails }) => {
  const currentUser = useContext(UserContext);

  const offerMessage = useRef();
  const offerPrice = useRef();
  const notification = useRef();

  const submitOffer = () => {
    if (!offerMessage.current.value) alert("Please enter offerMessage");
    else if (!offerPrice.current.value) alert("Please enter offerPrice");
    else
      FetchService.createOffer(
        currentUser.accessToken,
        propertyDetails.id,
        offerMessage.current.value,
        offerPrice.current.value
      ).then((response) => alert("Offer has been submitted"));
  };

  return (
    <React.Fragment>
   <div className='flex flex-col justify-center items-center bg-gray-100 p-2 rounded-lg shadow-md max-w-xs mx-auto'>
  <h3 className="text-lg font-bold mb-2 text-gray-800">Make an Offer</h3>

  {/* Message Input */}
  <div className="w-full mb-2">
    <label className="block text-md font-semibold text-gray-700 mb-1" htmlFor="offerMessage">Your Message</label>
    <textarea 
      id="offerMessage" 
      ref={offerMessage} 
      disabled={!currentUser} 
      rows="2" // Keep the height small
      className="w-full p-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-200"
      placeholder={!currentUser ? "Log in to send a message." : "Write here..."}
    ></textarea>
  </div>

  {/* Price Input */}
  <div className="w-full mb-2">
    <label className="block text-md font-semibold text-gray-700 mb-1" htmlFor="offerPrice">Your Price</label>
    <input 
      type="number" 
      id="offerPrice" 
      ref={offerPrice} 
      disabled={!currentUser}
      className="w-full p-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-200"
      placeholder={!currentUser ? "Log in to offer a price." : "Enter price..."}
    />
  </div>

  {/* Submit Button */}
  <button
    onClick={submitOffer}
    disabled={!hasRole(currentUser, "CUSTOMER")}
    className={`w-full py-1 text-md font-semibold text-white rounded-md transition duration-300 ease-in-out ${hasRole(currentUser, "CUSTOMER") ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-400 cursor-not-allowed'}`}
  >
    Make an Offer
  </button>
</div>



      <div ref={notification}></div>
      {!hasRole(currentUser, "CUSTOMER") && (
        <p>
          <Link to="/login">Login</Link> to make an offer
        </p>
      )}
    </React.Fragment>
  );
};

export default SubmitOffer;
