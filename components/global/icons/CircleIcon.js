import React from "react";
import { Svg, Circle } from "react-native-svg"

export const CircleIcon = ({ fill }) => {
    return(
        <Svg width="14pt" height="14pt" viewBox="0 0 14 14">
            <Circle cx="50" cy="50" 
                r="40" stroke="black" 
                strokeWidth="0" fill={fill} 
            />
        </Svg>
    )
}
