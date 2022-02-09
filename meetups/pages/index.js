import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'Meetup 1',
    image:
      'https://prefeitura.rio/wp-content/uploads/2021/05/Cidade-PlanoEstrategico.jpg',
    address: 'Some address',
    description: 'A meetup',
  },
  {
    id: 'm2',
    title: 'Meetup 2',
    image:
      'https://cdn.panrotas.com.br/portal-panrotas-statics/media-files-cache/303442/cb37a25bd572aaa498e6deb90b35eb97sp/0,0,1280,958/full,0.29/0/default.jpeg',
    address: 'Some address 2',
    description: 'A meetup 2',
  },
];

const HomePage = () => {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
};

export default HomePage;
