import React from 'react';
import { Root, Routes } from 'react-static';
import Analytics from './google-analytics';
import { GlobalStyle } from './global-style';
import { Loading } from './components/loading';

// import default prism theme styles
import 'prismjs/themes/prism.css';

const App = () => (
  <Root>
    <GlobalStyle />
    <Analytics id="UA-43290258-1">
      <React.Suspense fallback={<Loading />}>
        <Routes />
      </React.Suspense>
    </Analytics>
  </Root>
);

export default App;
