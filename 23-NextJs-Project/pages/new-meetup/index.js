import { useRouter } from 'next/router'
import { Fragment } from 'react'
import NewMeetupForm from '../../components/meetups/NewMeetupForm'
import Head from 'next/head'

const NewMeetupPage = () => {
  const router = useRouter()

  const AddMeetupHandler = async (meetupData) => {
    const response = await fetch('/api/new-meetup', {
      method: 'POST',
      body: JSON.stringify(meetupData),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    const data = await response.json()
    console.log(data)
    router.push('/')
  }

  return (
    <Fragment>
      <Head>
        <title>NextJS new Meetup</title>
        <meta name='description' content='new meetup'></meta>
      </Head>
      <NewMeetupForm onAddMeetup={AddMeetupHandler} />
    </Fragment>
  )
}

export default NewMeetupPage
