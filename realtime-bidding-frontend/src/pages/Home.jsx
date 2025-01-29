import JobApplicationsTable from "@/components/molecules/JobApplications";
import React from "react";

const Home: React.FC = () => {
  return (
    <div className="h-[500px] flex-shrink-0 antialiased">
      <div className="p-4 bg-gray-100 mt-[70px] min-h-screen flex justify-center items-center">
        <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-lg">
          <h1 className="text-2xl font-bold mb-4">
            All your Applied Jobs Appeared Here
          </h1>
          <h3 className="text-xl flex justify-center mb-4">Coming Soon</h3>
          <JobApplicationsTable />
        </div>
      </div>
    </div>
  );
};

export default Home;
