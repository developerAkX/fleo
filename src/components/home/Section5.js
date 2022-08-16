import React from 'react';
import img from '../../images/integration.svg';

function Section5() {
    return (
        <div className='section5_main pt-100 pb-100'>
            <div style={{ marginBottom: 40 }}>
                <span className='head_title'>Integration</span>
            </div>
            <span className='description_section_3'>Fleo captures everyone’s involvement and</span><br />
            <span className='description_section_3'>helps with uniform distribution of work.</span>
            <img src={img} className="section5_image" />
        </div>
    )
}

export default Section5;