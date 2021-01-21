import React from 'react';
import styles from "./footer.module.css";
import { Mail, Phone, Facebook, Twitter, Instagram, Linkedin } from 'react-feather';

const footer = () => {
    return (
        <footer className="container mx-auto text-white rounded-xl mt-5 px-12 py-4 bg-footerBackground">
            
           <div className="grid lg:grid-cols-4 gap-4 md:grid-cols-3 sm:grid-cols-1">
                <div className="row-span-6 lg:col-span-1 md:col-span-3 mx-auto">
                    <img className="w-60" src="/images/KZILLA-logo-B-mono-1.png" alt="KZILLA-logo-B-mono-1"/>
                </div>
                <div className="lg:col-span-3 md:col-span-3 sm:col-span-1 flex lg:justify-end sm:justify-center mr-8 mb-4">
                    <Facebook className="inline-block mx-4" size={32}/>
                    <Twitter className="inline-block mx-4" size={32}/>
                    <Instagram className="inline-block mx-4" size={32}/>
                    <Linkedin className="inline-block mx-4" size={32}/>
                    
                 </div>
                <div className="md:col-span-1 text-3xl">
                <ul >
                        Explore
                        <li  className="my-2 text-xl">
                        <a href="#"><span>Home</span></a>
                        </li>
                        <li className="my-2 text-xl">Events
                        <a href="#"><span>Events</span></a>
                         
                        </li>
                        <li className="my-2 text-xl">
                        <a href="#"><span>About us</span></a>
                         
                        </li>
                        <li className="my-2 text-xl">
                        <a href="#"><span>Our Services</span></a>
                         
                        </li>
                        <li className="my-2 text-xl">
                        <a href="#"><span >Team</span></a>
                         
                        </li>
                        
                    </ul>
                     </div>
                  <div className="md:col-span-1 text-3xl">
                    <ul >
                        What's new
                        <li className="my-2 text-xl">
                        <a href="#"><span>Projects</span></a>
                         
                        </li>
                        <li className="my-2 text-xl">
                        <a href="#"><span>YouTube</span></a>
                        </li>
                        <li className="my-2 text-xl">
                        <a href="#"><span>Blogs</span></a>
                        </li>
                        
                    </ul>
                    </div>
                    <div className="md:col-span-1 text-3xl">
                         <ul >
                        Get in touch
                            <li className="my-2 text-xl">
                            <Mail className="inline-block" size={18} />
                            
                            <a href="#"className="inline-block mx-1"><span>hello@srmkzilla.net</span></a>
                                 
                            </li>
                            <li className="my-2 text-xl">
                            <Phone className="inline-block" size={18} />
                            
                            <a href="#" className="inline-block mx-1"><span>Akshat Sinha</span></a>
                                
                            </li>
                            <li className="my-2 text-xl">
                            <Phone className="inline-block" size={18} />
                            
                            <a href="#" className="inline-block mx-1"><span>Ishan Chabra</span></a>
                                
                            </li>
                            <li className="my-2 text-xl">
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
