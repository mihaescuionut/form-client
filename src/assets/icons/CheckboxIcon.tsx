import * as React from "react"

const CheckboxIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={24}
    fill="none"
  >
    <mask
      id="a"
      width={25}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha",
      }}
    >
      <path fill="#D9D9D9" d="M.5 0h24v24H.5z" />
    </mask>
    <g mask="url(#a)">
      <path
        fill="#00A0C1"
        d="m11.1 16.2 7.05-7.05-1.4-1.4-5.65 5.65-2.85-2.85-1.4 1.4 4.25 4.25ZM5.5 21c-.55 0-1.02-.196-1.412-.587A1.926 1.926 0 0 1 3.5 19V5c0-.55.196-1.02.588-1.413A1.926 1.926 0 0 1 5.5 3h14c.55 0 1.02.196 1.413.587.391.392.587.863.587 1.413v14c0 .55-.196 1.02-.587 1.413A1.926 1.926 0 0 1 19.5 21h-14Zm0-2h14V5h-14v14Z"
      />
    </g>
  </svg>
)
export default CheckboxIcon;
