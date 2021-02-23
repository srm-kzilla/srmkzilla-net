import React, { useState } from 'react'

const services = [
  {
    title: 'Web Development',
    head: 'If you can think it, we can web it.',
    desc: `
    SRMKZILLA has expertise in creating robust, scalable, responsive, and powerful web portals. This enables us to deliver web portals that are a perfect amalgamation of features such as e-mails, chats, news, and information. 
    `,
    img_light: '/images/webdev.png',
    img_dark: '/images/Black-webdev.png',
  },
  {
    title: 'Web Designing',
    head: 'Painting the digital canvas with aesthetics.',
    desc: `
    Web design is the digital face of your organization. Quality web design helps you keep your leads on your page. The domain of web designing is one that is dynamic and is only limited by the designer's imagination. Hence, at SRMKZILLA, we strive to create aesthetically pleasing designs with a mint of creativity while still keeping up with the latest trends.
    `,
    img_light: '/images/webdes.png',
    img_dark: '/images/Black-webdes.png',
  },
  {
    title: 'Graphics Designing',
    head: 'You call it illustration, we call it a sweeping victory.',
    desc: `
    Design is thinking made visual. If the aesthetics are not spot-on, your audience will not give you a second glance. At SRMKZILLA, our Graphic Designing team ensures their outputs are a blend of knock-out graphics and smart marketing strategies. From a wide range of logos, brochures, banners, to design that empowers your web identity, we bring art to the cart. 
    `,
    img_light: '/images/gfx.png',
    img_dark: '/images/Black-gfx.png',
  },
  {
    title: 'App Development',
    head: 'Apps that leave you in awe.',
    desc: `
    With the world at your fingertips, we expertise in creating unmatched user-experience for your digital solutions. We design, develop and customize cross-platform mobile applications that are robust, secure, and user-friendly. Whether you need applications for entertainment, gaming, web browsing, or communication, we are here to bring it to reality.
    `,
    img_light: '/images/app.png',
    img_dark: '/images/Black-app.png',
  },
]

const ServicesProvided = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <>
      <div className="bg-black-200 rounded-2xl text-white text-xl container mx-auto px-0 md:px-3 py-10">
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-100 text-center md:m-5 m-2 md:px-1 px-5">
          Services we provide
        </h1>
        <div className="flex flex-col lg:flex-row justify-around p-5 md:p-10 container">
          <div className="p-1 w-11/12 mr-0  flex-col hidden lg:block mt-14">
            <div>
              <h2 className="text-2xl font-semibold text-gray-100 text-left w-full mb-3">
                {services[activeIndex].title}
              </h2>
            </div>
            <div>
              <p className="w-11/12 pr-0 text-justify ">
                {services[activeIndex].head}
                <br />
                {services[activeIndex].desc}
              </p>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
              {services.map((service, index) => {
                return (
                  <div key={service.title}>
                    <div
                      onClick={() => {
                        setActiveIndex(index)
                      }}
                      className={`${
                        activeIndex == index
                          ? 'bg-orange300 text-black'
                          : 'bg-black-100 text-white'
                      } lg:px-6 lg:py-6 px-5 py-3 focus:outline-none hover:bg-orange300 cursor-pointer rounded-2xl }`}
                    >
                      <img
                        draggable={false}
                        src={`${
                          activeIndex == index
                            ? `${service.img_dark}`
                            : `${service.img_light}`
                        }`}
                        className="h-8"
                      />
                      <p className="active:text-black my-2 text-lg font-bold">
                        {service.title}
                      </p>
                    </div>
                    <div
                      key={service.title}
                      onClick={() => {
                        setActiveIndex(index)
                      }}
                      className={`${
                        activeIndex == index ? 'block lg:hidden' : 'hidden'
                      }`}
                    >
                      <p className="p-1 text-sm mt-3">
                        {services[activeIndex].head}
                        <br />
                        {services[activeIndex].desc}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="lg:px-10 lg:py-6  p-5 bg-black-100 rounded-2xl mt-5">
              <p className="my-2 font-bold">Penny for a Thought</p>
              <p className="my-2 text-sm">
                Have an amazing idea in mind? Let's discuss it over coffee and
                bring it to life! Creativity has no boundaries, and same applies
                to your ideas. Let's work on it together to create something
                beautiful.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ServicesProvided
