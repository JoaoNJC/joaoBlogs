import React from 'react'
import Image from 'next/image'


export default function ProfilePic() {
  return (
    <section>
      <Image
        className='border-4 border-black dark:border-slate-500 drop-shadow-xl shadow-black rounded-full mx-auto mt-8'
        src="/images/joao2.png"
        width={200}
        height={200}
        alt="João"
        priority={true}
      />
    </section>
  )
}
