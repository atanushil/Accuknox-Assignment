const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const categoryRoutes = require('./routes/AppRoutes'); 
const cors=require("cors");
const app = express();


app.use(bodyParser.json()); 
app.use(cors({
    origin:"*"
}))
// MongoDB connection
mongoose.connect('mongodb://localhost:27017/DashboardApp')
.then(() => console.log('MongoDB connected'))
.catch(err => console.log('MongoDB connection error:', err));

// Use the category routes
app.use('/api', categoryRoutes);

// Error handling middleware
app.use((req, res, next) => {
  res.status(404).json({ message: 'Route not found' });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Server Error', error: err.message });
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


const sampleData = [
  {
    categoryName: "CSPM",
    widget: [
      {
        heading: "Security Overview",
        status: true,
        chart: "PieChart",
        data: [
          { color: "#dc2626", text: "Failed", value: 45 },
          { color: "#16a34a", text: "Passed", value: 75 },
          { color: "#f59e0b", text: "In Progress", value: 30 },
          { color: "#f87171", text: "Not Available", value: 35 },
          { color: "#3b82f6", text: "Compliant", value: 70 },
          { color: "#6b7280", text: "Pending", value: 20 },
          { color: "#a855f7", text: "Reviewed", value: 50 },
        ],
      },
      {
        heading: "Monthly Trends",
        status: false,
        chart: "SplineChart",
        data: [
          { color: "#dc2626", text: "Jan", value: 40 },
          { color: "#16a34a", text: "Feb", value: 60 },
          { color: "#f59e0b", text: "Mar", value: 55 },
          { color: "#3b82f6", text: "Apr", value: 70 },
          { color: "#f87171", text: "May", value: 65 },
          { color: "#10b981", text: "Jun", value: 80 },
          { color: "#eab308", text: "Jul", value: 75 },
        ],
      },
      {
        heading: "Compliance Score",
        status: true,
        chart: "StackBarChart",
        data: [
          { color: "#dc2626", text: "Critical", value: 50 },
          { color: "#16a34a", text: "High", value: 45 },
          { color: "#f59e0b", text: "Medium", value: 60 },
          { color: "#3b82f6", text: "Low", value: 35 },
          { color: "#10b981", text: "None", value: 10 },
          { color: "#a855f7", text: "Reviewed", value: 20 },
          { color: "#d4d4d4", text: "Pending", value: 15 },
        ],
      },
      {
        heading: "Incident Distribution",
        status: false,
        chart: "PieChart",
        data: [
          { color: "#dc2626", text: "High", value: 25 },
          { color: "#16a34a", text: "Medium", value: 50 },
          { color: "#f59e0b", text: "Low", value: 20 },
          { color: "#3b82f6", text: "Info", value: 5 },
          { color: "#f87171", text: "Unknown", value: 15 },
          { color: "#10b981", text: "Warning", value: 30 },
          { color: "#eab308", text: "Critical", value: 25 },
        ],
      },
      {
        heading: "System Health",
        status: true,
        chart: "StackBarChart",
        data: [
          { color: "#3b82f6", text: "CPU Usage", value: 70 },
          { color: "#16a34a", text: "Memory Usage", value: 65 },
          { color: "#f59e0b", text: "Disk Usage", value: 60 },
          { color: "#dc2626", text: "Network Usage", value: 80 },
          { color: "#f87171", text: "I/O Operations", value: 55 },
          { color: "#10b981", text: "Cache Usage", value: 45 },
          { color: "#eab308", text: "Database Usage", value: 50 },
        ],
      },
    ],
  },
  {
    categoryName: "CWPP",
    widget: [
      {
        heading: "Threat Detection",
        status: true,
        chart: "PieChart",
        data: [
          { color: "#dc2626", text: "Critical", value: 30 },
          { color: "#16a34a", text: "Low", value: 70 },
          { color: "#f59e0b", text: "Medium", value: 45 },
          { color: "#3b82f6", text: "Info", value: 20 },
          { color: "#f87171", text: "Unknown", value: 10 },
          { color: "#10b981", text: "Warning", value: 25 },
          { color: "#eab308", text: "Reviewed", value: 15 },
        ],
      },
      {
        heading: "Vulnerability Trends",
        status: false,
        chart: "SplineChart",
        data: [
          { color: "#dc2626", text: "Jan", value: 40 },
          { color: "#16a34a", text: "Feb", value: 60 },
          { color: "#f59e0b", text: "Mar", value: 55 },
          { color: "#3b82f6", text: "Apr", value: 65 },
          { color: "#f87171", text: "May", value: 70 },
          { color: "#10b981", text: "Jun", value: 75 },
          { color: "#eab308", text: "Jul", value: 80 },
        ],
      },
      {
        heading: "Risk Assessment",
        status: true,
        chart: "StackBarChart",
        data: [
          { color: "#dc2626", text: "High", value: 40 },
          { color: "#16a34a", text: "Medium", value: 50 },
          { color: "#f59e0b", text: "Low", value: 30 },
          { color: "#3b82f6", text: "Minimal", value: 20 },
          { color: "#f87171", text: "No Risk", value: 60 },
          { color: "#10b981", text: "Reviewed", value: 15 },
          { color: "#eab308", text: "Pending", value: 25 },
        ],
      },
      {
        heading: "Threat by Category",
        status: false,
        chart: "PieChart",
        data: [
          { color: "#dc2626", text: "Malware", value: 40 },
          { color: "#16a34a", text: "Phishing", value: 30 },
          { color: "#f59e0b", text: "Ransomware", value: 20 },
          { color: "#3b82f6", text: "DDoS", value: 10 },
          { color: "#f87171", text: "Other", value: 25 },
          { color: "#10b981", text: "Botnet", value: 15 },
          { color: "#eab308", text: "Spyware", value: 10 },
        ],
      },
      {
        heading: "Vulnerability by Severity",
        status: true,
        chart: "StackBarChart",
        data: [
          { color: "#dc2626", text: "Critical", value: 25 },
          { color: "#f59e0b", text: "High", value: 40 },
          { color: "#16a34a", text: "Medium", value: 55 },
          { color: "#3b82f6", text: "Low", value: 30 },
          { color: "#10b981", text: "Info", value: 10 },
          { color: "#eab308", text: "Reviewed", value: 20 },
          { color: "#f87171", text: "Pending", value: 15 },
        ],
      },
    ],
  },
  {
    categoryName: "Application Security",
    widget: [
      {
        heading: "Vulnerabilities by Severity",
        status: true,
        chart: "PieChart",
        data: [
          { color: "#dc2626", text: "Critical", value: 25 },
          { color: "#f59e0b", text: "High", value: 35 },
          { color: "#f87171", text: "Medium", value: 45 },
          { color: "#16a34a", text: "Low", value: 20 },
          { color: "#3b82f6", text: "Info", value: 10 },
          { color: "#10b981", text: "Reviewed", value: 15 },
          { color: "#eab308", text: "Pending", value: 5 },
        ],
      },
      {
        heading: "Application Activity",
        status: false,
        chart: "SplineChart",
        data: [
          { color: "#dc2626", text: "Errors", value: 15 },
          { color: "#16a34a", text: "Success", value: 85 },
          { color: "#f59e0b", text: "Warnings", value: 20 },
          { color: "#3b82f6", text: "Info", value: 10 },
          { color: "#f87171", text: "Debug", value: 25 },
          { color: "#10b981", text: "Critical", value: 5 },
          { color: "#eab308", text: "Other", value: 15 },
        ],
      },
      {
        heading: "Threat Trends",
        status: true,
        chart: "StackBarChart",
        data: [
          { color: "#dc2626", text: "Malware", value: 30 },
          { color: "#16a34a", text: "Phishing", value: 25 },
          { color: "#f59e0b", text: "Ransomware", value: 35 },
          { color: "#3b82f6", text: "Botnet", value: 20 },
          { color: "#f87171", text: "DDoS", value: 15 },
          { color: "#10b981", text: "Spyware", value: 10 },
          { color: "#eab308", text: "Other", value: 10 },
        ],
      },
      {
        heading: "API Security",
        status: false,
        chart: "PieChart",
        data: [
          { color: "#dc2626", text: "Exposed", value: 30 },
          { color: "#16a34a", text: "Secured", value: 70 },
          { color: "#f59e0b", text: "Deprecated", value: 20 },
          { color: "#3b82f6", text: "Unknown", value: 10 },
          { color: "#f87171", text: "Not Available", value: 5 },
          { color: "#10b981", text: "Reviewed", value: 10 },
          { color: "#eab308", text: "Pending", value: 15 },
        ],
      },
      {
        heading: "Code Quality",
        status: true,
        chart: "StackBarChart",
        data: []
      },
    ],
  },
  {
    categoryName: "IAM",
    widget: [
      {
        heading: "User Access Levels",
        status: true,
        chart: "PieChart",
        data: [
          { color: "#dc2626", text: "Admin", value: 20 },
          { color: "#16a34a", text: "Editor", value: 40 },
          { color: "#f59e0b", text: "Viewer", value: 30 },
          { color: "#3b82f6", text: "Guest", value: 10 },
          { color: "#f87171", text: "Pending", value: 5 },
          { color: "#10b981", text: "Archived", value: 15 },
          { color: "#eab308", text: "Inactive", value: 25 },
        ],
      },
      {
        heading: "Access Requests",
        status: false,
        chart: "SplineChart",
        data: [
          { color: "#dc2626", text: "Pending", value: 15 },
          { color: "#16a34a", text: "Approved", value: 70 },
          { color: "#f59e0b", text: "Denied", value: 10 },
          { color: "#3b82f6", text: "In Review", value: 5 },
          { color: "#f87171", text: "Cancelled", value: 10 },
          { color: "#10b981", text: "Revised", value: 10 },
          { color: "#eab308", text: "Other", value: 10 },
        ],
      },
      {
        heading: "Role Distribution",
        status: true,
        chart: "StackBarChart",
        data: [
          { color: "#dc2626", text: "Admins", value: 30 },
          { color: "#16a34a", text: "Developers", value: 50 },
          { color: "#f59e0b", text: "Managers", value: 20 },
          { color: "#3b82f6", text: "HR", value: 10 },
          { color: "#f87171", text: "Support", value: 15 },
          { color: "#10b981", text: "Finance", value: 5 },
          { color: "#eab308", text: "Other", value: 10 },
        ],
      },
      {
        heading: "Authentication Methods",
        status: false,
        chart: "PieChart",
        data: [
        ],
      },
      {
        heading: "Access Reviews",
        status: true,
        chart: "StackBarChart",
        data: [
          { color: "#dc2626", text: "Reviewed", value: 50 },
          { color: "#16a34a", text: "Pending", value: 30 },
          { color: "#f59e0b", text: "Expired", value: 10 },
          { color: "#3b82f6", text: "Approved", value: 20 },
          { color: "#f87171", text: "Rejected", value: 5 },
          { color: "#10b981", text: "In Progress", value: 15 },
          { color: "#eab308", text: "Not Reviewed", value: 10 },
        ],
      },
    ],
  },
];

  
const Category = require('./models/Schema'); // Import the Category model

  const seedData = async () => {
    try {
      await Category.deleteMany(); // Clear existing data
      await Category.insertMany(sampleData); // Insert sample data
      console.log('Sample data inserted');
    } catch (error) {
      console.error('Error inserting sample data:', error);
    } finally {
      mongoose.connection.close(); // Close the connection
    }
  };

seedData();