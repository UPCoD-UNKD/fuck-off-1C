export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
    </div>
import { Hero } from './hero/Hero';
import { Mission } from './mission/Mission';
import { Form } from './form/Form';
import FormOrganization from "./form_organization/FormOrganization";
import { Footer } from './footer/Footer';

export const App = () => {
  return (
    <>
      <Hero />
      <Mission />
      <Form />
      <FormOrganization/>
      <Footer />
    </>
  );
};
