import React, { useState } from "react";

const ServicesProvided = () => {
  const [openwebdev, setOpenwebdev] = useState(false);
  const [openwebdes, setOpenwebdes] = useState(false);
  const [opengfx, setOpengfx] = useState(false);
  const [openapp, setOpenapp] = useState(false);

  const [desc, setDesc] = useState(
    "SRMKZILLA has expertise in creating robust, scalable, responsive, and powerful web portals. This enables us to deliver web portals that are a perfect amalgamation of features such as e-mails, chats, news, and information. If you can think it, we can web it."
  );
  const [title, setTitle] = useState("Web Development");

  const webdev = () => {
    setDesc(
      "SRMKZILLA has expertise in creating robust, scalable, responsive, and powerful web portals. This enables us to deliver web portals that are a perfect amalgamation of features such as e-mails, chats, news, and information. If you can think it, we can web it."
    );
    setTitle("Web Development");
    setOpenwebdev(!openwebdev);
    setOpenwebdes(false);
    setOpengfx(false);
    setOpenapp(false);
  };
  const webdes = () => {
    setDesc(
      "Web design is the digital face of your organization. Quality web design helps you keep your leads on your page. The domain of web designing is one that is dynamic and is only limited by the designers imagination. Hence, at SRMKZILLA, we strive to create aesthetically pleasing designs with a mint of creativity while still keeping up with the latest trends."
    );
    setTitle("Web Design");
    setOpenwebdes(!openwebdes);
    setOpengfx(false);
    setOpenapp(false);
    setOpenwebdev(false);
  };
  const gfx = () => {
    setDesc(
      "Design is thinking made visual. If the aesthetics are not spot-on, your audience will not give you a second glance. At SRMKZILLA, our Graphic Designing team ensures their outputs are a blend of knock-out graphics and smart marketing strategies. From a wide range of logos, brochures, banners, to design that empowers your web identity, we bring art to the cart. You call it illustration, we call it a sweeping victory."
    );
    setTitle("Graphic Designing");
    setOpengfx(!opengfx);
    setOpenwebdes(false);
    setOpenwebdev(false);
    setOpenapp(false);
  };

  const app = () => {
    setDesc(
      "With the world at your fingertips, we expertise in creating unmatched user-experience for your digital solutions. We design, develop and customize cross-platform mobile applications that are robust, secure, and user-friendly. Whether you need applications for entertainment, gaming, web browsing, or communication, we are here to bring it to reality."
    );
    setTitle("Mobile Application");
    setOpenapp(!openapp);
    setOpenwebdes(false);
    setOpenwebdev(false);
    setOpengfx(false);
  };
  return (
    <>
      <div className="bg-baseBlack rounded-2xl text-white text-xl container py-10">
        <h1 className="text-5xl font-semibold text-gray-100 text-center m-5">
          Services we provide
        </h1>
        <div className="flex flex-col lg:flex-row justify-around p-10 container">
          <div className="p-1  mr-5 flex flex-col hidden lg:block">
            <div>
              <h2 className="text-2xl font-semibold text-gray-100 text-left my-5">
                {title}
              </h2>
            </div>
            <div>
              <p className="lg:w-80 text-justify">{desc}</p>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
              <div
                onClick={webdev}
                className={`${
                  openwebdev
                    ? "bg-orange300 text-black"
                    : "bg-baseBlack200 text-white"
                } lg:p-10  p-5 focus:outline-none hover:bg-orange300 cursor-pointer  rounded-2xl mt-3 md:mt-0}`}
              >
                <img
                  src={`${
                    openwebdev
                      ? "/images/Black-webdev.png"
                      : "/images/webdev.png"
                  }`}
                />
                <p className="active:text-black my-2 font-bold">
                  {" "}
                  Web Development
                </p>
              </div>
              <div className={`${openwebdev ? "block lg:hidden" : "hidden"}`}>
                <p className="p-1">
                  SRMKZILLA has expertise in creating robust, scalable,
                  responsive, and powerful web portals. This enables us to
                  deliver web portals that are a perfect amalgamation of
                  features such as e-mails, chats, news, and information. If you
                  can think it, we can web it.
                </p>
              </div>

              <div
                onClick={webdes}
                className={`${
                  openwebdes
                    ? "bg-orange300 text-black"
                    : "bg-baseBlack200 text-white"
                } lg:p-10  p-5 focus:outline-none hover:bg-orange300 cursor-pointer  rounded-2xl mt-3 md:mt-0}`}
              >
                <img
                  src={`${
                    openwebdes
                      ? "/images/Black_webdes.png"
                      : "/images/webdes.png"
                  }`}
                />
                <p className="my-3 font-bold"> Web Design</p>
              </div>
              <div className={`${openwebdes ? "block lg:hidden" : "hidden"}`}>
                <p className="p-1">
                  Web design is the digital face of your organization. Quality
                  web design helps you keep your leads on your page. The domain
                  of web designing is one that is dynamic and is only limited by
                  the designer's imagination. Hence, at SRMKZILLA, we strive to
                  create aesthetically pleasing designs with a mint of
                  creativity while still keeping up with the latest trends.
                </p>
              </div>
              <div
                onClick={gfx}
                className={`${
                  opengfx
                    ? "bg-orange300 text-black"
                    : "bg-baseBlack200 text-white"
                } lg:p-10  p-5 focus:outline-none hover:bg-orange300  cursor-pointer  rounded-2xl mt-3 md:mt-0}`}
              >
                <img
                  src={`${
                    opengfx ? "/images/Black_gfx.png" : "/images/gfx.png"
                  }`}
                />
                <p className="mt-5 font-bold"> Graphic designing</p>
              </div>
              <div className={`${opengfx ? "block lg:hidden" : "hidden"}`}>
                <p className="p-1">
                  Design is thinking made visual. If the aesthetics are not
                  spot-on, your audience will not give you a second glance. At
                  SRMKZILLA, our Graphic Designing team ensures their outputs
                  are a blend of knock-out graphics and smart marketing
                  strategies. From a wide range of logos, brochures, banners, to
                  design that empowers your web identity, we bring art to the
                  cart. You call it illustration, we call it a sweeping victory.
                </p>
              </div>

              <div
                onClick={app}
                className={`${
                  openapp
                    ? "bg-orange300 text-black"
                    : "bg-baseBlack200 text-white"
                } lg:p-10  p-5 focus:outline-none hover:bg-orange300 cursor-pointer  rounded-2xl mt-3 md:mt-0}`}
              >
                <img
                  src={`${
                    openapp ? "/images/Black_app.png" : "/images/app.png"
                  }`}
                />
                <p className="font-bold"> Mobile application</p>
              </div>
            </div>
            <div className={`${openapp ? "block lg:hidden" : "hidden"}`}>
              <p className="p-1 mt-1">
                With the world at your fingertips, we expertise in creating
                unmatched user-experience for your digital solutions. We design,
                develop and customize cross-platform mobile applications that
                are robust, secure, and user-friendly. Whether you need
                applications for entertainment, gaming, web browsing, or
                communication, we are here to bring it to reality.
              </p>
            </div>

            <div className="lg:p-10  p-5 bg-baseBlack200 rounded-2xl my-5">
              <p className="my-2 font-bold">Others</p>
              <p className="my-2">
                We are also expanding our domains with Machine Learning,
                Artificial Intelligence and much more.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesProvided;
