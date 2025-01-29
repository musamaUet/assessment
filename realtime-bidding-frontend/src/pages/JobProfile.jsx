import React, { useState, ChangeEvent, useEffect } from "react";
import { getJobProfile, updateJobProfile } from "@/redux/slices/job/job.action";
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from "react-redux";
import { isEmpty } from 'lodash';
import { IUpdateJobProfile } from "@/interfaces/job-profile.interface";

type FieldsType = {
  YearsOfExperience: string;
  FirstName: string;
  LastName: string;
  PhoneNumber: string;
  City: string;
  Email: string;
};

const DefaultFields: FieldsType = {
  YearsOfExperience: "",
  FirstName: "",
  LastName: "",
  PhoneNumber: "",
  City: "",
  Email: "",
};

const JobProfile: React.FC = () => {
  const dispatch: any = useDispatch();
  const { jobProfile } = useSelector((state: any) => state.jobProfile);

  console.log('jobProfile', jobProfile);

  const [fields, setFields] = useState<FieldsType>(DefaultFields);

  useEffect(() => {
    dispatch(getJobProfile());
  }, []);

  useEffect(() => {
    if(!isEmpty(jobProfile)) {
      setFields({
        FirstName: jobProfile?.firstName,
        LastName: jobProfile?.lastName,
        Email: jobProfile?.email,
        YearsOfExperience: jobProfile?.yearsOfExperience,
        PhoneNumber: jobProfile?.phoneNumber,
        City: jobProfile?.city,
      });
    }
  }, [jobProfile]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFields((prevFields) => ({ ...prevFields, [name]: value }));
  };

  const handleSave = () => {
    if (typeof window !== "undefined" && "chrome" in window) {
      // Send message to the content script
      window.postMessage({ type: "SAVE_DETAILS", details: fields }, "*");
      const payload: IUpdateJobProfile = {
        firstName: fields.FirstName,
        lastName: fields.LastName,
        email: fields.Email,
        yearsOfExperience: fields.YearsOfExperience,
        phoneNumber: fields.PhoneNumber,
        city: fields.City,
      }
      dispatch(updateJobProfile(payload));
      toast.success('Fields updated successfully, you are now ready to use TeemoAI');
    } else {
      console.error("Chrome APIs are not available.");
      toast.error('Chrome APIs are not available.');
    }
  };

  return (
    <div className="h-[500px] flex-shrink-0 antialiased">
      <div className="p-4 bg-gray-100 mt-[70px] min-h-screen flex justify-center items-center">
        <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-lg">
          <h1 className="text-2xl font-bold mb-4">Linkedin Profile Details</h1>
          <form>
            {Object.keys(fields).map((key) => (
              <div key={key} className="mb-4">
                <label htmlFor={key} className="block text-gray-700 font-medium">
                  {key}
                </label>
                <input
                  type="text"
                  id={key}
                  name={key}
                  value={(fields as Record<string, string>)[key]}
                  onChange={handleChange}
                  className="border rounded-lg w-full p-2"
                />
              </div>
            ))}
          </form>
          <button
            onClick={handleSave}
            className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobProfile;