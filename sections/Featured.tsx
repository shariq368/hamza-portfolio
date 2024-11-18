import Heading from '@/components/heading/Heading'
import React from 'react'
import { featuredData } from '@/data'
import FeaturedCard from '@/components/cards/Featurecard';
import Expandablefeatured from '@/components/expandable/Expandablefeatured';


const MainFeatured = featuredData[0];

export default function FeatureSection() {
  return (
    <div className='pt-24 px-3 lg:px-8'>
        {/*Heading*/}
        <Heading number='01' title_1='Featured' title_2='Work'/>
        {/*Featured Card*/}
        <FeaturedCard
        active={false}
        title={MainFeatured.title}
        tag={MainFeatured.tags}
        video={MainFeatured.video}
                />
                <div className='mt-24'>
                  <Expandablefeatured/>
                </div>
    </div>
  )
}
