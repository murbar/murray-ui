import React from 'react';
import styled from 'styled-components';
import Header from 'components/Header';
import Scrambler from 'components/Scrambler';
import Preview from 'Preview';

const Styles = styled.div`
  margin: 0 2rem;
`;

const ScrambleStyles = styled(Scrambler)`
  font-family: monospace;
`;

function App() {
  return (
    <Styles>
      <Header />
      <p>
        July 2019 - is it{' '}
        <a href="https://github.com/facebook/create-react-app/releases">up to date</a>?
      </p>
      <ul>
        <li>No cruft</li>
        <li>Styled components - global styles, theme, helpers</li>
        <li>"Nunito" font face</li>
      </ul>

      <Preview />

      <ScrambleStyles
        string="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ab eum, debitis velit tempora unde autem aut dolores magni consequuntur, eveniet excepturi harum exercitationem earum voluptatem ipsam. Magnam, deserunt laudantium."
        element="p"
      />
    </Styles>
  );
}

export default App;
