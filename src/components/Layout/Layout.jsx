import css from './Layout.module.css';

import AppBar from '../AppBar/AppBar';
import { Toaster } from 'react-hot-toast';

const Layout = ({ children }) => {
  return (
    <div className={css.container}>
      <AppBar />
      <main>{children}</main>
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          style: {
            background: '#f9e3cc',
            color: '#f57a38',
            marginTop: '25px',
          },
        }}
      />
    </div>
  );
};

export default Layout;
