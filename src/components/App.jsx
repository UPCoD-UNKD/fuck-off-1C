import { Hero } from './hero/Hero';
import { Mission } from './mission/Mission';
import FormOrganization from './form_organization/FormOrganization';
import { Footer } from './footer/Footer';

export const App = () => {
  return (
    <>
      <Hero />
      <Mission />
      <FormOrganization />
      <Footer />
    </>
  );
};
