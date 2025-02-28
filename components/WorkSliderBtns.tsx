'use client';
import { useSwiper } from "swiper/react";
import {PiCaretLeftBold, PiCaretRightBold} from 'react-icons/pi'
import { Button } from "./ui/button";
const WorkSliderBtns = ({containerStyles, btnStyles, iconStyles}:{
    containerStyles:string;
    btnStyles:string;
    iconStyles:string;
}) => {
    const swipe = useSwiper();
  return (
    <div className={containerStyles} >
        <button className={btnStyles} onClick={()=>swipe.slidePrev()}>
            <PiCaretLeftBold className={iconStyles}/>
        </button>
        <button className={btnStyles} onClick={() => swipe.slideNext()}>
            <PiCaretRightBold className={iconStyles}/>
        </button>
    </div>
  )
}

export default WorkSliderBtns