import React from 'react';

function Layout({ children }) {
  return (
    <div>
      {children}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');
        html {
          font-family: 'Lato', sans-serif;
        }
      `}</style>
    </div>
  );
}

export default Layout;
