import React from 'react'
import { Mail, Phone, Facebook, Twitter, Instagram, Linkedin } from 'react-feather';

const footer = () => {
    return (
        <footer className="container mx-auto text-white rounded-xl mt-5 px-12 py-4 bg-footerBackground">
            
           <div className="grid grid-cols-4 gap-4">
                <div className="row-span-6">
                    <img className="w-60" src="/images/KZILLA-logo-B-mono-1.png" alt="KZILLA-logo-B-mono-1"/>
            </div>
                <div className="col-span-3 flex justify-end mr-8 mb-4">
                    <Facebook className="inline-block mx-4" size={32}/>
                    <Twitter className="inline-block mx-4" size={32}/>
                    <Instagram className="inline-block mx-4" size={32}/>
                    <Linkedin className="inline-block mx-4" size={32}/>
                    
                 </div>
                <div className="row-span-5">
                <ul>
                        Explore
                        <li  className="my-2">
                        <a href="#"><span>Home</span></a>
                        </li>
                        <li className="my-2">Events
                        <a href="#"><span>Events</span></a>
                         
                        </li>
                        <li className="my-2">
                        <a href="#"><span>About us</span></a>
                         
                        </li>
                        <li className="my-2">
                        <a href="#"><span>Our Services</span></a>
                         
                        </li>
                        <li className="my-2">
                        <a href="#"><span>Team</span></a>
                         
                        </li>
                        
                    </ul>
  </div>
                <div className="row-span-5">
                <ul>
                        What's new
                        <li className="my-2">
                        <a href="#"><span>Projects</span></a>
                         
                        </li>
                        <li className="my-2">
                        <a href="#"><span>YouTube</span></a>
                        </li>
                        <li className="my-2">
                        <a href="#"><span>Blogs</span></a>
                        </li>
                        
                    </ul>
  </div>
                <div className="row-span-5">
                <ul >
                        Get in touch
                            <li className="my-2">
                            <Mail className="inline-block" size={18} />
                            
                            <a href="#"className="inline-block mx-1"><span>hello@srmkzilla.net</span></a>
                                 
                            </li>
                            <li className="my-2">
                            <Phone className="inline-block" size={18} />
                            
                            <a href="#" className="inline-block mx-1"><span>Akshat Sinha</span></a>
                                
                            </li>
                            <li className="my-2">
                            <Phone className="inline-block" size={18} />
                            
                            <a href="#" className="inline-block mx-1"><span>Ishan Chabra</span></a>
                                
                            </li>
                            <li className="my-2 ">
                            <Phone className="inline-block" size={18} />
                            <a href="#" className="inline-block mx-1"><span>Sweta Nayak</span></a>

                            
                             </li>
                        
                    </ul>
  </div>
</div>
            <div className="">
            <small  className="flex justify-center"><span>&copy;</span> Made with <span>&hearts;</span> from
          <a href="#"><span>SRMKZILLA</span></a></small>
</div>

    </footer>
             
    )
}

export default footer
