import React from 'react'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { InView } from 'react-intersection-observer'
import axios from 'axios'
import { AiFillGithub, AiFillInstagram, AiFillYoutube } from 'react-icons/ai'

const Stats = () => {
  const [followers, setFollowers] = useState('')
  const [repos, setRepos] = useState('')
  const [subscribers, setSubscribers] = useState('')

  useEffect(() => {
    axios
      .get('https://www.instagram.com/srmkzilla/?__a=1', {
        headers: { 'content-type': 'application/json' },
      })
      .then((res) => {
        setFollowers(res?.data?.graphql?.user?.edge_followed_by.count || '2400')
      })
      .catch((err) => {
        console.log(err)
      })
    axios
      .get('https://api.github.com/users/srm-kzilla', {
        headers: { 'content-type': 'application/json' },
      })
      .then((res) => {
        setRepos(res.data.public_repos)
      })
      .catch((err) => {
        console.log(err)
      })
    axios
      .get(
        'https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UCEPXeeZz6gcnciv-HjwMjsQ&key=' +
          process.env.NEXT_PUBLIC_YOUTUBE_KEY,
        {
          headers: { 'content-type': 'application/json' },
        }
      )
      .then((res) => {
        setSubscribers(res.data.items[0].statistics.subscriberCount)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <div className="lg:px-16 px-0">
      <div className="flex my-6 items-center">
        <InView>
          {({ inView, ref, entry }) => (
            <div
              ref={ref}
              className="instagram relative h-16 rounded-xl w-10/12 bg-black-200 overflow-hidden"
            >
              <h1 className="text-black absolute top-1/2 transform -translate-y-1/2 z-40 right-1/4">
                {followers} followers
              </h1>
              {inView && (
                <motion.div
                  initial={{ x: -500 }}
                  animate={{ x: 0 }}
                  transition={{ duration: 2 }}
                  className="bg-baseGreen rounded-tr-lg relative h-full w-10/12"
                >
                  <motion.img
                    src="./images/Comp-6.gif"
                    draggable={false}
                    className="absolute left-full -translate-y-3 -mt-1 transform -translate-x-2"
                    alt=""
                  />
                </motion.div>
              )}
            </div>
          )}
        </InView>
        <div className="border border-white h-12 w-12 md:h-16 md:w-16 rounded-full ml-3 md:ml-6 relative">
          <AiFillInstagram className="text-white text-2xl md:text-4xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </div>
      </div>
      <div className="flex my-6 items-center">
        <InView>
          {({ inView, ref, entry }) => (
            <div
              ref={ref}
              className="instagram relative h-16 rounded-xl w-8/12 bg-black-200 overflow-hidden"
            >
              <h1 className="text-black absolute top-1/2 transform -translate-y-1/2 z-40 right-1/4">
                {repos} Repositories
              </h1>
              {inView && (
                <motion.div
                  initial={{ x: -500 }}
                  animate={{ x: 0 }}
                  transition={{ duration: 2 }}
                  className="bg-offWhite rounded-tr-lg relative h-full w-9/12"
                >
                  <motion.img
                    src="./images/Comp-7.gif"
                    draggable={false}
                    className="absolute left-full -mt-1 transform -translate-x-1.5"
                    alt=""
                  />
                </motion.div>
              )}
            </div>
          )}
        </InView>
        <div className="border border-white h-12 w-12 md:h-16 md:w-16 rounded-full ml-3 md:ml-6 relative">
          <AiFillGithub className="text-white text-2xl md:text-4xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </div>
      </div>
      <div className="flex my-6 items-center">
        <InView>
          {({ inView, ref, entry }) => (
            <div
              ref={ref}
              className="instagram relative h-16 rounded-xl w-10/12 bg-black-200 overflow-hidden"
            >
              <h1 className="text-black absolute top-1/2 transform -translate-y-1/2 z-40 right-1/4">
                {subscribers} Subscribers
              </h1>
              {inView && (
                <motion.div
                  initial={{ x: -500 }}
                  animate={{ x: 0 }}
                  transition={{ duration: 2 }}
                  className="bg-baseBlue rounded-tr-lg relative h-full w-10/12"
                >
                  <motion.img
                    src="./images/Comp-8.gif"
                    className="absolute left-full transform -translate-x-2"
                    alt=""
                    draggable={false}
                  />
                </motion.div>
              )}
            </div>
          )}
        </InView>
        <div className="border border-white h-12 w-12 md:h-16 md:w-16 rounded-full ml-3 md:ml-6 relative">
          <AiFillYoutube className="text-white text-2xl md:text-4xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </div>
      </div>
    </div>
  )
}

export default Stats
