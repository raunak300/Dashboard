# 📊 Dashboard Analytics — Full Stack Application

A full-stack dashboard project built with **React**, **TailwindCSS**, **Framer Motion**, **Recharts**, **Zustand**, and an **Express.js** backend.  
The application dynamically loads JSON data from the server and allows users to generate **Pie Charts** and **Bar Graphs** from selected fields.

---

## 🚀 Features

### **Frontend**
- Built with **React + Vite**
- Fetches datasets (`data1`, `data2`, `data3`) from backend on startup
- Interactive analytics interface:
  - Choose dataset (data1 or data2)
  - Select graph type: **Bar Graph** or **Pie Chart**
  - Select parameters using dynamic checkboxes
  - Smooth animations for transitions
- Technologies:
  - **Recharts** – chart rendering  
  - **Framer Motion** – animations  
  - **TailwindCSS** – styling  
  - **Zustand** – global state management  

### **Key Components**
- **FilledRegion** – Graph selection + rendering panel  
- **EmptyRegion** – Placeholder UI when no graph is selected  
- **BarLines** – Bar graph renderer  
- **PieChart** – Pie chart renderer  

---

## 🛠 Backend
- Built with **Express.js**
- Dynamically loads all `.json` files inside `/data`
- Returns combined data via:

```http
GET /getdata
```
## 📊 Chart Logic

### **Bar Graph (`BarLines.jsx`)**
- Uses the **first key** of the dataset objects as the X-axis
- Each selected field is rendered as an individual bar series
- Automatically assigns distinct colors using **HSL-based generation**
- Fully responsive using `ResponsiveContainer`

### **Pie Chart (`PieChart.jsx`)**
- Aggregates the **total sum** of each selected field across all data rows
- Renders each field as a labeled pie slice
- Smooth, responsive, and adjusts automatically to container size
