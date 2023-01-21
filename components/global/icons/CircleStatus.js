import React from "react"
import { G, Path, Svg, Defs, ClipPath } from "react-native-svg"

export const CircleStatus = ({fill}) => {
    return(
        <Svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        fill="none"
        viewBox="0 0 14 14"
      >
        <G clipPath="url(#clip0_10_61)">
          <Path
            fill={fill}
            d="M7 1.167A5.828 5.828 0 001.167 7 5.828 5.828 0 007 12.833 5.828 5.828 0 0012.833 7 5.828 5.828 0 007 1.167z"
          ></Path>
        </G>
        <Defs>
          <ClipPath id="clip0_10_61">
            <Path fill="#fff" d="M0 0H14V14H0z"></Path>
          </ClipPath>
        </Defs>
      </Svg>
    )
}