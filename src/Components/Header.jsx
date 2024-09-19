import React from 'react'

const Header = ({image,title,pos}) => {
  return (
    <div>
        <div style={{backgroundImage: `url(${image})`,
        height:"400px",
        backgroundSize: "100%",
        backgroundPosition: pos,
        opacity: .9}}
        >
            <div className="grid grid-cols-1">
                <h1 className="text-center py-60 text-4xl font-semibold text-white">{title}</h1>
            </div>
        </div>
    </div>
  )
}

export default Header