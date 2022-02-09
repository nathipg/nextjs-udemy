import Head from 'next/head';
import { MongoClient, ObjectId } from 'mongodb';

import MeetupDetail from '../../components/meetups/MeetupDetail';

const MeetupDetails = ({ meetup }) => {
  return (
    <>
      <Head>
        <title>{meetup.title}</title>
        <meta name="description" content={meetup.description} />
      </Head>
      <MeetupDetail
        id={meetup.id}
        title={meetup.title}
        image={meetup.image}
        address={meetup.address}
        description={meetup.description}
      />
    </>
  );
};

export const getStaticPaths = async () => {
  const client = await MongoClient.connect(
    'mongodb+srv://root:root@cluster0.gqup1.mongodb.net/meetups?retryWrites=true&w=majority'
  );
  const db = client.db();
  const meetupsCollection = db.collection('meetups');
  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: false,
    paths: meetups.map(meetup => ({
      params: { id: meetup._id.toString() },
    })),
  };
};

export const getStaticProps = async context => {
  const { id } = context.params;

  const client = await MongoClient.connect(
    'mongodb+srv://root:root@cluster0.gqup1.mongodb.net/meetups?retryWrites=true&w=majority'
  );
  const db = client.db();
  const meetupsCollection = db.collection('meetups');

  const meetup = await meetupsCollection.findOne({ _id: ObjectId(id) });

  client.close();

  return {
    props: {
      meetup: {
        id: meetup._id.toString(),
        title: meetup.title,
        image: meetup.image,
        address: meetup.address,
        description: meetup.description,
      },
    },
  };
};

export default MeetupDetails;
