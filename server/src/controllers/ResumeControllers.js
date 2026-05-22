import Resume from "../models/resumeModel.js";
import router from "../routes/resumeRoute.js";


// CREATE RESUME
export const createResume = async (req, res) => {
  try {
    const { title, userId } = req.body;

 
    if (!title || !userId) {
      return res.status(400).json({
        message: "Title and UserId are required",
      });
    }

   
    const newResume = new Resume({
      title,
      userId,
    });
    await newResume.save();
    res.status(201).json(newResume);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
//GET USER RESUME
export const getUserResumes = async (req, res) => {

  try {

    const { userId } = req.query;

    const resumes = await Resume.find({ userId });

    res.json(resumes);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }

};

export const saveSection = async (req, res) => {

  try {

    const { id } = req.params;

    const updatedResume = await Resume.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );

    res.json(updatedResume);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }

};
export const getResumeById = async (req, res) =>{
  try {
    const { id } = req.params;
    const resume = await Resume.findById(id);
    if (resume) {
      res.json(resume);
    } else {
      res.status(404).json({ message: "Resume not found" });
    }

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export const deleteResume = async (req, res) => {
  try {
    const { id } = req.params;
    await Resume.findByIdAndDelete(id);
    res.json({ message: "Resume deleted" });
  }
  catch(error){
    res.status(500).json({ message: error.message });
  }
}