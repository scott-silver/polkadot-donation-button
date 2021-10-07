import React from "react";
import {
  Container,
} from '@bootstrap-styled/v4';
import BootstrapProvider from '@bootstrap-styled/provider';

function App() {
  return (
    <BootstrapProvider>
      <Container className="py-2">
        <div className="bg-primary">Header</div>
        <div className="w-25 bg-warning d-inline-block">Sidebar</div>
        <div className="w-75 bg-info d-inline-block">Body</div>
      </Container>
    </BootstrapProvider>
  );
}

export default App;
