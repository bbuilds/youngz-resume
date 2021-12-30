import * as React from "react";
import { Link } from "gatsby";

const Logo = ({ classes }) => {
  return (
    <Link
      to="/"
      title="Branden Youngs Resume Website"
      className={
        "flex items-center text-white" + (classes ? " " + classes : "")
      }
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="15.363"
        height="25"
        viewBox="0 0 15.363 25"
      >
        <g
          id="Group_1"
          data-name="Group 1"
          transform="translate(-329.089 -326.009)"
        >
          <g
            id="Group_117"
            data-name="Group 117"
            transform="translate(329.089 326.009)"
          >
            <g id="Group_116" data-name="Group 116" transform="translate(0 0)">
              <rect
                id="Rectangle_198"
                data-name="Rectangle 198"
                width="2.92"
                height="12.72"
                fill="#e6e7e8"
              />
            </g>
            <path
              id="Path_128"
              data-name="Path 128"
              d="M372.3,471.579h-9.792V484.3h12.712v-12.72Zm0,9.8h-6.872V474.5H372.3Z"
              transform="translate(-359.86 -459.299)"
              fill="#01fdf6"
            />
            <rect
              id="Rectangle_199"
              data-name="Rectangle 199"
              width="6.871"
              height="6.871"
              transform="translate(5.661 2.818)"
              fill="#ffcd67"
            />
          </g>
        </g>
      </svg>

      <span className="ml-1 leading-none">Branden Y.</span>
    </Link>
  );
};

export default Logo;
