import { EventType } from '@pages/events'
import React from 'react'
const Fade = require('react-reveal/Fade')

const EventTimeline = ({ event }: { event: EventType }) => {
  const { timeline } = event
  const ArrowElement = ({id}) =>
  {
    console.log(id)
    if ( id + 1 == timeline.length ) return <></>;
    if(id%2==0)
    return (
      <div className='mt-10'>
        <svg
      xmlns="http://www.w3.org/2000/svg"
      width="90"
      height="77"
      fill="none"
      viewBox="0 0 132 77"
    >
      <g fill="#fff" filter="url(#filter0_d_329_3)">
        <path d="M-28.403 38.816a1.372 1.372 0 11-2.429-1.276l2.43 1.276zM125.83 57.897a1.371 1.371 0 01-1.567 1.144l-12.2-1.903a1.372 1.372 0 11.423-2.71l10.845 1.69 1.691-10.844a1.373 1.373 0 012.712.423l-1.904 12.2zM-30.831 37.54c4.995-9.51 14.525-22.474 26.943-30.405C2.336 3.158 9.332.417 16.875.058c7.56-.36 15.57 1.679 23.786 7.106l-1.513 2.29C31.38 4.323 23.938 2.47 17.006 2.8c-6.95.33-13.489 2.86-19.417 6.647C-14.3 17.04-23.545 29.57-28.403 38.816l-2.429-1.276zM40.66 7.165c20.54 13.57 23.093 33.277 18.612 46.56-2.215 6.568-6.235 11.784-10.872 13.701-2.362.977-4.89 1.09-7.317.045-2.402-1.035-4.554-3.137-6.342-6.307l2.39-1.347c1.59 2.82 3.345 4.405 5.037 5.134 1.666.717 3.419.67 5.184-.06 3.618-1.496 7.239-5.873 9.32-12.044 4.115-12.198 1.895-30.563-17.525-43.392l1.513-2.29zm-5.919 54c-3.621-6.423-3.842-15.657-1.265-24.32 2.585-8.694 8.068-17.1 16.232-21.82 8.228-4.755 18.98-5.647 31.778.362 12.742 5.983 27.532 18.805 44.095 41.49l-2.216 1.618c-16.428-22.5-30.89-34.916-43.045-40.624-12.1-5.681-21.892-4.716-29.24-.47-7.411 4.285-12.535 12.026-14.974 20.225-2.448 8.23-2.11 16.633 1.025 22.19l-2.39 1.348z"></path>
        <path
          fillOpacity="0.2"
          d="M-28.403 38.816a1.372 1.372 0 11-2.429-1.276l2.43 1.276zM125.83 57.897a1.371 1.371 0 01-1.567 1.144l-12.2-1.903a1.372 1.372 0 11.423-2.71l10.845 1.69 1.691-10.844a1.373 1.373 0 012.712.423l-1.904 12.2zM-30.831 37.54c4.995-9.51 14.525-22.474 26.943-30.405C2.336 3.158 9.332.417 16.875.058c7.56-.36 15.57 1.679 23.786 7.106l-1.513 2.29C31.38 4.323 23.938 2.47 17.006 2.8c-6.95.33-13.489 2.86-19.417 6.647C-14.3 17.04-23.545 29.57-28.403 38.816l-2.429-1.276zM40.66 7.165c20.54 13.57 23.093 33.277 18.612 46.56-2.215 6.568-6.235 11.784-10.872 13.701-2.362.977-4.89 1.09-7.317.045-2.402-1.035-4.554-3.137-6.342-6.307l2.39-1.347c1.59 2.82 3.345 4.405 5.037 5.134 1.666.717 3.419.67 5.184-.06 3.618-1.496 7.239-5.873 9.32-12.044 4.115-12.198 1.895-30.563-17.525-43.392l1.513-2.29zm-5.919 54c-3.621-6.423-3.842-15.657-1.265-24.32 2.585-8.694 8.068-17.1 16.232-21.82 8.228-4.755 18.98-5.647 31.778.362 12.742 5.983 27.532 18.805 44.095 41.49l-2.216 1.618c-16.428-22.5-30.89-34.916-43.045-40.624-12.1-5.681-21.892-4.716-29.24-.47-7.411 4.285-12.535 12.026-14.974 20.225-2.448 8.23-2.11 16.633 1.025 22.19l-2.39 1.348z"
        ></path>
      </g>
      <defs>
        <filter
          id="filter0_d_329_3"
          width="166.738"
          height="76.189"
          x="-34.989"
          y="0.019"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dy="4"></feOffset>
          <feGaussianBlur stdDeviation="2"></feGaussianBlur>
          <feComposite in2="hardAlpha" operator="out"></feComposite>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_329_3"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_329_3"
            result="shape"
          ></feBlend>
        </filter>
      </defs>
    </svg>
      </div>
      )
    else 
       return (
      <div className='mt-64 w-1/3'>
      <img src="/images/arrow-final.png" />
     
      </div>
      )
  }
  return (
    <Fade up>
    <div className="text-white mt-16 lg:mt-0">
      <h1 className="text-6xl sm:text-6xl text-center font-semibold  mb-24 ">
        Timeline
      </h1>
      <ul className="md:m-4 flex w-full flex-col md:flex-row gap-8 lg:gap-16">
        {timeline &&
          timeline.map((i, id) => {
            return (
              <>
              <li
                key={id}
                className="md:w-full bg-black-200 p-6 rounded-xl bg-opacity-95 backdrop-blur-lg "
              >
                <h2 className="mt-3 text-2xl sm:text-3xl">{i.title} </h2>
                <p className="mt-3">{i.date}</p>
                <p className="mt-3">{i.description}</p>
                </li>
                {/* <ArrowElement id={ id }/> */}
              </>
            )
          })}
      </ul>
      </div>
      </Fade>
  )
}
export default EventTimeline
