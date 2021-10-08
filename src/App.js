import React, { useState } from "react";
import {
  Button,
  Card,
  CardBlock,
  Container,
  Form,
  FormGroup,
  Label,
  Input
} from '@bootstrap-styled/v4';
import BootstrapProvider from '@bootstrap-styled/provider';

function App() {
  const [address, setAddress] = useState("");
  const [codeBlockIsVisible, setCodeBlockIsVisible] = useState(false);

  return (
    <BootstrapProvider theme={{}}>
      <Container className="py-2">
        <Card>
          <CardBlock>
            {codeBlockIsVisible ?
             <>
              <pre className="border p-2 bg-light" style={{overflowX: "scroll"}}>
                <code>

// copy this code block into your website {"\n"}
{"\n"}
// include these elements in the body of your page {"\n"}
&lt;div id="polkadot-modal-root"&gt;&lt;/div&gt;{"\n"}

&lt;button onClick="polkadotDonateButtonClick()"&gt;{"\n"}
{"  "}Donate with Polkadot{"\n"}
&lt;/button&gt;{"\n"}
{"\n"}
// include these script elements at the bottom of the{"\n"}
// page's body{"\n"}
&lt;script src="https://scottsilver.io/polkadot-donation-button/polkadot-lib.js"&gt;
&lt;/script&gt;{"\n"}
&lt;script&gt;{"\n"}
function polkadotDonateButtonClick() &#123;{"\n"}
{"  "}window.initPolkadotDonationButton(&#123;{"\n"}
{"    "}recipientPolkadotAddress: "{address}"{"\n"}
{"  "}&#125;);{"\n"}
&#125;{"\n"}
&lt;/script&gt;
                </code>
              </pre>
             </>
            :
            <>
              <Form>
                <FormGroup>
                  <Label>
                    Recipient Polkadot Address
                  </Label>
                  <Input
                    type="text"
                    style={{boxSizing: "border-box"}}
                    value={address}
                    onChange={e => setAddress(e.target.value)}
                    placeholder="e.g. 5EUpGZEAWwYkZrK...."
                  />
                </FormGroup>
              </Form>
              <Button
                color="primary"
                onClick={() => setCodeBlockIsVisible(true)}
                disabled={address == ""}
              >Generate Donation Button</Button>
            </>}
          </CardBlock>
        </Card>
      </Container>
    </BootstrapProvider>
  );
}

export default App;
