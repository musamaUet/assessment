import React from "react";
import SavedQuestionsModule from "@/modules/SavedQuestionsModule";

const SavedQuestions = () => {
  return (
    <div className="h-[500px] flex-shrink-0 antialiased">
      <div className="p-4 bg-gray-100 mt-[70px] ml-[18%] min-h-screen flex justify-center items-center">
        <div className="bg-white shadow-md rounded-lg w-full">
          <SavedQuestionsModule />
        </div>
      </div>
    </div>
  );
};

export default SavedQuestions;