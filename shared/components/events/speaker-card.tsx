import { EventType, SpeakerType } from '@pages/events'
import { motion } from 'framer-motion'
import { AiFillLinkedin, AiFillGithub, AiOutlineMail } from 'react-icons/ai'

const SpeakerCard = ({ speaker }: { speaker: SpeakerType }) => {
  const { image, name, about, linkedIn, githubLink, email } = speaker
  const social = {
    linkedIn: { color: '#0966c3', element: AiFillLinkedin, text: 'LinkedIn' },
    github: { color: '#161b22', element: AiFillGithub, text: 'GitHub' },
    mail: { color: '#EA4335', element: AiOutlineMail, text: 'Mail' },
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
        className="w-max flex items-center justify-center p-4 rounded-2xl gap-4 my-4 transform hover:scale-105 duration-100 ease-linear"
        style={{ backgroundColor: color }}
      >
        {element({ size: 24 })}
        <p className="text-white flex-grow-0 font-light">{text}</p>
      </a>
    )
  }

  return (
    <div className="bg-black-200 bg-opacity-95 p-6 rounded-xl xl:mx-12 mb-10 shadow-box flex flex-col md:flex-row text-left relative w-full items- justify-between mx-auto">
      <div>
        <h1 className="text-white text-center md:text-left text-5xl  font-medium mt-5">
          {name}
        </h1>
        <p className="text-white font-light md:pr-8 mt-3 md:max-w-xl">
          {about}
        </p>
        <div className="flex md:absolute bottom-6 gap-4 mx-auto justify-center md:justify-start">
          {linkedIn && <LinkElement link={linkedIn} {...social.linkedIn} />}
          {githubLink && <LinkElement link={githubLink} {...social.github} />}
          {email && <LinkElement link={`mailto:${email}`} {...social.mail} />}
        </div>
      </div>
      {image && (
        <img
          className="h-full object-cover rounded-xl overflow-hidden w-96 mx-auto"
          draggable={false}
          src={image}
          alt="card-image"
        />
      )}
    </div>
  )
}

export default SpeakerCard
