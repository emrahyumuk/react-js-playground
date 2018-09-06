import createHistory from 'history/createBrowserHistory';
import configureStore from '../../redux/configureStore';

it('creates store succesfully', () => {
  const history = createHistory();
  const store = configureStore(undefined, history);

  expect(store).toHaveProperty('dispatch');
  expect(store).toHaveProperty('getState');
});
