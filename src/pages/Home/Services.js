import React from 'react';
import Service from './Service';
import fluoride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png';

const Services = () => {
     const services = [
          {
              _id: 1,
              name: 'Fluoride Treatment',
              description: '',
              img: fluoride
          },
          {
              _id: 2,
              name: 'Cavity Filling',
              description: '',
              img: cavity
          },
          {
              _id: 3,
              name: 'Teeth Whitening',
              description: '',
              img: whitening
          },
      ];
     return (
          <div className='my-28'>
           <div className='text-center '>
           <h3 className='text-primary text-xl font-bold uppercase'>Our Services</h3>  
             <h2 className='text-4xl'>Services we provide</h2>
           </div>
           <div>
                <Service/>
           </div>
          </div>
     );
};

export default Services;