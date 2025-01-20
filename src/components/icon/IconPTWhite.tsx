import * as React from "react";

type IconHmcTextDarkProps = React.SVGProps<SVGSVGElement> & {
  className?: string;
};

const IconHmcTextDark: React.FC<IconHmcTextDarkProps> = ({ className = "", ...props }) => (
  <svg
    width="50"
    height="40"
    viewBox="0 0 50 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    className={className}
    {...props}
  >
    <rect width="50" height="40" fill="url(#pattern0_69_179)" />
    <defs>
      <pattern id="pattern0_69_179" patternContentUnits="objectBoundingBox" width="1" height="1">
        <use xlinkHref="#image0_69_179" transform="matrix(0.0175439 0 0 0.0219298 0 -0.00438596)" />
      </pattern>
      <image
        id="image0_69_179"
        width="57"
        height="46"
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADkAAAAuCAYAAACSy7GmAAACg0lEQVRoBe2au4/NQRTH1yMRQbUqImioqDSi30pFpRCFKIVEwz+gotVtbEIikU1IZBuNbfwFxCaIEK+ERoRCiI97mHMzdzLPa+5eK+cmJ/P8nXO+5zEzv/ndmRn7jVoAOArMA7cnRBdUInAiIeM6cFjndS2B48B3JvtbVKWBqxlRP4E5ndutBB5mhPYaqgUp8u53AyeMgHXAy15IMnxaQD4xkK0WME9mYm+MIQvXwGhtOQnsAQ4U6H0gJGx+Az4V6Ef4UNCenCeBpUDYOM2FUq4DjwuMW0B+dduabG0pOjPUqRPIW0OGiQrwrCPIAqvfw5eGqnQCKZadA/ZFaD9wruLE1OLJqYCsEVqaYyBLFoqMdw/X58CNAn2MKOJ3TdSTuRO/r0Suvtqra04XHTvpLzzbOhzAHwwZRirAFuCNSk+UPT35Atg0ogowO9jIzwOXIySe/pxQzO9eBK4kaNmfmKjfVaUK75Py+IfBIWYhQvJSfXHwcr9LeVWVA4Hi6XcJxXp2L6lCFSDbjnXKOFUayJ5+BPNkYE8L11TqJftXMSfvqBL/88JzepogtwJvg5wIm3In+2VMegWclbukaYKsuZIsHusUQE05jXA1kC5uzZM1IerPsXD9EzrdDwOWk5aTfqI11NdkTrqPRqfcpi8bf4yOqR3WKsgNwOvwmBS0lw3kqEX+vdUVME86J1m4jkYrfcNVFgPgaSAkbGbPrsD6irvdFk8+0kWqW+nuUkNgfjsL0hnqpv9ApN4C8lo3cMoI2AncA+QTnXxVDmle56ZKYC+wEgGnXTUg5Y9K8tF1d0rOX/W7DX07sCNCszXMgc3AQeBIhA4pD2eQ2Bx5dqPOs9JZ4Bey+JC0EStVEgAAAABJRU5ErkJggg=="
      />
    </defs>
  </svg>
);

export default IconHmcTextDark;
