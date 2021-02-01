import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

interface DropDownProps {
  name: string;
  nameClass: string;
  class: string;
}

const Dropdown = (props: DropDownProps) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const onBodyClick = (event) => {
      if (ref.current.contains(event.target)) {
        return;
      }
      setOpen(false);
    };

    document.body.addEventListener("click", onBodyClick);
    return () => {
      document.body.removeEventListener("click", onBodyClick);
    };
  }, []);

  return (
    <div ref={ref} onClick={() => setOpen(!open)}>
      <button className={props.nameClass}>{props.name}</button>

      <div className={`${open ? "block" : "hidden"}`}>
        <div className={props.class}>
          <div>
            {props.items.map((aItem, index, links) => (
              <div
                className="block px-4 py-2 text-sm text-white hover:bg-orange300"
                key={index}
              >
                <Link href={links}>{aItem}</Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
