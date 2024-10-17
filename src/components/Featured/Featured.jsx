import React,{useState} from 'react';
import { codexcue, secondScreen,plantation,pharmacity } from '../../utils';
import Card from './Card';
import Button from '../Button';

const Featured = () => {
    const [hover, setHover] = useState(false);
  return (
    <div className='w-full py-20 flex flex-col '>
      <div className='w-full px-20'>
        <h1 className='font-poppins text-[5vw] tracking-tight'>
          Featured
        </h1>
      </div>
      <div className='line h-[1px] bg-zinc-600 w-full my-10'></div>
      <div className='cards px-10 gap-10 w-full flex'>
        <div className='headings absolute bg-red-500'>
            <h1 className=''></h1>
        </div>
        <Card image={codexcue} text={'Codexcue'} types={['Landing Page', 'Branding', 'UX Design']} left={true}/>
        <Card image={secondScreen} text={'Second Screen'} types={['Landing Page', 'Branding', 'UX Design']} left={false} />
      </div>
      <div className='cards px-10 gap-10 w-full flex'>
        <Card image={plantation} text={'Plantation'} types={['Website Design', 'Branding', 'UX Design','Parallax Effect']} left={true}/>
        <Card image={pharmacity} text={'Pharmacity'} types={['App Page', 'Branding', 'UX Design']} left={false}/>
      </div>
      <div className='w-1/4 relative left-1/2 -translate-x-1/2'>
        <Button text={'View All Case Studies'} isWhite={true}/>
      </div>
    </div>
  );
};

export default Featured;