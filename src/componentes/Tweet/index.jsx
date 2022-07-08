import { HeartIcon } from '@heroicons/react/outline'


export function Tweet({ name, username, avatar, children }) {
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
          <HeartIcon className='w-6 stroke-1 ' />
          <span>1.7k</span>
        </div>
      </div>

    </div>
  )
}