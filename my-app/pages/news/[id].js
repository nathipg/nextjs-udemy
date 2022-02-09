import { useRouter } from 'next/router';

const DetailPage = () => {
  const router = useRouter();
  const id = router.query.id;

  return <h1>Detail Page: {id}</h1>;
};

export default DetailPage;
