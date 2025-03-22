import { sideMenuItems } from "./data";
import { useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { useState } from "react";

export default function Sidebar() {
  const [children, setChildren] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const navigate = useNavigate();

  function clickHandler(item) {
    setSelectedItem(item.label);

    // Update children state based on the clicked item
    if (item.children) {
        if (children.length>0) {
            setChildren([])
            setSelectedItem(null)
        }
        else{
            setChildren(item.children);
        }
    } else {
      setChildren([]); // Clear children if the item has no children
    }

    // Navigate only if the item has no children
    if (!item.children) {
      navigate(item.to);
    }
  }

  return (
    <div className="h-screen w-96 bg-amber-200 py-14 flex flex-col items-start pl-8 gap-4">
      {/* Render top-level menu items */}
      {sideMenuItems.map((item, index) => (
        <div key={index}>
          {/* Parent button */}
          <button
            onClick={() => clickHandler(item)}
            className="flex items-center gap-2"
          >
            {item.label}
            {selectedItem === item.label ? <FaMinus /> : <FaPlus />}
          </button>

          {/* Render child menu items only for the selected parent */}
          {selectedItem === item.label &&
            children.length > 0 &&
            children.map((child, childIndex) => (
              <button
                key={childIndex}
                className="flex items-center gap-2 ml-4"
                onClick={() => clickHandler(child)}
              >
                {child.label}
                {selectedItem === child.label ? <FaMinus /> : <FaPlus />}
              </button>
            ))}
        </div>
      ))}
    </div>
  );
}

