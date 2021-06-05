
import MeetupList from '../components/meetups/MeetupList';


const DUMMY_MEETUPS = [
{
  id: 'm1',
  title: 'A first Meetup',
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/800px-Stadtbild_M%C3%BCnchen.jpg',
  address: 'some adress 5,1234 City',
  description: 'This is a first meetup'
},
{
  id: 'm2',
  title: 'A second Meetup',
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/800px-Stadtbild_M%C3%BCnchen.jpg',
  address: 'some adress 11,61234 City',
  description: 'This is a second meetup'
},
]

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />
}
// this code is during build proces not on erver
// can have server like code
// not on the client , it will not be executed on
// the machines of the visitors
/*
// generated with every request
export async function getServerSideProps(context) {
  const req = context.req;
  const res = context.res;

  // fetch data from API
  return {
    props: {
      meetups: DUMMY_MEETUPS
    }
  }
}
*/


export  async function getStaticProps(){
  return {
    props: {
    meetups: DUMMY_MEETUPS
  },
  revalidate: 10
}
}


export default HomePage;
