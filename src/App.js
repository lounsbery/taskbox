import './index.css';
import store from './lib/store';

import { Provider } from 'react-redux';
import { PureInboxScreen } from './components/InboxScreen';

function App() {
  return (
    <Provider store={store}>
      <PureInboxScreen />
    </Provider>
  );
}
export default App;