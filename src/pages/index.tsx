import { Certificate } from 'crypto';
import {
  Header,
  Experience,
  Education,
  Certificates,
  Footer,
} from '../components';

function HomePage() {
  return (
    <>
      <Header />
      <Experience />
      <Education />
      <Certificates />
      <Footer />
    </>
  );
}

export default HomePage;
