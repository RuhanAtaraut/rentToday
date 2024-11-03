import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FetchService from "../../service/FetchService";
import hasRole from "../../util/hasRole";
import ContactOwner from "../ContactOwner";
import SubmitOffer from "../SubmitOffer";
import UserContext from "../../context/UserContext";
import randomPictureProvider from "../../util/randomPictureProvider"; // Import the random picture provider
import './PropertyDetails.css';
import { Carousel } from "antd";

const PropertyDetails = () => {
  const currentUser = useContext(UserContext);
  const { slug } = useParams();
  const [propertyDetails, setPropertyDetails] = useState({});
  const pictures = Array.from({ length: 3 }, (_, index) => randomPictureProvider(index + 1)); // Generate an array of random pictures

  useEffect(() => {
    FetchService.getPropertyBySlug(slug).then((response) =>
      setPropertyDetails(response.data)
    );
  }, [slug]);
  const contentStyle = {
    margin: 0,
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };
  return (
    <div className="flex flex-col property-details-content mt-16 justify-center  w-full">
      <div className="property-details w-full flex flex-col items-center">
        <h2 className='text-4xl font-bold'>{propertyDetails.name}</h2>
        <p className='text-xl font-semibold'>{propertyDetails.description}</p>

        <div className="">
        <Carousel arrows autoplay className='w-[800px] '>
          {pictures.map((pic, index) => (
            <img key={index} className="h-[500px] w-[500px]" src={pic} alt={`Property Image ${index + 1}` } style={contentStyle}/>
          ))}
        </Carousel>
        </div>
      </div>
      {!hasRole(currentUser, "OWNER") && (
        // <div>
          <div className="flex wb-10 justify-evenly mt-5">
            <div className='p-5 bg-slate-200 rounded mb-8'><ContactOwner propertyDetails={propertyDetails} /></div>
            <div className='p-3 bg-slate-200 rounded mb-8'><SubmitOffer propertyDetails={propertyDetails} /></div>
          </div>
        // </div>
      )}
    </div>
  );
};

export default PropertyDetails;
