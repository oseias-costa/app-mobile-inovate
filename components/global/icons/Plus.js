import { Path, Svg } from "react-native-svg"

export const Plus = ({style}) => {
    return(
//         <Svg width="32" height="32" fill='#fff' style={style} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//   <Path d="M4.5 2A2.5 2.5 0 0 0 2 4.5v15A2.5 2.5 0 0 0 4.5 22h15a2.5 2.5 0 0 0 2.5-2.5v-15A2.5 2.5 0 0 0 19.5 2h-15Zm8.125 5.625v3.75h3.75a.624.624 0 1 1 0 1.25h-3.75v3.75a.624.624 0 1 1-1.25 0v-3.75h-3.75a.625.625 0 1 1 0-1.25h3.75v-3.75a.625.625 0 1 1 1.25 0Z"></Path>
// </Svg>
//         <Svg width="34" height="34" style={style} fill="#fff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//   <Path fill-rule="evenodd" d="M12 4.8a.6.6 0 0 1 .6.6v6h6a.6.6 0 1 1 0 1.2h-6v6a.6.6 0 1 1-1.2 0v-6h-6a.6.6 0 1 1 0-1.2h6v-6a.6.6 0 0 1 .6-.6Z" clipRule="evenodd"></Path>
// </Svg>
        <Svg width="32" height="32" fill='#fff' style={style} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <Path d="M12 20.75a8.75 8.75 0 1 1 0-17.5 8.75 8.75 0 0 1 0 17.5ZM12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z"></Path>
            <Path d="M12 7a.625.625 0 0 1 .625.625v3.75h3.75a.624.624 0 1 1 0 1.25h-3.75v3.75a.624.624 0 1 1-1.25 0v-3.75h-3.75a.625.625 0 1 1 0-1.25h3.75v-3.75A.625.625 0 0 1 12 7Z"></Path>
        </Svg>
    )
}