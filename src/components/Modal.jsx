import React from "react";

const Modal = ({ selectedDoctor, onClose }) => {
  if (!selectedDoctor) {
    return null;
  }
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-[1000]"
      onClick={onClose}
    >
      <div
        className="bg-white p-8 rounded-lg shadow-lg w-[90vw] max-w-[800px] max-h-[90vh] overflow-y-auto relative animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        <div className=" flex">
            
        <div className=" h-[300px] overflow-hidden">
            <img
              className=" h-full object-cover"
              src={selectedDoctor.photo}
              alt={selectedDoctor.name}
              />
          </div>
          <div className="ml-4 mt-8">

        <h2><strong>Name:</strong> {selectedDoctor.name}</h2>
        <p>
          <strong>Speciality: </strong> {selectedDoctor.specialization}
        </p>
        <p>
          <strong>Hospital: </strong> {selectedDoctor.hospital}
        </p>
        <p>
          <strong>Phone: </strong> {selectedDoctor.contact}
        </p>
        <p>
          <strong>Email: </strong> {selectedDoctor.email}
        </p>
        <p>
          <strong>Days Visited: </strong> {selectedDoctor.dayVisited}
        </p>
          </div>
              </div>
      </div>
    </div>
  );
};

export default Modal;
