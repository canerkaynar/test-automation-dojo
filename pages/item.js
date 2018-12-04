import SingleItem from '../components/SingleItem';
import Navigation from '../components/Navigation';


const Item = props => (
  <div>
    <Navigation/>
    <SingleItem id={props.query.id} />
  </div>
);

export default Item;