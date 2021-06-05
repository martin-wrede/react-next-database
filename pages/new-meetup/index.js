// our-domain.com/news

import NewMeetupForm from '../../components/meetups/NewMeetupForm';


function NewMeetupPage() {
  function addMeetupHandler(enteredMeetupData) {
    console.log(enteredMeetupData);
  }

  return <NewMeetupForm addMeetup={addMeetupHandler} />

}

export default NewMeetupPage;
