import FormOrganization from "./form_organization/FormOrganization";

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
      <FormOrganization/>
    </div>
  );
};
