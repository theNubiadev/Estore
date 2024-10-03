import React from 'react'
import Title from '../components/Title'
import NewsLetterBox from '../components/NewsLetter'
function About() {
  return (
<div>
<div className='text-2xl text-center pt-8 border-t'>
      <Title text1={'ABOUT'} text2={'Us'} />
    </div>

    <div className="my-10 flex flex-col md:flex-row gap-16">
      <img  src='' alt='' className='w-full md:max-w-[450px' />
      <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
      <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore iste officia maxime repellat excepturi esse dolorem ratione aliquam repudiandae ipsa ducimus autem pariatur culpa vel voluptatum unde, velit illum dolorum.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam aperiam explicabo possimus fugiat id dolor architecto officia, doloremque in autem est assumenda perspiciatis tempora labore corrupti voluptatibus adipisci ipsa consectetur?</p>
       < b className='text-gray-700'>Our MISSION</b>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius culpa, excepturi assumenda quisquam quidem dolores, vitae eaque libero aspernatur reprehenderit esse expedita ex totam similique asperiores id facere! Ex, pariatur.</p>
      </div>
    </div>
    <div className="text-xl py-4">
        <Title text1={'WHY'} text2={'Choose Us'} />
    </div>

  <div className="flex flex-col md:flex-row text-sm mb-20">
    <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
      <b>Quality Assurance</b>
      <p  className='text-gray-700'>Lorem ip sum dolor sit amet consectetur adipisicing elit. Deserunt quas cum aliquam labore error quasi aperiam sequi similique nisi fuga velit, asperiores quam iure harum, nam magni sed excepturi quae?</p>
    </div>
    <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
      <b>Convience </b>
      <p className='text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quas cum aliquam labore error quasi aperiam sequi similique nisi fuga velit, asperiores quam iure harum, nam magni sed excepturi quae?</p>
    </div>
    <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
      <b>Exceptional Customer Service </b>
      <p className='text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quas cum aliquam labore error quasi aperiam sequi similique nisi fuga velit, asperiores quam iure harum, nam magni sed excepturi quae?</p>
    </div>
  </div>

<NewsLetterBox />  
</div>
  )
}

export default About