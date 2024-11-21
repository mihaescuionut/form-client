import * as React from "react"


const MailIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
  >
    <mask
      id="a"
      width={32}
      height={32}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha",
      }}
    >
      <path fill="#D9D9D9" d="M0 0h32v32H0z" />
    </mask>
    <g mask="url(#a)">
      <path
        fill="#fff"
        d="M5.333 26.667a2.568 2.568 0 0 1-1.883-.784A2.568 2.568 0 0 1 2.666 24V8c0-.733.262-1.361.784-1.883a2.568 2.568 0 0 1 1.883-.784h21.334c.733 0 1.36.261 1.883.784.522.522.783 1.15.783 1.883v16c0 .733-.26 1.361-.783 1.883a2.568 2.568 0 0 1-1.884.784H5.334ZM16 17.333 5.333 10.667V24h21.334V10.667L16 17.333Zm0-2.666L26.666 8H5.334L16 14.667Zm-10.667-4V8v16-13.333Z"
      />
    </g>
  </svg>
)
export default React.memo(MailIcon);
