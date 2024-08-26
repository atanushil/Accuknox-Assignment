const Category = require("../models/Schema"); // Import the Category model
const Widget = require("../models/Schema"); 

// Get all categories
exports.getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find(); // Fetch all categories from the database
    res.status(200).json(categories); // Respond with the categories data
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};



// add widget into category

exports.addWidgetToCategory = async (req, res) => {
  const { categoryId } = req.params; 
  const { widget } = req.body; 

  try {
    // Find the category by name
    const category =  Category.findByid({ categoryId });

    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }

    // Create a formatted widget
    const formattedWidget = {
      heading: widget.heading || "Default Heading",
      status: widget.status || false,
      chart: widget.chart || "default",
      data: widget.data.map((data) => ({
        color: data.color,
        text: data.text,
        value: data.value,
      })),
    };

    // Add the formatted widget to the category
    category.widget.push(formattedWidget);

    // Save the updated category
    await category.save();
    
    // Respond with the updated category
    res.status(200).json(category);
  } catch (error) {
    // Handle any errors
    res.status(500).json({ message: "Server Error", error });
  }
};



exports.updateWidgetStatus = async (req, res) => {
  const { categoryName, widgetHeading, newStatus } = req.body;

  if (!categoryName || !widgetHeading || typeof newStatus !== "boolean") {
    return res.status(400).json({ message: "Invalid input" });
  }

  try {

    const result = await Widget.findOneAndUpdate(
      {
        categoryName: categoryName,
        "widget.heading": widgetHeading,
      },
      {
        $set: {
          "widget.$.status": newStatus,
        },
      },
      {
        new: true, 
        runValidators: true, 
      }
    );

    if (!result) {
      return res.status(404).json({ message: "Widget not found" });
    }

    res
      .status(200)
      .json({ message: "Widget status updated successfully", widget: result });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
