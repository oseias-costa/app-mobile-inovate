import React from "react";
import { Svg, Path, Defs, Pattern, Image, Use } from "react-native-svg";

export const Time = () => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="16"
      height="16"
      fill="#000"
      viewBox="0 0 16 16"
    >
      <Path fill="url(#pattern0)" d="M0 0H16V16H0z"></Path>
      <Defs>
        <Pattern
          id="pattern0"
          width="1"
          height="1"
          patternContentUnits="objectBoundingBox"
        >
          <Use transform="scale(.04167)" xlinkHref="#image0_10_60"></Use>
        </Pattern>
        <Image
          id="image0_10_60"
          width="24"
          height="24"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABt0lEQVR4nLVVu04CURBdXzQSf8MHnyCWlhaiBGsCWviInSWlhcTEWNGyAuac+w/8gY9KjOI/GIwkNmsGZ5MbsndZECa5yebO3Dkzh5mD5yUwkkHU8aZlTAgAYHVqoMNG8oLkjzFmx0tqAFIACiRbJDskv/R0ADTFJzEKcKmd9QFsj0xOMk/yw0VPeAB0jTF7WtCN3t/GVb0A4NpK8ADgpNVqrdfr9WU58i13JB8tsGq73V4EcBAEwVwcQJi8T7IYF1ypVOYBlDR2AJKEFgn8NsZsRvhd05O1QHKuylMW50VHAYFr/kmW1f8e/vDDAIWQc2l9XIDKH11PGpOPenyvzuPIFr14APWfaUwjyvkqTmPM2qQAADY0phP1uKcUpf8BkNaY3kwAfN9f0ZhPJ0WyRDOhCEBTOzj1JjQA55rDd46prL9rTONMx/TZOaaqnF2toOSNaQAONflb5KKJiSpakptNmpzkVigVAHZHBVctsSvH0aW0HFnJr0ZWI3JtgQS6/rKhGZFqnfWM3FmcD5LL26RdSyc5Ea5RfzjKeTwtMd2IwoqENwC86DL29PsOwH6tVluaKPm07BfezErHnJlXaAAAAABJRU5ErkJggg=="
        ></Image>
      </Defs>
    </Svg>
  );
}
