// our-domain.com/news
import MeetupDetail from '../../components/meetups/MeetupDetail';


function MeetupDetails() {
  return (
    <MeetupDetail
    image='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/800px-Stadtbild_M%C3%BCnchen.jpg'
    title='First Meetup'
    address='Some Street, Sim City'
    description='This is a first meetup'
    />
)
}
export async function getStaticPaths(){
  return {
    fallback:false,
    paths: [
      {
        params: {
          meetupId:'m1',
        }
      },
      {
        params: {
          meetupId:'m2',
        }
      },
    ]
  }
};

export async function getStaticProps(context){
  // fetch data for a single meetup
    const meetupId = context.params.meetupId;

  return {
    props: {
      meetupData:{

        image:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/800px-Stadtbild_M%C3%BCnchen.jpg',
        id:meetupId,
        title:'First Meetup',
        address: 'Some Street, Sim City',
        description: 'This is a first meetup',
      }
    }
  }

}

export default MeetupDetails;
