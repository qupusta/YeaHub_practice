import { Provider } from 'react-redux';
import { store } from '../config/store';
import { PropsWithChildren } from 'react';

const StoreProvider = ({ children }: PropsWithChildren) => (
  <Provider store={store}>{children}</Provider>
);

export default StoreProvider;
