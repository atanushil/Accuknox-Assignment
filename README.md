
---

# [Dashboard Management](https://accuknox-assignment-ui.vercel.app/dashboard)

Welcome to the Widget Dashboard Website! This website allows users to manage and personalize a dashboard with various widgets, each displaying different types of charts. The site includes features for searching, adding, deleting widgets, and personalizing the dashboard. Also, this website is designed to be fully responsive across various breakpoints:

<details>
  <summary> Extra Small Devices (Phones, 480px and below)</summary>
  
  ![Dashboard Screenshot](/client/public/ExtraSmall.png)

  The layout adapts to a single-column view with a hamburger menu for the navbar, and widgets are stacked vertically for optimal readability and easy scrolling.
</details>

<details>
  <summary> Small Devices (Tablets, 481px to 768px)</summary>
  
  ![Dashboard Screenshot](/client/public/SmallDevice.png)

  The layout adjusts to a two-column view where possible, with the navbar remaining a hamburger menu but offering more space for items, while widgets are displayed in a grid format with fewer columns to maintain clarity.
</details>

<details>
  <summary> Medium Devices (Small Laptops, 769px to 1024px) </summary>
  
  ![Dashboard Screenshot](/client/public/MediumDevice.png)

  The layout switches to a three-column view, with the navbar potentially displaying more items and reducing reliance on the hamburger menu, while widgets are organized in a more compact grid.
</details>

<details>
  <summary>Large Devices (Desktops, 1025px and above)</summary>
  
  ![Dashboard Screenshot](/client/public/dashboardPage.png)

  The layout utilizes the full multi-column design for maximum screen space, with the navbar fully expanded and all links visible, and widgets displayed in a flexible grid layout to effectively use the larger screen size.
</details>



**Visit the [Dashboard Management](https://accuknox-assignment-ui.vercel.app/dashboard) to explore more details. Please note, it's only a User Interface. To try out all the features, you'll need to set up the app on your own device using Node.js, npm, and Mongoose.**


## Features

<details>
  <summary> Home Page </summary>

  Displays the main content and includes navigation to the dashboard.
  
  - **Navbar:** Contains 'Home' (active) and 'Dashboard' links.
  - **Content:** Displays the main content of the home page.
  - **Footer:** Always visible at the bottom.

</details>

<details>
  <summary> Dashboard Page</summary>

  - Personalize the dashboard by selecting which widgets to display.
  - Refresh the dashboard to update the view.
  - View widgets organized by category.
  - Add new widgets with various chart types.
  - Search for widgets by name and navigate to specific widgets.
  - Optionally delete widgets from the dashboard.

</details>

## Components

<details>
  <summary> Home Page </summary>
  
  - **Navbar:** Links to "Home" (active) and "Dashboard."
  - **Content:** Main content of the home page.
  - **Footer:** Contains developer details and contact information.
    
</details>

<details>
  <summary> Dashboard Page </summary>
  
  - **Navbar:** Contains links to "Home" (inactive), "Dashboard" (active), and a "SearchBar" (user can search for widgets).
  - **Content:**
    - **Personalize Button:** Allows users to select widgets to display.
    - **Refresh Button:** Refreshes the dashboard view.
    - **Category Name:** Displays the current widget category.
    - **Category-wise Widgets:** Shows widgets organized by category.
    - **Add Widget Dialog:**
      - **Input:** For widget name.
      - **Chart Selector:** Options for pie chart, spline chart, stack bar chart.
      - **Data Input:** Optional text and value fields.
      - **Cancel Button:** Closes the dialog without saving.
      - **Confirm Button:** Saves the widget and updates the dashboard.
        
</details>

<details>
  <summary>Widget Page</summary>
  
  - Displays the category name, widget name, and chart view.
</details>

**Many more...**

## Getting Started

To get started with the project:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/atanushil/Accuknox-Assignment.git
   ```

2. **Navigate to the Project Directory**:
   ```bash
   cd client
   ```

3. **Install Dependencies**:
   ```bash
   npm install
   ```

4. **Start the Development Server**:
   ```bash
   npm run dev
   ```

5. **Open Your Browser** and go to `http://localhost:5173` to view the website.

---

## Backend Setup

To set up and run the backend with `nodemon`, follow these steps:

1. **Navigate to the Backend Directory**:
   ```bash
   cd backend
   ```

2. **Install Backend Dependencies**:
   ```bash
   npm install
   ```

3. **Install `nodemon` Globally** (if not already installed):
   ```bash
   npm install -g nodemon
   ```

4. **Run the Backend Server with `nodemon`**:
   ```bash
   nodemon index.js
   ```

   This will start the backend server and automatically restart it whenever changes are detected in the source code.

5. **Open Your Browser** and go to `http://localhost:8080` to interact with the backend API.

---


## Usage

- **Navigate** to the dashboard by clicking the "Dashboard" link in the Navbar.
- **Personalize** your dashboard by clicking the "Personalize" button and selecting widgets.
- **Add a Widget** by clicking the "Add Widget" button, filling out the form, and clicking "Confirm."
- **Search** for widgets by their name using the search bar in the Navbar.
- **View Widget Details** and manage widgets (hover to show delete icon).
- **Delete Widgets** by clicking the delete icon that appears when hovering over a widget.

---
