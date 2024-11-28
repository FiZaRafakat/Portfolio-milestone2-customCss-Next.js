"use client"
import Card from '@/components/Card'
import React, { useState, useRef } from 'react';
import Toast from '@/components/toast';
import emailjs from 'emailjs-com';
import { FaPaperPlane } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa6";
import { MdLocationOn } from "react-icons/md";
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from 'react';
import { Button } from '@/components/ui/moving-border';


const contacts =[
  {
    icon : <FaPhone className='lg:size-16 size-11 text-[#81171b] bg-[#f2d492] px-1 py-1 rounded-md '/>,
    title : "Phone",
    Ans : "(+92) 30675 02568"
  },{
    icon : <FaEnvelope className='lg:size-16 size-11 text-[#81171b] bg-[#f2d492] px-1 py-1 rounded-md '/>,
    title : "Email",
    Ans : "fizarafakat@gmail.com"
  },{
    icon : <MdLocationOn className='lg:size-16 size-11 text-[#81171b] bg-[#f2d492] px-1 py-1 rounded-md '/>,
    title : "Address",
    Ans : "Shah latif town , Karachi , Pakistan"
  }
]
function Page() {

  useEffect(()=>{
    AOS.init({
       easing : "ease-out-back",
       duration : 1200,
       delay : 100 ,
       mirror : true ,
       anchorPlacement : "bottom-bottom",
       offset : 160,
    }) ;
    AOS.refresh()
    },[])
 
  const form = useRef<HTMLFormElement | null>(null);
  const [toastMessage, setToastMessage] = useState<string>('');
  const [showToast, setShowToast] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs.sendForm('service_ie8og09', 'template_3xrsesh', form.current!, '-DMHEO9fz1SGE-B8f')
    .then((result: { text: any; }) => {
      console.log('Message sent:', result.text);
      setToastMessage('Message sent successfully!');
      setShowToast(true);
      form.current?.reset();
    })
    .catch((error: { text: any; }) => {
      console.error('Error:', error.text);
      setToastMessage('Failed to send the message. Please try again later.');
      setShowToast(true);
    });
  };

  const closeToast = () => {
    setShowToast(false);
  };


  return (
    <div className='overflow-hidden'>
        <div className='contact-container'>

          <div className='md:w-1/2' data-aos="fade-right">
          <div className='contact-header'>
          <div className='flex'>
          <h2 className='gradient-text contact-h'>Let&apos;s Work together</h2>
          </div>
           <p className='p max-w-[28rem]'>I&apos;d love to hear form you. Please fill out the form and I&apos;ll get back to you as soon as possible.</p>
           </div>

           <div className='contact-info'>
           { contacts.map((contact)=>(
                    <div key={contact.title} className='contact-item' >
                         <div> 
                          {contact.icon}
                        </div>
                        <div >
                        <span className='contact-title'>{contact.title}</span> 
                        <p className='contact-answer'>{contact.Ans}</p> 
                        </div> 
                   </div>  ))}
           </div>

          </div>


         <div className='form-container' data-aos="fade-left">
         <Card className='form-card'>
           <form ref={form} onSubmit={handleSubmit} className="pb-5">
      <div className="form-fields">
        <div className="field-row">
          <input type="text" name="first_name" placeholder="First Name" className="input-field" required />
          <input type="text" name="last_name" placeholder="Last Name" className="input-field" required />
        </div>
        <div className="field-row">
          <input type="email" name="user_email" placeholder="Email address" className="input-field" required />
          <input type="text" name="phone_number" placeholder="Phone number" className="input-field" required />
        </div>
        <div>
          <textarea name="message" placeholder="Type a message here :)" rows={7} className="textarea-field" required></textarea>
        </div>
      </div>
      <div className='submit-btn-container'>
      <Button type="submit" className='button inline-flex gap-4'  > 
         <span>Submit</span>
         <FaPaperPlane className='size-4 '/>
      </Button>
      </div>

      <div id="toastBox" className="toast-box">
        {showToast && <Toast msg={toastMessage} onClose={closeToast} />}
      </div>

    </form>

          </Card>
         </div>
        </div>
        
    </div>
  )
}

export default Page