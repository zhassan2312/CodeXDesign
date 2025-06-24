import React,{useState} from 'react'
import { testimonialText } from '../../constants'
import Testimonial from './Testimonial'
import testimonials from '../../utils/testimonials'
import Card from './Card'
const Client = () => {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? -1 : index);
  };
  return (
    <div
   
      className='w-full bg-zinc-900 mb-[6vw]'>
        <div className='flex flex-col w-full gap-[3vw]'>
            <h1 className='text-[4vw] text-white font-poppins px-[3vw]'>
                Client's Reviews
            </h1>
            <div className='flex flex-col w-full'>
              {testimonials.map((item, idx) => (
                <Testimonial
                  key={idx}
                  testimonialText={item.feedback}
                  types={item.services}
                  companyName={item.company}
                  personName={item.name}
                  expanded={expandedIndex === idx}
                  onToggle={() => handleToggle(idx)}
                  companylink={item.companylink}
                  profilelink={item.profilelink}
                  img={item.image}
                />
              ))}
            </div>

            <Card />
            


        </div>
    </div>
  )
}

export default Client