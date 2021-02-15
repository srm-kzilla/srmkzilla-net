import React from 'react'

const Card_aboutus = (props: { name: String }) => {
    return (
        <div className="w-3/4 md:h-72 lg:h-96 overflow-hidden rounded-t-2xl rounded-b-2xl">
            <div className="bg-baseBlack   p-8">
                <div className="mx-auto font-subHeading my-4 font-bold">
                            <h2 className="font-subHeading not-italic font-bold text-4xl lg:text-5xl text-center text-white">{props.name}</h2>
                            
                </div>
                <div className=" h-72 lg:h-96 ">
                </div>
                        
            </div>
        </div>
    )
}

export default Card_aboutus
