import React, { useState } from 'react'

type links = {
  label: string
  link: string
  newTab?: boolean
}
interface DropDownProps {
  name: string
  nameClass: string
  class: string
  items: links[]
}

const Dropdown = (props: DropDownProps) => {
  const [open, setOpen] = useState(false)

  return (
    <div onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button className={`${props.nameClass} focus:outline-none`}>
        {props.name}
      </button>

      <div className={`${open ? 'block' : 'hidden'}`}>
        <div className={props.class}>
          <div>
            {props.items.map((item) => {
              return item.newTab ? (
                <a
                  href={item.link}
                  rel="noopener noreferrer"
                  className="block px-4 py-2 text-sm text-white hover:bg-orange300"
                  key={item.label}
                  target="_blank"
                >
                  {item.label}
                </a>
              ) : (
                <a
                  href={item.link}
                  className="block px-4 py-2 text-sm text-white hover:bg-orange300"
                  key={item.label}
                  rel="noopener noreferrer"
                >
                  {item.label}
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dropdown
