import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { SearchContext } from '../../contextApi/DoctorProvider';
import { IoIosArrowBack } from 'react-icons/io';

const ChamberDetails = () => {
  const { id } = useParams(); // string like "7"
  const { chambers, fetchChambers } = useContext(SearchContext);
  const [selectedChamber, setSelectedChamber] = useState(null);
  const navigate = useNavigate();

  // Fetch once or only if empty (prevents infinite loop)
  useEffect(() => {
    if (!chambers || chambers.length === 0) {
      fetchChambers("");
    }
  }, [chambers?.length, fetchChambers]);

  // Find by string id
  useEffect(() => {
    if (chambers && chambers.length > 0) {
      const chamber = chambers.find((cham) => String(cham.id) === String(id));
      setSelectedChamber(chamber || null);
    }
  }, [id, chambers]);

  if (!selectedChamber) {
    return (
      <>
        <button
          onClick={() => navigate("/chamber")}
          className="bg-blue-600 text-white px-2 m-4 py-2 rounded hover:bg-blue-700"
        >
          <IoIosArrowBack />
        </button>
        <div className="p-6">Chamber not found or loading…</div>
      </>
    );
  }

  const { name, location, contact, specialization, establishedYear } = selectedChamber;

  return (
    <>
      <button
        onClick={() => navigate("/chamber")}
        className="bg-blue-600 text-white px-2 m-4 py-2 rounded hover:bg-blue-700"
      >
        <IoIosArrowBack />
      </button>

      <div className="fixed bg-opacity-60 flex justify-center items-center">
        <div className="bg-white p-8 flex justify-center items-center rounded-lg w-[90vw] max-w-[800px] max-h-[90vh] overflow-y-auto relative animate-fadeIn">
          <div className="flex">
            {/* No photo in your JSON; show placeholder or hide */}
            {/* <div className="h-[300px] overflow-hidden">
              <img className="h-full object-cover" src={selectedChamber.photo} alt={name} />
            </div> */}

            <div className="ml-4 mt-8">
              <h2><strong>Name:</strong> {name}</h2>

              <p>
                <strong>Address: </strong>
                {location?.address}
                {location?.city ? `, ${location.city}` : ""}
                {location?.state ? `, ${location.state}` : ""}
                {location?.postalCode ? `, ${location.postalCode}` : ""}
              </p>

              <p><strong>Contact: </strong>{contact?.phone || "—"}</p>
              <p><strong>Email: </strong>{contact?.email || "—"}</p>
              <p><strong>Specialization: </strong>{specialization || "—"}</p>
              <p><strong>Established: </strong>{establishedYear || "—"}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChamberDetails;
