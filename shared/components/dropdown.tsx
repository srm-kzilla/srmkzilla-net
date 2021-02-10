import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

type links = {
  label: string;
  link: string;
};
interface DropDownProps {
  name: string;
  nameClass: string;
  class: string;
  items: links[];
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
            {props.items.map((item, index) => {
              console.log(item);
              return (
                <div
                  className="block px-4 py-2 text-sm text-white hover:bg-orange300"
                  key={index}
                >
                  <Link href={item.link}>
                    <p>{item.label}</p>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
