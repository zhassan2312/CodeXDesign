import React,{useState} from 'react'
import { testimonialText } from '../../constants'
import Testimonial from './Testimonial'
import Card from './Card'
const Client = () => {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? -1 : index);
  };
  return (
    <div className='w-full bg-zinc-900 mb-[6vw]'>
        <div className='flex flex-col w-full gap-[3vw]'>
            <h1 className='text-[4vw] text-white font-poppins px-[3vw]'>
                Client's Reviews
            </h1>
            <div className='flex flex-col w-full'>
              <Testimonial
                testimonialText={testimonialText}
                types={['Youtube', 'Sales']}
                companyName={"Re Design"}
                personName={'Jesse Yao'}
                expanded={expandedIndex === 0}
                onToggle={() => handleToggle(0)}
              />
              <Testimonial
                testimonialText={testimonialText}
                types={['UI Design', 'UX Research']}
                companyName={"kneems"}
                personName={'Anees'}
                expanded={expandedIndex === 1}
                onToggle={() => handleToggle(1)}
              />
            </div>

            <Card />
            


        </div>
    </div>
  )
}

export default Client