import React, { useState } from 'react'

const Navbar=()=>{
    const [nav,setNav]=useState(false);

    const handleNav=()=>{
        setNav(!nav);
    }

    const navIteams=[
        {id:1, text:'Home'},
        {id:2, text:'SHPH'},
        {id:3, text:'B24H'},
        {id:4, text:'SMAH'},

    ]

    
    
    return(
        <div className='bg-black flex justify-between items-center h-24 max-w[1240px] mx-auto px-4 text-white'>
            {/* Logo Section  */}
            <h1 className='w-full text-3xl font-bold text-[#00df9a]'>SUST Hall Management System</h1>

            {/* Desktop Navigation */}
            <ul className='hidden md:flex'>
                {
                    navIteams.map(iteam =>(
                    <li key={iteam.id}
                    className='p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black'>
                        {iteam.text}
                    </li>
                    ))
                }

            </ul>

        </div>
    )

}

export default Navbar