import { div } from "framer-motion/client";
import { Children, FC, ReactNode } from "react";


//timeline//
interface TimeLineProps{
    children:ReactNode,

}


export const Timeline:FC<TimeLineProps>=({children})=>{
return <div className="flex flex-col gap-y-6 ">{children}</div>
}