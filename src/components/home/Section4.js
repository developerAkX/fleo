import React from 'react';
import FeatureBox from './FeatureBox';
import feature1 from '../../images/feature-1.png'
import feature2 from '../../images/feature-2.png'
import feature3 from '../../images/feature-3.png'
import feature4 from '../../images/feature-4.png'

function Section4() {
    const list = [{
        image: feature1,
        title: 'Take faster and impactful decision using Fleo',
        description: 'Fleo  shows you the areas that need your attention, it will be your go- to tool for internal business reviews.'
    },
    {
        image: feature2,
        title: 'Conduct regular internal business reviews with ease',
        description: 'Fleo  shows you the areas that need your attention, it will be your go- to tool for internal business reviews.'
    },
    {
        image: feature3,
        title: 'Take faster and impactful decision using Fleo',
        description: 'Fleo  shows you the areas that need your attention, it will be your go- to tool for internal business reviews.'
    },
    {
        image: feature4,
        title: 'Check your bandwitdh and make every second count',
        description: 'Fleo  shows you the areas that need your attention, it will be your go- to tool for internal business reviews.'
    }]
    return (
        <div className='pt-100 pb-100'>
            <div style={{ marginBottom: 40, padding: `0px calc((100vw - 1000px) / 6)` }}>
                <span className='head_title'>Know the performance pulse to take</span><br />
                <span className='head_title'>better decisions</span>
            </div>
            <span className='description_section_3'>Fleo shows you the areas  that need your attention</span><br />
            <span className='description_section_3'>and winners who should be appreciated</span>
            <div className='section4_main'>
                {list && list.map((i, index) => {
                    return <FeatureBox item={i} key={index} />
                })}
            </div>
        </div>
    )
}

export default Section4;