import { EventType, SpeakerType } from '@pages/events'
import { motion } from 'framer-motion'
import { AiFillLinkedin, AiFillGithub, AiFillMail } from 'react-icons/ai'

const SpeakerCard = ({ speaker }: { speaker: SpeakerType }) => {
  const { image, name, about, linkedIn, githubLink, email } = speaker
  const social = {
    linkedIn: { color: '#0966c3', element: AiFillLinkedin, text: 'LinkedIn' },
    github: { color: '#161b22', element: AiFillGithub, text: 'GitHub' },
    mail: { color: '#EA4335', element: AiFillMail, text: 'Mail' },
  }

  const LinkElement = ({
    link,
    color,
    element,
    text,
  }: {
    link: string
    color: string
    element: any
    text: string
  }) => {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="w-max flex items-center justify-center px-5 py-3 rounded-3xl gap-3 my-4 transform hover:scale-105 duration-100 ease-linear"
        style={{ backgroundColor: color }}
      >
        {element({ size: 24 })}
        <p className="text-white flex-grow-0 font-light">{text}</p>
      </a>
    )
  }

  return (
    <div className="bg-black-200 bg-opacity-95 p-4 rounded-xl xl:mx-12 mb-10 shadow-box flex flex-col md:flex-row text-left relative w-full items- justify-between mx-auto  ">
      <div>
        {image && (
          <img
            className="h-full object-cover rounded-xl overflow-hidden w-64 mx-auto "
            draggable={false}
            src={image}
            alt="card-image"
          />
        )}
      </div>
      <div className="md:pl-10">
        <h1 className="text-white text-center md:text-left text-3xl sm:text-3xl  font-medium mt-5">
          {name}
        </h1>
        <p className="text-white font-light md:pr-8 mt-3 max-w-xs md:max-w-xl">
          {about}
        </p>
        <div className="h-10 md:h-32"></div>
        <div className="grid md:absolute bottom-6 gap-3 grid-cols-2 md:grid-cols-3 md:gap-4 mx-auto justify-center md:justify-start">
          <div>
            {linkedIn && <LinkElement link={linkedIn} {...social.linkedIn} />}
          </div>
          <div>
            {githubLink && <LinkElement link={githubLink} {...social.github} />}
          </div>
          <div>
            {email && <LinkElement link={`mailto:${email}`} {...social.mail} />}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SpeakerCard
