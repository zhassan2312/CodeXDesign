import React, { useState } from 'react';
import Card from './Card';
import Button from '../buttons/Button';
import portfolio from '../../utils/portfolio';

const categories = [
  { label: 'All', value: 'all' },
  { label: 'Design', value: 'design' },
  { label: 'Frontend Development', value: 'Frontend Development' },
  { label: 'Full Stack Development', value: 'Full Stack Development' },
  { label: 'Most Popular', value: 'popular' },
];

const Featured = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  let filteredPortfolio = portfolio;
  if (selectedCategory === 'popular') {
    filteredPortfolio = portfolio.slice(0, 4); // You can customize this logic
  } else if (selectedCategory !== 'all') {
    filteredPortfolio = portfolio.filter(item => item.category && item.category.toLowerCase() === selectedCategory.toLowerCase());
  }

  const displayedPortfolio = showAll ? filteredPortfolio : filteredPortfolio.slice(0, 4);

  return (
    <div 
    data-scroll
    data-scroll-offset='0,-10%'
    

    id='featured'
      className='w-full py-20 lg:py-[3vw] flex flex-col z-40 relative bg-zinc-900'>
      {/* Category Sort Buttons */}
      <div className="flex gap-4 px-10 lg:px-[3vw] mb-8">
        {categories.map(cat => (
          <button
            key={cat.value}
            className={`px-4 py-2 rounded-full font-semibold border transition-colors duration-200 ${selectedCategory === cat.value ? 'bg-lime-400 text-black border-lime-400' : 'bg-zinc-800 text-white border-zinc-700 hover:bg-lime-300 hover:text-black'}`}
            onClick={() => {
              setSelectedCategory(cat.value);
              setShowAll(false);
            }}
          >
            {cat.label}
          </button>
        ))}
      </div>
      <div className='w-full px-20 lg:px-[3vw]'>
        <h1 className='font-poppins text-[5vw] tracking-tight'>
          Featured
        </h1>
      </div>
      <div className='line h-[1px] lg:h-[0.15vw] bg-zinc-600 w-full my-10 lg:my-[2vw]'></div>
      <div className='cards px-10 lg:px-[2vw] lg:gap-[1vw] gap-10 w-full grid grid-cols-1 md:grid-cols-2 relative'>
        {displayedPortfolio.map((item, idx) => (
          <div 
            key={item.name + idx}
            className="relative" // Add relative positioning
          >
            <Card
              image={item.image}
              text={item.title}
              types={item.tags}
              link={item.link}
              left={idx % 2 === 0}
            />
          </div>
        ))}
      </div>
        <Button
        className={'mt-[96px] pl-8 pr-16 lg:pl-[2vw] lg:pr-[4vw] py-[1vw] mx-auto'}
        text={showAll ? 'Show Less' : 'View All Case Studies'}
        isWhite={true}
        onClick={() => setShowAll((prev) => !prev)}
      />
      
    </div>
  );
};

export default Featured;