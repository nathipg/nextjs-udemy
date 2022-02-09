import MeetupDetail from '../../components/meetups/MeetupDetail';

const DUMMY_MEETUP = {
  id: 'm1',
  title: 'Meetup 1',
  image:
    'https://prefeitura.rio/wp-content/uploads/2021/05/Cidade-PlanoEstrategico.jpg',
  address: 'Some address',
  description: 'A meetup',
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

export default MeetupDetails;
