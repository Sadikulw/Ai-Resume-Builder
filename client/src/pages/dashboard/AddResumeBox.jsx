import { PlusCircle } from "lucide-react";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { useNavigate } from "react-router-dom";
import api from "@/api/axios";
import { useUser } from "@clerk/clerk-react";
const AddResumeBox = ({ setTitle }) => {
  const { user } = useUser();
  const [openDialog, setOpenDialog] = useState(false);
  const [enterTitle, setEnterTitle] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleCreate = async () => {
    if (!enterTitle.trim()) {
      alert("Please enter resume title");
      return;
    }

    try {
      setLoading(true);
      setTitle(enterTitle);

     
      const response = await api.post("/resume/create", {
        title: enterTitle,
        userId: user.id,
      });
    
     
      console.log("Resume created:", response.data);

     
      setOpenDialog(false);

     
      navigate(`resume-builder/${response.data._id}`);
    } catch (error) {
      console.log("API Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div
        className="h-[180px] w-40 border border-dashed flex items-center justify-center bg-gray-100 shadow-md hover:bg-gray-200 hover:scale-110 hover:border-blue-500 transition-all duration-300 rounded-md cursor-pointer"
        onClick={() => setOpenDialog(true)}
      >
        <PlusCircle size={32} className="text-gray-500" />
      </div>

      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Create New Resume</DialogTitle>

            <DialogDescription>
              Give your resume a title.
            </DialogDescription>
          </DialogHeader>

          <input
            type="text"
            placeholder="Resume title"
            className="w-full border rounded-md p-2 mt-4"
            onChange={(e) => setEnterTitle(e.target.value)}
            value={enterTitle}
          />

          <button
            type="button"
            disabled={loading}
            className="w-full mt-4 bg-[#3793C4] text-white py-2 rounded-md disabled:opacity-50"
            onClick={handleCreate}
          >
            {loading ? "Creating..." : "Create"}
          </button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddResumeBox;