import React from 'react'

const Link = ({text,className,isNavbar,href,onClick}) => {
  return (
    <a 
        href={href}className={className} onClick={onClick}
            
    >
        {text}
    </a>
  )
}

export default Link