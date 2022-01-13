import { useSelector } from 'react-redux';
import { Wrapper, Title } from 'styles';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import { getFilteredContacts } from 'redux/contacts/contacts-selectors';

function App() {
  const filteredContacts = useSelector(getFilteredContacts);

  return (
    <Wrapper>
      <div>
        <Title>Phonebook</Title>
        <ContactForm />
      </div>
      {filteredContacts.length > 0 ? (
        <div>
          <Title>Contacts</Title>
          <Filter />
          <ContactList />
        </div>
      ) : (
        <Title>You don't have contacts</Title>
      )}
    </Wrapper>
  );
}

export default App;
