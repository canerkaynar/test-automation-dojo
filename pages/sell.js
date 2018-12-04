import CreateItem from '../components/CreateItem';
import PleaseSignIn from '../components/PleaseSignIn';
import Navigation from '../components/Navigation';

const Sell = props => (
  <div>
    <Navigation/>
    <PleaseSignIn>
      <CreateItem />
    </PleaseSignIn>
  </div>
);

export default Sell;