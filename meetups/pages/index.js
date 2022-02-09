import { MongoClient } from 'mongodb';

import MeetupList from '../components/meetups/MeetupList';

const HomePage = props => {
  return <MeetupList meetups={props.meetups} />;
};

// export const getServerSideProps = async context => {
//   const req = context.req;
//   const res = context.res;

//   // fetch data from API

//   return {
//     props: {
//       meetups: [...DUMMY_MEETUPS],
//     },
//   };
// };

export const getStaticProps = async () => {
  const client = await MongoClient.connect(
    'mongodb+srv://root:root@cluster0.gqup1.mongodb.net/meetups?retryWrites=true&w=majority'
  );
  const db = client.db();
  const meetupsCollection = db.collection('meetups');

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map(meetup => ({
        id: meetup._id.toString(),
        title: meetup.title,
        image: meetup.image,
        address: meetup.address,
      })),
    },
    revalidate: 1, // seconds
  };
};

export default HomePage;
