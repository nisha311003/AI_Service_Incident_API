const mongoose = require('mongoose');
const Incident = require('../models/incident');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=> console.log('MongoDB connected'));

const seedData= [
    {
        title: "AI Surveillance Overreach",
        description: "AI system deployed mass surveillance without proper oversight.",
        severity: "High",
        reported_at: new Date("2025-04-01T10:30:00Z")
    },
    {
        title: "Autonomous Vehicle Glitch",
        description: "AV failed to detect a pedestrian, resulting in a safety alert.",
        severity: "Low",
        reported_at: new Date("2025-04-03T08:15:00Z")

    }
];
Incident.insertMany(seedData)
  .then(() => {
    console.log("✅ Sample incidents inserted successfully.");
    mongoose.disconnect();
  })
  .catch((err) => {
    console.error("❌ Error inserting sample incidents:", err);
    mongoose.disconnect();
  });