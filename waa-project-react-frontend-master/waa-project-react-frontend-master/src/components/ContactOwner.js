import React, {useContext, useRef} from "react";
import FetchService from "../service/FetchService";
import UserContext from "../context/UserContext";

const ContactOwner = ({ propertyDetails }) => {

  const currentUser = useContext(UserContext);
  const contactOwnerMessage = useRef();

  const handleContactOwner = () => {
    FetchService.createMessageSession(
        currentUser.accessToken,
        propertyDetails.id,
        contactOwnerMessage.current.value
    ).then(() => alert('Message Sent!'));
  }

  return (
      currentUser && (
          <React.Fragment>
         <div className='flex flex-col justify-center items-center bg-gray-100 p-4 rounded-lg shadow-md max-w-xs mx-auto'>
  <h3 className="text-lg font-bold mb-3 text-gray-800">Send Owner a Message</h3>

  <div className="w-full mb-3">
    <label className="block text-md font-semibold text-gray-700 mb-1" htmlFor="message">Message</label>
    <textarea 
      id="message" 
      ref={contactOwnerMessage} 
      rows="4" // Reduced rows for a smaller height
      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder="Write your message here..."
    ></textarea>
  </div>

  <button 
    onClick={handleContactOwner} 
    className="w-full py-2 text-md font-semibold bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300 ease-in-out"
  >
    Contact Owner
  </button>
</div>


          </React.Fragment>
      )
  )
};

export default ContactOwner;
