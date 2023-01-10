import MeetupList from '../components/meetups/MeetupList'
import { MongoClient } from 'mongodb'
import Head from 'next/head'
import { Fragment } from 'react'

// const DUMMY_MEETUPS = [
//   {
//     id: 'm1',
//     title: 'First Meetup',
//     image:
//       'https://kutyabarathelyek.hu/images/images/2048x2048/12924428885f33e16fd79d4.jpg',
//     address: 'Some Adress 5, 1234 Some City',
//   },
//   {
//     id: 'm2',
//     title: 'Second Meetup',
//     image:
//       'https://kutyabarathelyek.hu/images/images/2048x2048/12924428885f33e16fd79d4.jpg',
//     address: 'Some Adress 5, 1234 Some City',
//   },
//   {
//     id: 'm3',
//     title: 'Third Meetup',
//     image:
//       'https://kutyabarathelyek.hu/images/images/2048x2048/12924428885f33e16fd79d4.jpg',
//     address: 'Some Adress 5, 1234 Some City',
//   },
//   {
//     id: 'm4',
//     title: 'Fourth Meetup',
//     image:
//       'https://kutyabarathelyek.hu/images/images/2048x2048/12924428885f33e16fd79d4.jpg',
//     address: 'Some Adress 5, 1234 Some City',
//   },
// ]

const HomePage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>NextJS Meetups</title>
        <meta name='description' content='ez valami naon jo NextJS app'></meta>
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  )
}

//Data fetching for pre rendeering
export const getStaticProps = async () => {
  //This code executing during the build
  //fetch data from an API
  const client = await MongoClient.connect(
    'mongodb+srv://admin:admin@cluster0.usw3wzm.mongodb.net/meetups?retryWrites=true&w=majority'
  )

  const db = client.db()
  const meetupsCollection = db.collection('meetups')
  const meetups = await meetupsCollection.find().toArray()
  client.close()

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        image: meetup.image,
        address: meetup.address,
        description: meetup.description,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 10,
  }
}

// //On the server after deployment, run on every reguest
// export const getServerSideProps = async (context) => {
//   const req = context.req
//   const res = context.res

//   //fetch data from API

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   }
// }

//Ha nincs szukseg a requestre vagy a responere, akkor a staticProps jobb nekunk, mert gyorsabb

export default HomePage
