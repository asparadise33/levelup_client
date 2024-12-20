import EventForm from '../../components/EventForm';
import { useAuth } from '../../utils/context/authContext';

const NewEvent = () => {
  const { user } = useAuth();
  return (
    <div>
      <h2>Register a New Event!</h2>
      <EventForm user={user} />
    </div>
  );
};

export default NewEvent;
