import React, { useContext, useEffect, useRef, useState } from "react";
import FetchService from "../../service/FetchService";
import Property from "../../components/Property/Property";
import UserContext from "../../context/UserContext";
import './Homepage.css';
import hasRole from "../../util/hasRole";

const Hero = () => {
  return (
    <div className="relative h-[500px] w-full overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg')",
        }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Discover your perfect home
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl">
          With the most complete source of homes for sale & real estate near you
        </p>
      </div>
    </div>
  )
}

const Homepage = () => {
    const inputName = useRef(null);
    const inputDesc = useRef(null);
    const inputMin = useRef(null);
    const inputMax = useRef(null);
    const currentUser = useContext(UserContext);

    const [properties, setProperties] = useState([]);
    const [savedPropertiesState, setSavedPropertiesState] = useState([]);
    const [refresh, setRefresh] = useState(true);

    useEffect(() => {
        FetchService.getAllProperties(inputName.current.value, inputDesc.current.value, inputMin.current.value, inputMax.current.value)
            .then(response => {
                setProperties(response.data);
            }).catch(e => {
                console.log("error " + e)
            });

        if (hasRole(currentUser, "CUSTOMER") && !hasRole(currentUser, "ADMIN")) {
            FetchService.getSavedProperties(currentUser.accessToken)
                .then(response => setSavedPropertiesState(response.data))
        }
    }, [refresh, currentUser]);

    const search = (e) => {
        e.preventDefault();
        setRefresh(!refresh);
    }

    return (
        <div className='homepage'>
            <Hero />
            <h1 className='text-2xl font-bold mt-8'>Trending Properties</h1>

            <form className='flex w-full justify-center gap-5 mt-4' onSubmit={search} style={{ textAlign: "center" }}>
                <input
                    type="text"
                    className='border-2 border-slate-200 p-2 rounded'
                    placeholder="Property Name"
                    ref={inputName}
                />
                <input
                    type="text"
                    className='border-2 border-slate-200 p-2 rounded'
                    placeholder="Description"
                    ref={inputDesc}
                />
                <input
                    type="text"
                    className='border-2 border-slate-200 p-2 rounded'
                    placeholder="Min price"
                    ref={inputMin}
                />
                <input
                    type="text"
                    className='border-2 border-slate-200 p-2 rounded'
                    placeholder="Max price"
                    ref={inputMax}
                />
                <button type="submit" className='px-5 py-2 bg-blue-500 font-semibold text-white rounded'>Search</button>
            </form>

            <div className='properties'>
                {properties.map(property => (
                    <Property key={property.id} property={property} savedPropertiesState={savedPropertiesState} />
                ))}
            </div>
        </div>
    );
}

export default Homepage;