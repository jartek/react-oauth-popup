import React from "react";

import { storiesOf } from "@storybook/react";
import OauthPopup from "../src/";

const onCode = (code, params) => {
  console.log("wooooo a code", code);
  console.log("alright! the URLSearchParams interface from the popup url", params);
}
const onClose = () => console.log("closed!");



storiesOf("Oauth-Popups", module).add("basic", () => (
  <OauthPopup
    url="https://api.instagram.com/oauth/authorize/?client_id=daffe79b5f494f269d9ef0d2fcbedc77&redirect_uri=http://localhost:6006/&response_type=code"
    onCode={onCode}
    onClose={onClose}
  > yo </OauthPopup>
));
