(this.webpackJsonppolkadot_donation_button_generator_site=this.webpackJsonppolkadot_donation_button_generator_site||[]).push([[0],{22:function(t,e,o){"use strict";o.r(e);var n=o(0),i=o(4),c=o.n(i),s=o(8),l=o(3),r=o(14),a=o(2);var d=function(){var t=Object(n.useState)(""),e=Object(s.a)(t,2),o=e[0],i=e[1],c=Object(n.useState)(!1),d=Object(s.a)(c,2),b=d[0],j=d[1];return Object(a.jsx)(r.a,{theme:{},children:Object(a.jsx)(l.d,{className:"py-2",children:Object(a.jsx)(l.b,{children:Object(a.jsx)(l.c,{children:b?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(l.h,{children:"Your donation button"}),Object(a.jsx)("div",{className:"mb-5",children:Object(a.jsx)(l.a,{size:"sm",color:"warning",style:{backgroundColor:"#FF8C00"},onClick:function(){window.initPolkadotDonationButton({recipientPolkadotAddress:o})},children:"Donate with Polkadot"})}),Object(a.jsx)(l.h,{className:"mb-1",children:"Copy the following code into your web page"}),Object(a.jsx)("pre",{className:"border p-2 bg-light mt-1 small",style:{overflowX:"scroll",lineHeight:1.2,fontSize:"14px"},children:Object(a.jsxs)("code",{className:"small",children:["// include these elements in the body of your page ","\n",'<div id="polkadot-modal-root"></div>',"\n",'<button onClick="polkadotDonateButtonClick()">',"\n","  ","Donate with Polkadot","\n","</button>","\n","\n","// include these script elements at the bottom of the","\n","// page's body","\n",'<script src="https://scottsilver.io/polkadot-donation-button/polkadot-lib.js"> <\/script>',"\n","<script>","\n","function polkadotDonateButtonClick() {","\n","  ","window.initPolkadotDonationButton({","\n","    ",'recipientPolkadotAddress: "',o,'"',"\n","  ","});","\n","}","\n","<\/script>"]})})]}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(l.e,{children:Object(a.jsxs)(l.f,{children:[Object(a.jsx)(l.h,{children:"Recipient Polkadot Address"}),Object(a.jsx)(l.g,{type:"text",style:{boxSizing:"border-box"},value:o,onChange:function(t){return i(t.target.value)},placeholder:"e.g. 5EUpGZEAWwYkZrK...."})]})}),Object(a.jsx)(l.a,{color:"primary",onClick:function(){return j(!0)},disabled:""==o,children:"Generate Donation Button"})]})})})})})};c.a.render(Object(a.jsx)(d,{}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.eaa0936b.chunk.js.map