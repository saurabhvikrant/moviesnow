import Head from 'next/head';
import { getUpcomingMovies } from '../utils/apiCalls';
import {Container,Box,Column,Text} from 'gestalt'

import Movie from '../components/Movie';
import Oops from '../components/Oops';
import Banner from '../components/Banner';

const Home = ({ movies, error }) => (
  <div className="home">
    <Head>
      <title>MoviesDb</title>
    </Head>
    <Container>
      <Banner/>
    <Box display="flex" direction="row" wrap paddingY={2}>
     {movies.map((props,i) => 
       <Column span={6} mdSpan={3} key={i}>
         <Box padding={1} paddingY={2}>
          <Movie {...props} key={props.id}/>
          </Box>
       </Column>)}
   </Box>
    </Container>
  </div>
);

Home.getInitialProps = async () => {
  const res = await getUpcomingMovies();
  if (res.error) return res;

  const movies = res.results.map(({ title, id, poster_path, overview }) => ({
    title,
    poster_path,
    overview,
    id,
  }));

  return { movies };
};

export default Home;
