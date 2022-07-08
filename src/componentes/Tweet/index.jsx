import { HeartIcon, BookmarkIcon } from '@heroicons/react/outline'
import avatar from './../../images/avatar.png'

export function Tweet({ name, username, children }) {
  return (
    <div className=" flex space-x-3 p-4 border-b border-silver ">

      <div className=''>
        <img className='max-w-fit w-10 md:w-16' src={avatar} />
      </div>

      <div className='space-y-1'>

        <span className="font-bold text-sm">{name}</span>{' '}
        <span className="text-sm text-silver">@{username}</span>
        <p className=' mx-auto break-all'>{children}</p>


        <div className='flex space-x-1 text-silver text-sm items-center'>
          <button>
            <HeartIcon className='transition ease-linear delay-0 hover:scale-110 duration-75 w-6 stroke-1 ' />
          </button>
          <span>0</span>

        </div>
      </div>


      <div className='md:flex flex-col justify-start items-center space-y-10 !ml-auto '>
        <button className='md:hover:-translate-y-1 stroke-3' >
          <BookmarkIcon className=' w-6 stroke-1  ' />
        </button>
      </div>


    </div>
  )
}