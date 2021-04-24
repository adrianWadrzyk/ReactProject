import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';

import {Reset} from 'styled-reset';
import MainPage from './components/MainPage/MainPage';

const GlobalStyle = createGlobalStyle`
  * { 
    margin : 0;
    padding: 0;
    box-sizing: border-box;
  }
`

ReactDOM.render(
  <>    
    <GlobalStyle />
    <Reset />
    <MainPage />
  </>,
  document.getElementById('root')
);
