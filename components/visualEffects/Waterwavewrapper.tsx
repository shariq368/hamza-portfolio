"use client";
import { FC, ReactNode } from "react"
import WaterWave from "react-water-wave";
interface WaterWaveWrapperProps{
    imageUrl:string,
    dropRadius:string,
    perturbance:string,
    resolution:string,
   children: ()=>ReactNode,
}

const WaterWaveWrapper:FC<WaterWaveWrapperProps>=({imageUrl ,children,dropRadius,perturbance,resolution})=>{
    return <WaterWave
    imageUrl={imageUrl} 
    dropRadius={dropRadius}
    perturbance={perturbance}
    resolution={resolution}>
    
   {children}
  </WaterWave>
}

export default WaterWaveWrapper