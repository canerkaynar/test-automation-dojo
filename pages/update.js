import UpdateItem from '../components/UpdateItem';
import Navigation from '../components/Navigation';


const Update = ({ query }) => (
  <div>
    <Navigation/>
    <UpdateItem id={query.id}/>
  </div>
);

export default Update;