const express = require("express");
const cors = require("cors");
const { GoogleGenerativeAI } = require("@google/generative-ai");
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));
require('dotenv').config();
const router=require("./Router/route")




   let mongoose = require('mongoose');

    mongoose.connect("mongodb+srv://Muhammad_Sheharyar:VUdYHS7Fnxzc1CA1@cluster0.gqwbzi9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
        {

    })

    .then(()=>{
        console.log("Connected to MongoDB");
    })   
    .catch((err)=>{
        console.log("Error connectiong to mongoDB",err)
    })

    app.use("/api",router);



// ---- Gemini 2.0 Flash Model ----
const genAI = new GoogleGenerativeAI("");
const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash",
});

app.post("/analyze", async (req, res) => {
  try {
    console.log("API HIT HUA");
    console.log("BODY:", req.body);

    const { resumeText, jobDescription } = req.body;

    if (!resumeText || !jobDescription) {
      return res.json({ error: "Resume or Job Description missing!" });
    }

    const prompt = `
    Compare this resume with the job description.
    Give:
    - Match percentage (0-100%)
    - Strengths
    - Weaknesses
    - Final verdict

    Resume:
    ${resumeText}

    Job Description:
    ${jobDescription}
    `;

    const result = await model.generateContent(prompt);

    res.json({
      result: result.response.text(),
    });

  } catch (err) {
    console.error("ERROR:", err);
    res.json({ error: err.message });
  }
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});


 



