import React from 'react'


const Card_home = (props: { name: React.ReactNode }) => {
    return (
        <div className='bg-black w-72 h-72 rounded-xl mx-12 p-3 mb-10'>
            <div className="image h-5/6 rounded-t-lg overflow-hidden">
                <img className='w-full' src="./images/testImage.png" alt=""/>
            </div>
            <h1 className='text-white text-center text-xl mt-3'>{props.name}</h1>
        </div>
    )
}

export default Card_home
