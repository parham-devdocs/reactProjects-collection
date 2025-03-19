import { accordian_data } from "../../data";
import { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";

export default function Accordian() {
  const [selected, setSelected] = useState(null);
  const [multipleSelection, setMultipleSelection] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);

  function selectHandler(id) {
    if (multipleSelection) {
      setSelectedItems((prev) =>
        prev.includes(id)
          ? prev.filter((item) => item !== id) // Remove item
          : [...prev, id] // Add item
      );
    } else {
      setSelected(id); // Single selection logic
    }
  }

  return (
    <div className="px-7 lg:w-[600px] w-full mx-auto mt-24 flex flex-col gap-7 items-center h-screen">
      <button
        className="px-4 py-2 bg-amber-300 text-black rounded-md"
        onClick={() => setMultipleSelection((prev) => !prev)}
      >
        Multiple Selection
      </button>

      {accordian_data.map((item) => {
        const isSelected = multipleSelection
          ? selectedItems.includes(item.id)
          : selected === item.id;

        return (
          <div
            key={item.id}
            className="w-full min-h-16 bg-amber-700 rounded-md px-5 flex items-center gap-5 flex-col py-6"
          >
            <div className="flex justify-between items-center w-full">
              <p>{item.question}</p>
              <button onClick={() => selectHandler(item.id)}>
                {isSelected ? (
                  <CiCircleMinus
                    size={25}
                    className="cursor-pointer hover:text-white hover:scale-110 transition-all duration-300 rounded-full"
                  />
                ) : (
                  <CiCirclePlus
                    size={25}
                    className="cursor-pointer hover:text-white hover:scale-110 transition-all duration-300 rounded-full"
                  />
                )}
              </button>
            </div>
            <p className="">{isSelected && item.answer}</p>
          </div>
        );
      })}
    </div>
  );
}