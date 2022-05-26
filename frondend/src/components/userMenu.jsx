import React, { useState, useRef, useEffect } from 'react'

export default function UserMenu() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const trigger = useRef(null);
  const dropdown = useRef(null);

  // Close when click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdown.current && !dropdown.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdown]);

  // close if the esc key is pressed
    useEffect(() => {
        const handleKeyDown = ({ keyCode}) => {
            if (!dropdown || keyCode !==27) return; 
                setDropdownOpen(false);
        };
        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

  return (
    <div className="relative inline-flex">
      <button className="inline-flex justify-center items-center group">
        11
      </button>
    </div>
  );
}
