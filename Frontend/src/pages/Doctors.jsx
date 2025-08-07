import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Doctors = () => {
  const { speciality } = useParams();
  const [filterDoc, setFilterDoc] = useState([]);
  const [showFilter, setShowFilter] = useState(false);

  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter((doc) => doc.speciality === speciality));
    } else {
      setFilterDoc(doctors);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [doctors, speciality]);

  return (
    <div className="p-4 sm:p-6">
      <p className="text-gray-600 text-sm mb-4">
        Browse through the doctors specialist.
      </p>

      <div className="flex flex-col sm:flex-row items-start gap-6">
        {/* Toggle Filter (Mobile Only) */}
        <button
          className={`sm:hidden py-1 px-3 border rounded text-sm transition-all ${
            showFilter ? "bg-indigo-500 text-white" : "bg-white text-gray-700"
          }`}
          onClick={() => setShowFilter((prev) => !prev)}
        >
          Filters
        </button>

        {/* Filter Options */}
        <div
          className={`flex-col gap-3 text-sm text-gray-600 ${
            showFilter ? "flex" : "hidden sm:flex"
          }`}
        >
          <p
            onClick={() =>
              speciality === "General physician"
                ? navigate("/doctors")
                : navigate("/doctors/General physician")
            }
            className={`cursor-pointer w-[94vw] sm:w-52 py-2 px-4 border rounded ${
              speciality === "General physician"
                ? "bg-indigo-100 text-black border-indigo-300"
                : "border-gray-300"
            }`}
          >
            General physician
          </p>

          <p
            onClick={() =>
              speciality === "Gynecologist"
                ? navigate("/doctors")
                : navigate("/doctors/Gynecologist")
            }
            className={`cursor-pointer w-[94vw] sm:w-52 py-2 px-4 border rounded ${
              speciality === "Gynecologist"
                ? "bg-indigo-100 text-black border-indigo-300"
                : "border-gray-300"
            }`}
          >
            Gynecologist
          </p>

          <p
            onClick={() =>
              speciality === "Dermatologist"
                ? navigate("/doctors")
                : navigate("/doctors/Dermatologist")
            }
            className={`cursor-pointer w-[94vw] sm:w-52 py-2 px-4 border rounded ${
              speciality === "Dermatologist"
                ? "bg-indigo-100 text-black border-indigo-300"
                : "border-gray-300"
            }`}
          >
            Dermatologist
          </p>

          <p
            onClick={() =>
              speciality === "Pediatricians"
                ? navigate("/doctors")
                : navigate("/doctors/Pediatricians")
            }
            className={`cursor-pointer w-[94vw] sm:w-52 py-2 px-4 border rounded ${
              speciality === "Pediatricians"
                ? "bg-indigo-100 text-black border-indigo-300"
                : "border-gray-300"
            }`}
          >
            Pediatricians
          </p>

          <p
            onClick={() =>
              speciality === "Neurologist"
                ? navigate("/doctors")
                : navigate("/doctors/Neurologist")
            }
            className={`cursor-pointer w-[94vw] sm:w-52 py-2 px-4 border rounded ${
              speciality === "Neurologist"
                ? "bg-indigo-100 text-black border-indigo-300"
                : "border-gray-300"
            }`}
          >
            Neurologist
          </p>

          <p
            onClick={() =>
              speciality === "Gastroenterologist"
                ? navigate("/doctors")
                : navigate("/doctors/Gastroenterologist")
            }
            className={`cursor-pointer w-[94vw] sm:w-52 py-2 px-4 border rounded ${
              speciality === "Gastroenterologist"
                ? "bg-indigo-100 text-black border-indigo-300"
                : "border-gray-300"
            }`}
          >
            Gastroenterologist
          </p>
        </div>

        {/* Doctors Cards */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6">
          {filterDoc.map((item, index) => (
            <div
              onClick={() => navigate(`/appointment/${item._id}`)}
              className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-transform duration-300"
              key={index}
            >
              <img
                className="bg-blue-50 w-full h-40 object-cover"
                src={item.image}
                alt={item.name}
              />
              <div className="p-4">
                <div
                  className={`flex items-center gap-2 text-sm ${
                    item.available ? "text-green-500" : "text-gray-500"
                  }`}
                >
                  <span
                    className={`w-2 h-2 rounded-full ${
                      item.available ? "bg-green-500" : "bg-gray-500"
                    }`}
                  ></span>
                  <p>{item.available ? "Available" : "Not Available"}</p>
                </div>
                <p className="text-gray-900 text-lg font-semibold">{item.name}</p>
                <p className="text-gray-600 text-sm">{item.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
