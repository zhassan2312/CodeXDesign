import React,{useState} from 'react';
import { codexcue, secondScreen,plantation,pharmacity } from '../../utils';
import Card from './Card';
import Button from '../buttons/Button';

const Featured = () => {
    const [hover, setHover] = useState(false);
  return (
    <div 
    data-scroll
    data-scroll-offset='0,-10%'
    

    
      className='w-full py-20 lg:py-[3vw] flex flex-col z-40 relative bg-zinc-900'>
      <div className='w-full px-20 lg:px-[3vw]'>
        <h1 className='font-poppins text-[5vw] tracking-tight'>
          Featured
        </h1>
      </div>
      <div className='line h-[1px] lg:h-[0.15vw] bg-zinc-600 w-full my-10 lg:my-[2vw]'></div>
      <div className='cards px-10 lg:px-[2vw] lg:gap-[1vw] gap-10 w-full flex flex-col lg:flex-row'>
        <Card image={codexcue} text={'Codexcue'} types={['Landing Page', 'Branding', 'UX Design']} left={true}/>
        <Card image={secondScreen} text={'Second Screen'} types={['Landing Page', 'Branding', 'UX Design']} left={false} />
      </div>
      <div className='cards px-10 lg:px-[2vw] lg:gap-[1vw] gap-10 w-full flex flex-col lg:flex-row'>
        <Card image={plantation} text={'Plantation'} types={['Website Design', 'Branding', 'UX Design','Parallax Effect']} left={true}/>
        <Card image={pharmacity} text={'Pharmacity'} types={['App Page', 'Branding', 'UX Design']} left={false}/>
      </div>
        <Button className={'pl-8 pr-16 lg:pl-[2vw] lg:pr-[4vw] py-[1vw] mt-[3vw] mx-auto'} text={'View All Case Studies'} isWhite={true}/>
      
    </div>
  );
};

export default Featured;