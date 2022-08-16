import React from 'react';
import image from '../../images/section_2_ilstr.png';


function Section2() {
    return (

        <div className='section2_main'>
            <img src={image} className="section2_image" />
            <div className='section2_inner'>
                <span className='head_title'>Plan Better</span><br />
                <span className='head_title'>Do Better</span>
                <p className='description_section_2'>Spend sometime planning
                    the success map </p>
            </div>
        </div>


    )
}

export default Section2;