
import React from 'react'

const Contact = () => {
  return (
    <div>
      <div className=' mt-36'>
        <h1 className='grid place-items-center text-5xl font-bold'>
          Let's Connect
        </h1>
        <p className='text-gray-500 grid place-items-center'>Whether you have questions about our natural gas solutions, need assistance, or want to learn </p>
       <p className='text-gray-500 grid place-items-center'>more about how Weston Energy can benefit your business, we’d love to hear from you</p>
      <div className='flex'>
      <div className='pl-9'>
       <div className='col-span-5 pb-5 inline-block border border-slate-300 rounded-lg px-12 mt-5 w-[652] h-[635] '>
        <p className='mt-14'>
          <span className='text-gray-600'>Weston Energy /</span>
          <span>Contact Us</span>
          </p>
          <h1 className='mt-8 font-bold text-2xl'>Contact Us Today</h1>
          <p className='text-slate-700 mt-2'>Enter Your details</p>
          <div className='flex gap-5 mt-4'>
            <div>
              <p className='text-slate-500'>First Name</p>
               <input placeholder='Enter Your First Name' className='px-8 py-2 border border-slate-300 rounded-lg'/>
            </div>
            <div>
              <p className='text-slate-500'>Last Name</p>
               <input placeholder='Enter Your Last Name' className='px-8 py-2  border border-slate-300 rounded-lg'/>
            </div>
            </div>
            <div className='mt-4 text-slate-500'>
              <p>Email</p>
               <input placeholder='Enter Your Email' className='py-2 px-48 border border-slate-300 rounded-lg'/>
            </div>
            <div className='mt-4 text-slate-500'>
              <p>Message</p>
               <input placeholder='Enter Your Message here' className='py-9 px-48 border border-slate-300 rounded-lg'/>
            </div>
            <div className='mt-4 grid place-items-end'>
              <button className='bg-blue-800 rounded-lg font-bold text-white px-5 py-3 hover:bg-white hover:text-blue-800'>Submit</button>
            </div>
       </div>
       </div>
       <div className='px-14 '>
       <div className=' pr-6 px-14 col-span-5 pb-5 inline-block border border-slate-300 rounded-lg  mt-5 w-[600] h-[635] '>
        <div className='w-[120%]'>
        <p className='mt-14'>
          <span className='text-gray-600'>Weston Energy /</span>
          <span>About Us</span>
          </p>
          <h1 className='mt-8 font-bold text-2xl'>Contact Info</h1>
        
         <div className='mt-6'>
           <h1>Email Support</h1>
           <p className='text-gray-500'>Email us and we will get back to you as soon as possible!</p>
         </div>
         <div className='mt-3'>westonenergi@outlook.com</div>
         <div className='mt-5'>
          <h1>WhatsApp</h1>
         <p className='text-gray-500'>Our WhatsApp contact is always active</p>
         </div>
          <div>+233 503130329</div>
          {/* <div className='mt-8'>
          <h1>Address</h1>
         <p className='text-gray-500'>Locate Us:</p>
         <h1 className='mt-4'>No.16 Nii Amaah Ollenu Street
Airport West Residential Area
Accra, Ghana</h1>
         </div> */}
         </div>
        </div>
       </div>
       </div>

      </div>
    </div>
  )
}

export default Contact
