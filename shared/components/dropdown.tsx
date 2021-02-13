import React, { useState } from "react";
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

  return (
    <div onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button className={props.nameClass}>{props.name}</button>

      <div className={`${open ? "block" : "hidden"}`}>
        <div className={props.class}>
          <div>
            {props.items.map((item) => {
              return (
                <div
                  className="block px-4 py-2 text-sm text-white hover:bg-orange300"
                  key={item.label}
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
