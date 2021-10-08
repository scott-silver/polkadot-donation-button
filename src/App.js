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

  const onClick = () => {
    window.initPolkadotDonationButton({
      recipientPolkadotAddress: address
    })
  }

  return (
    <BootstrapProvider theme={{}}>
      <Container className="py-2">
        <Card>
          <CardBlock>
            {codeBlockIsVisible ?
             <>
              <Label>
                Your donation button
              </Label>
              <div className="mb-5">
                <Button
                  size="sm"
                  color="warning"
                  style={{backgroundColor: "#FF8C00"}}
                  onClick={() => onClick()}
                >Donate with Polkadot</Button>
              </div>
              <Label className="mb-1">
                Copy the following code into your web page
              </Label>
              <pre className="border p-2 bg-light mt-1 small" style={{overflowX: "scroll", lineHeight: 1.2, fontSize: "14px"}}>
                <code className="small">
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
