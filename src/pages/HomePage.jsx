import Hero from '../components/Hero';
import Services from '../components/Services';
import Doctors from '../components/Doctors';
import AppointmentForm from '../components/AppointmentForm';
import Testimonials from '../components/Testimonials';
import { services, doctors, testimonials, faqs } from '../data';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Services services={services} />
      <Doctors doctors={doctors} />
      <AppointmentForm />
      <Testimonials testimonials={testimonials} faqs={faqs} />
    </>
  );
};

export default HomePage;

