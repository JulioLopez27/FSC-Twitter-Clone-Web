import { MAX_TWEET_CHAR } from "../MaxTweetChar";
import { useFormik } from "formik";
import * as yup from 'yup'
import axios from "axios";
import avatar from './../../images/avatar.png'
import { Menu } from '../Menu'


export function TweetForm({ loggedInUser, onSuccess }) {
  const formik = useFormik({
    onSubmit: async (values, form) => {
      await axios({
        method: 'post',
        url: `${import.meta.env.VITE_API_HOST}/tweets`,
        headers: { 'authorization': `Bearer ${loggedInUser.accessToken}` },
        data: { text: values.text },
      })
      // resetea valor campo text
      form.setFieldValue('text', '')
      onSuccess()
    },
    initialValues: {
      text: ''
    }
  })

  function changeText(e) {
    setText(e.target.value)
  }

  return (
    <div className='border-b border-silver p-4 space-y-6'>
      {/* TopMenu */}
      <Menu />

      {/* cabesal */}
      <div className='flex space-x-5'>
        <img src={avatar} className='w-8' />
        <h1 className='font-bold text-xl'>Página inicial</h1>
      </div>

      <form className='pl-12 text-lg flex flex-col' onSubmit={formik.handleSubmit}>
        <textarea
          type="text"
          name='text'
          value={formik.values.text}
          placeholder='Que está pasando?'
          className='w-auto h-auto resize-none bg-transparent outline-none disabled:opacity-50'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          disables={formik.isSubmitting}
        />

        <div className=' flex justify-end items-center space-x-3'>
          <span className='text-sm'>
            <span>{formik.values.text.length}</span> / <span className='text-birdblue'>{MAX_TWEET_CHAR}</span>
          </span>

          <button
            type="submit"
            disabled={formik.values.text.length > MAX_TWEET_CHAR || formik.isSubmitting}
            className='
              bg-birdblue 
               px-5 
               py-2 
               rounded-full 
               disabled:opacity-50'
          >Tweetear</button>

        </div>
      </form>
    </div>
  )
}