'use client';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea  } from "@/components/ui/textarea";
import {motion} from 'motion/react'
import { 
  Select,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
  SelectTrigger } from "@/components/ui/select";
import {FaPhoneAlt, FaEnvelope, FaMapMarkerAlt} from 'react-icons/fa'
import { SelectValue } from "@radix-ui/react-select";
import { useState } from "react";
import emailjs from '@emailjs/browser'
import { error } from "console";
const info = [
  {
    icon: <FaPhoneAlt/>,
    title: 'Phone',
    description: '(203) 953 - 1523',
  },{
    icon: <FaEnvelope/>,
    title: 'Email',
    description: 'createdtyler@gmail.com',
  },{
    icon: <FaMapMarkerAlt/>,
    title: 'Zone',
    description: 'North East, United States',
  },
]



const Contact = () => {
  
  // States
  const [firstname, setFirstName] = useState('')
  const [lastname, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [service, setService] = useState('')

  const sendEmail = (e:any) => {
    e.preventDefault();
    //Requirements for emailjs
    const serviceId = 'service_6nwkfdm';
    const templateId = 'template_ujq41fs';
    const publicKey = 'C6iKDCPMKskJh18lu';
    //Create a new object that contains dynamic template params
    const templateParams = {
      from_name : firstname+ ' ' + lastname,
      from_email: email,
      to_name:'gio gonzalez',
      message: message,
      phone_number : phone,
      service_type: service,
    };
    // Send Email with emailJs
    emailjs.send(serviceId,templateId, templateParams, publicKey)
    .then((response) => {
      console.log('Email Sent Successfully', response);
      setEmail('');
      setFirstName('');
      setLastName('');
      setMessage('');
      setPhone('');
      setService('');

    })
    .catch((error) => {
      console.error('Error sending Email: ',error );
    })
  }

  return (
    <motion.section 
    initial={{opacity:0}}
    animate={{opacity:1, transition:{delay:2.4, duration:.4, ease:'easeIn'}}}
    className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* Form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form onSubmit={sendEmail}
            className="flex flex-col gap-6 p-10 bg-[#27272c]
            rounded-xl">
              <h3 className="text-4xl text-accent">Lets Work Together</h3>
              <p className="text-white/60"> Lorem ipsum dolor sit amet 
              consectetur adipisicing elit. Quae perspiciatis provident, 
              culpa voluptas et nam, soluta non facilis aut labore 
              assumenda odit ut temporibus ullam quibusdam enim error.
               Asperiores, quo!
              </p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input 
                type="firstname" 
                placeholder="Firstname"
                value={firstname}
                onChange={(e) => setFirstName(e.target.value)}
                />
                <Input 
                type="lasttname" 
                placeholder="Lastname"
                value={lastname}
                onChange={(e) => setLastName(e.target.value)}
                />
                <Input 
                type="email" 
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
                <Input 
                type="phone" 
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              {/* select */}
              <Select onValueChange={(e) => setService(e)}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service"/>
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="Web Development" >Web Development</SelectItem>
                    <SelectItem value="Api Builder/ Web Scrapper">Api - Web Scrapper</SelectItem>
                    <SelectItem value="UI/X Design">UI/UX Design</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea className="h-[200px]"
              placeholder="Type Your Message Here :)"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              />
              {/* Submit Button */}
              <Button 
              size={'md'} 
              className="max-w-40" 
              type="submit"
              >
                Send Message
              </Button>
            </form>
          </div>
          {/* Info */}
          <div className="flex-1 flex items-center xl:justify-end
          order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, i) => (
                <li key={i} className="flex items-center gap-6 ">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px]
                  bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div> 
    </motion.section>
  )
}

export default Contact