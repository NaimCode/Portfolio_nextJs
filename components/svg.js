export const Logo = () => {
  return (
    <div className="">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="72.038"
        height="50.058"
        viewBox="0 0 72.038 71.058"
      >
        <defs>
          <filter
            id="left"
            x="3.13"
            y="5.012"
            width="35"
            height="64"
            filterUnits="userSpaceOnUse"
          >
            <feOffset dy="3" input="SourceAlpha" />
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feFlood flood-opacity="0.161" />
            <feComposite operator="in" in2="blur" />
            <feComposite in="SourceGraphic" />
          </filter>
          <linearGradient
            id="linear-gradient"
            x1="0.5"
            x2="0.5"
            y2="1"
            gradientUnits="objectBoundingBox"
          >
            <stop offset="0" stop-color="#F77F00" />
            <stop offset="1" stop-color="#F77F00" />
          </linearGradient>
          <filter
            id="middle"
            x="0"
            y="0"
            width="72.038"
            height="71.058"
            filterUnits="userSpaceOnUse"
          >
            <feOffset dy="3" input="SourceAlpha" />
            <feGaussianBlur stdDeviation="3" result="blur-2" />
            <feFlood flood-opacity="0.161" />
            <feComposite operator="in" in2="blur-2" />
            <feComposite in="SourceGraphic" />
          </filter>
          <filter
            id="right"
            x="35.13"
            y="5.012"
            width="35"
            height="64"
            filterUnits="userSpaceOnUse"
          >
            <feOffset dy="3" input="SourceAlpha" />
            <feGaussianBlur stdDeviation="3" result="blur-3" />
            <feFlood flood-opacity="0.161" />
            <feComposite operator="in" in2="blur-3" />
            <feComposite in="SourceGraphic" />
          </filter>
        </defs>
        <g id="logo" transform="translate(8066.13 -1316.925)">
          <g
            transform="matrix(1, 0, 0, 1, -8066.13, 1316.92)"
            filter="url(#left)"
          >
            <rect
              id="left-2"
              data-name="left"
              width="17"
              height="46"
              rx="8.5"
              transform="translate(12.13 11.01)"
              fill="#fff"
            />
          </g>
          <g
            transform="matrix(1, 0, 0, 1, -8066.13, 1316.92)"
            filter="url(#middle)"
          >
            <path
              id="middle-2"
              data-name="middle"
              d="M8.292.291a9.041,9.041,0,0,1,8.583,8.6l1.439,41.072a7.633,7.633,0,0,1-8,8.021,9.041,9.041,0,0,1-8.583-8.6L.291,8.312A7.633,7.633,0,0,1,8.292.291Z"
              transform="matrix(0.69, -0.72, 0.72, 0.69, 8.6, 18.98)"
              fill="url(#linear-gradient)"
            />
          </g>
          <g
            transform="matrix(1, 0, 0, 1, -8066.13, 1316.92)"
            filter="url(#right)"
          >
            <rect
              id="right-2"
              data-name="right"
              width="17"
              height="46"
              rx="8.5"
              transform="translate(44.13 11.01)"
              fill="#fff"
            />
          </g>
        </g>
      </svg>
    </div>
  );
};

export const CheckIcon = ({ classname }) => {
  return (
    <svg
      className="text-secondary-light"
      width="24"
      height="24"
      xmlns="http://www.w3.org/2000/svg"
      fill-rule="evenodd"
      clip-rule="evenodd"
    >
      <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm7 7.457l-9.005 9.565-4.995-5.865.761-.649 4.271 5.016 8.24-8.752.728.685z" />
    </svg>
  );
};
