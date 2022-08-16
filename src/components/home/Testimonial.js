import React from 'react';
import test1 from '../../images/test-1.jpg'
import test2 from '../../images/test-2.jpg'
import test3 from '../../images/test-3.jpg'

import leftArrow from '../../images/left_arrow.svg';
import rightArrow from '../../images/right_arrow.svg';

function Testimonial() {
    const list = [{
        image: test1,
        name: 'Harriet Mitchell',
        position: 'Marketing Director',
        title: 'Make effective leadership',
        description: 'Lorem ipsum dolor sit amet, consctetur adipiscing elit.Lorem ipsum dolor sit.Lorem ipsum dolLorem ipsum dolor sit amet, consectetur.Lorem ipsum dolor sit amet, sit amet, consectetur.Lorem ipsum dolor sit amet'
    },
    {
        image: test2,
        name: 'Jhon Fleo',
        position: 'Managing Director',
        title: 'Make effective leadership',
        description: 'Lorem ipsum dolor sit amet, consctetur adipiscing elit.Lorem ipsum dolor sit.Lorem ipsum dolLorem ipsum dolor sit amet, consectetur.Lorem ipsum dolor sit amet, sit amet, consectetur.Lorem ipsum dolor sit amet'
    },
    {
        image: test3,
        name: 'Fleo Harriet',
        position: 'Product Analyst',
        title: 'Take faster and impactful decision using Fleo',
        description: 'Fleo  shows you the areas that need your attention, it will be your go- to tool for internal business reviews.'
    }
    ]


    const CurrentItem = ({ item }) => {
        return (
            <React.Fragment>
                <img src={item.image} style={{ width: 200, height: 'auto', objectFit: 'cover', borderRadius: '0px 20px 20px 0px' }} />
                <div className='test_box' style={{ display: 'flex', textAlign: 'left', flexDirection: 'column', padding: 40 }}>
                    <span className='testi_title'>{item.title}</span>
                    <span className='testi_desc'>{item.description}</span>
                    <span className='testi_name'>{item.name}</span>
                    <span className='testi_position'>{item.position}</span>
                </div>
            </React.Fragment>
        )
    }

    const PrevItem = ({ item }) => {
        return (
            <div style={{ marginRight: 40, position: 'relative', backgroundColor: '#DF7B1E99', borderRadius: '20px 0px 0px 20px' }}>
                <img src={leftArrow} style={{ width: 40, top: '50%', right: '45%', objectFit: 'cover', height: 'auto', position: 'absolute' }} />
                <img src={item.image} style={{ width: 200, objectFit: 'cover', opacity: 0.2, height: '100%', borderRadius: '20px 0px 0px 20px' }} />
            </div>
        )
    }

    const NextItem = ({ item }) => {
        return (
            <div style={{ marginLeft: 40, position: 'relative', backgroundColor: '#DF7B1E99', borderRadius: '20px 0px 0px 20px' }}>
                <img src={rightArrow} style={{ width: 40, top: '50%', right: '45%', objectFit: 'cover', height: 'auto', position: 'absolute' }} />
                <img src={item.image} style={{ width: 200, objectFit: 'cover', opacity: 0.2, height: '100%', borderRadius: '20px 0px 0px 20px' }} />
            </div>
        )
    }

    return (
        <div style={{ paddingTop: 100, paddingBottom: 100, padding: `100px calc((100vw - 1000px) / 6)`, backgroundColor: '#fff' }}>
            <div style={{ marginBottom: 65, textAlign: 'left' }}>
                <span className='head_title'>Client Testimonial</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                <PrevItem item={list && list[0]} />
                <CurrentItem item={list && list[1]} />
                <NextItem item={list && list[2]} />
            </div>
        </div>
    )
}

export default Testimonial;