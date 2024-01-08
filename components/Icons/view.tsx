import styles from "./styles.module.css";
import { IconsProps } from "./types";

export function MenuIcon(props: IconsProps) {
  return (
    <svg
      fill={props.color ? `${props.color}` : "#000"}
      width="100%"
      height="100%"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      style={props.style}
    >
      <path d="M0 0h4v4H0V0zm0 6h4v4H0V6zm0 6h4v4H0v-4zM6 0h4v4H6V0zm0 6h4v4H6V6zm0 6h4v4H6v-4zm6-12h4v4h-4V0zm0 6h4v4h-4V6zm0 6h4v4h-4v-4z" />
    </svg>
  );
}

export function ExitIcon(props: IconsProps) {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="-0.5 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={props.style}
    >
      <path
        d="M3 21.32L21 3.32001"
        stroke={props.color ? `${props.color}` : "#000"}
        strokeWidth="1.5"
      />
      <path
        d="M3 3.32001L21 21.32"
        stroke={props.color ? `${props.color}` : "#000"}
        strokeWidth="1.5"
      />
    </svg>
  );
}

export function MovieIcon(props: IconsProps) {
  return (
    <svg
      fill={props.color ? `${props.color}` : "#000"}
      viewBox="0 -13.54 122.88 122.88"
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlSpace="preserve"
      style={props.style}
    >
      <g>
        <path d="M12.14,0H32.8h29.43h28.8h19.71c3.34,0,6.38,1.37,8.58,3.56c2.2,2.2,3.56,5.24,3.56,8.58v7.13v57.25v7.09 c0,3.34-1.37,6.38-3.56,8.58c-2.2,2.2-5.24,3.56-8.58,3.56h-19.2c-0.16,0.03-0.33,0.04-0.51,0.04c-0.17,0-0.34-0.01-0.51-0.04 H62.74c-0.16,0.03-0.33,0.04-0.51,0.04c-0.17,0-0.34-0.01-0.51-0.04H33.31c-0.16,0.03-0.33,0.04-0.51,0.04 c-0.17,0-0.34-0.01-0.51-0.04H12.14c-3.34,0-6.38-1.37-8.58-3.56S0,86.95,0,83.61v-7.09V19.27v-7.13C0,8.8,1.37,5.76,3.56,3.56 C5.76,1.37,8.8,0,12.14,0L12.14,0z M55.19,31.24l20.53,14.32c0.32,0.2,0.61,0.48,0.84,0.81c0.92,1.33,0.58,3.14-0.74,4.06 L55.37,64.57c-0.5,0.41-1.15,0.66-1.85,0.66c-1.62,0-2.93-1.31-2.93-2.93V33.63h0.01c0-0.58,0.17-1.16,0.52-1.67 C52.05,30.64,53.87,30.32,55.19,31.24L55.19,31.24z M93.95,79.45V89.9h16.78c1.73,0,3.3-0.71,4.44-1.85 c1.14-1.14,1.85-2.71,1.85-4.44v-4.16H93.95L93.95,79.45z M88.1,89.9V79.45H65.16V89.9H88.1L88.1,89.9z M59.31,89.9V79.45H35.73 V89.9H59.31L59.31,89.9z M29.87,89.9V79.45H5.85v4.16c0,1.73,0.71,3.3,1.85,4.44c1.14,1.14,2.71,1.85,4.44,1.85H29.87L29.87,89.9z M5.85,73.6H32.8h29.43h28.8h26V22.2h-26h-28.8H32.8H5.85V73.6L5.85,73.6z M88.1,16.35V5.85H65.16v10.49H88.1L88.1,16.35z M93.95,5.85v10.49h23.07v-4.2c0-1.73-0.71-3.3-1.85-4.44c-1.14-1.14-2.71-1.85-4.44-1.85H93.95L93.95,5.85z M59.31,16.35V5.85 H35.73v10.49H59.31L59.31,16.35z M29.87,16.35V5.85H12.14c-1.73,0-3.3,0.71-4.44,1.85c-1.14,1.14-1.85,2.71-1.85,4.44v4.2H29.87 L29.87,16.35z" />
      </g>
    </svg>
  );
}

export function AboutUsIcon(props: IconsProps) {
  return (
    <svg
      fill={props.color ? `${props.color}` : "#000"}
      height="800px"
      width="800px"
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 502.643 502.643"
      xmlSpace="preserve"
      style={props.style}
    >
      <g>
        <g>
          <path
            d="M251.256,237.591c37.166,0,67.042-30.048,67.042-66.977c0.043-37.037-29.876-66.999-67.042-66.999
			c-36.908,0-66.869,29.962-66.869,66.999C184.387,207.587,214.349,237.591,251.256,237.591z"
          />
          <path
            d="M305.032,248.506H197.653c-19.198,0-34.923,17.602-34.923,39.194v107.854c0,1.186,0.604,2.243,0.669,3.473h175.823
			c0.129-1.229,0.626-2.286,0.626-3.473V287.7C339.912,266.108,324.187,248.506,305.032,248.506z"
          />
          <path
            d="M431.588,269.559c29.832,0,53.754-24.008,53.754-53.668s-23.922-53.711-53.754-53.711
			c-29.617,0-53.582,24.051-53.582,53.711C377.942,245.53,401.972,269.559,431.588,269.559z"
          />
          <path
            d="M474.708,278.317h-86.046c-15.445,0-28.064,14.107-28.064,31.472v86.413c0,0.928,0.453,1.812,0.518,2.826h141.03
			c0.065-1.014,0.496-1.898,0.496-2.826v-86.413C502.707,292.424,490.11,278.317,474.708,278.317z"
          />
          <path
            d="M71.011,269.559c29.789,0,53.733-24.008,53.733-53.668S100.8,162.18,71.011,162.18c-29.638,0-53.603,24.051-53.603,53.711
			S41.373,269.559,71.011,269.559L71.011,269.559z"
          />
          <path
            d="M114.109,278.317H27.977C12.576,278.317,0,292.424,0,309.789v86.413c0,0.928,0.453,1.812,0.539,2.826h141.03
			c0.065-1.014,0.475-1.898,0.475-2.826v-86.413C142.087,292.424,129.489,278.317,114.109,278.317z"
          />
        </g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
      </g>
    </svg>
  );
}

export function PhoneIcon(props: IconsProps) {
  return (
    <svg
      width="800px"
      height="800px"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      style={props.style}
    >
      <defs>
        <style>{`.cls-1,.cls-2{fill:none;stroke:${
          props.color ? `${props.color}` : "#000"
        };stroke-linecap:round;stroke-width:1.5px;}.cls-1{stroke-linejoin:round;}.cls-2{stroke-linejoin:bevel;}`}</style>
      </defs>

      <g id="ic-contact-phone-2">
        <path
          className="cls-1"
          d="M17.22,20.16H7a2,2,0,0,1-1.87-2.71l1.93-5.14A2,2,0,0,1,8.92,11h6.37a2,2,0,0,1,1.88,1.3l1.92,5.14A2,2,0,0,1,17.22,20.16Z"
        />

        <circle className="cls-2" cx="12.11" cy="15.59" r="2" />

        <path
          className="cls-1"
          d="M2.08,5.73V8.11a2,2,0,0,0,2,2H5a2,2,0,0,0,2-2V6.84H7a25.64,25.64,0,0,1,10,0h0V8.11a2,2,0,0,0,2,2h.89a2,2,0,0,0,2-2V5.73a1,1,0,0,0-.81-1h0a46.18,46.18,0,0,0-18.22,0h0A1,1,0,0,0,2.08,5.73Z"
        />
      </g>
    </svg>
  );
}

export function JobIcon(props: IconsProps) {
  return (
    <svg
      width="800px"
      height="800px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={props.style}
    >
      <path
        d="M4 12H3V8C3 6.89543 3.89543 6 5 6H9M4 12V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V12M4 12H10M20 12H21V8C21 6.89543 20.1046 6 19 6H15M20 12H14M14 12V10H10V12M14 12V14H10V12M9 6V5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V6M9 6H15"
        stroke={props.color ? `${props.color}` : "#000"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CalendarIcon(props: IconsProps) {
  return (
    <svg
      width="800px"
      height="800px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={props.style}
    >
      <path
        d="M4.5 10V7C4.5 6.44772 4.94772 6 5.5 6H7.3125M4.5 10V20C4.5 20.5523 4.94772 21 5.5 21H18.5C19.0523 21 19.5 20.5523 19.5 20V10M4.5 10H19.5M19.5 10V7C19.5 6.44772 19.0523 6 18.5 6H16.2188M7.3125 6V3M7.3125 6H16.2188M16.2188 6V3"
        stroke={props.color ? `${props.color}` : "#000"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 14L16 14"
        stroke={props.color ? `${props.color}` : "#000"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function HomeIcon(props: IconsProps) {
  return (
    <svg
      width="800px"
      height="800px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={props.style}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.3103 1.77586C11.6966 1.40805 12.3034 1.40805 12.6897 1.77586L20.6897 9.39491L23.1897 11.7759C23.5896 12.1567 23.605 12.7897 23.2241 13.1897C22.8433 13.5896 22.2103 13.605 21.8103 13.2241L21 12.4524V20C21 21.1046 20.1046 22 19 22H14H10H5C3.89543 22 3 21.1046 3 20V12.4524L2.18966 13.2241C1.78972 13.605 1.15675 13.5896 0.775862 13.1897C0.394976 12.7897 0.410414 12.1567 0.810345 11.7759L3.31034 9.39491L11.3103 1.77586ZM5 10.5476V20H9V15C9 13.3431 10.3431 12 12 12C13.6569 12 15 13.3431 15 15V20H19V10.5476L12 3.88095L5 10.5476ZM13 20V15C13 14.4477 12.5523 14 12 14C11.4477 14 11 14.4477 11 15V20H13Z"
        fill={props.color ? `${props.color}` : "#000"}
      />
    </svg>
  );
}
