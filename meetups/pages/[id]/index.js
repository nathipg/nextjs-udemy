import MeetupDetail from '../../components/meetups/MeetupDetail';

const DUMMY_MEETUP = {
  id: 'm2',
  title: 'Meetup 2',
  image:
    'https://cdn.panrotas.com.br/portal-panrotas-statics/media-files-cache/303442/cb37a25bd572aaa498e6deb90b35eb97sp/0,0,1280,958/full,0.29/0/default.jpeg',
  address: 'Some address 2',
  description: 'A meetup 2',
};

const MeetupDetails = () => {
  return (
    <MeetupDetail
      id={DUMMY_MEETUP.id}
      title={DUMMY_MEETUP.title}
      image={DUMMY_MEETUP.image}
      address={DUMMY_MEETUP.address}
      description={DUMMY_MEETUP.description}
    />
  );
};

export const getStaticPaths = async () => {
  return {
    fallback: false,
    paths: [{ params: { id: 'm1' } }, { params: { id: 'm2' } }],
  };
};

export const getStaticProps = async context => {
  const { id } = context.params;

  console.log({ id });

  // fetch data for a single meetup

  return {
    props: {
      meetup: { ...DUMMY_MEETUP },
    },
  };
};

export default MeetupDetails;
