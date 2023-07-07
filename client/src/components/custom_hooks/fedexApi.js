const axios = require(axios);

const url = "https://apis-sandbox.fedex.com/rate/v1/rates/quotes";

const OAuth = "https://apis-sandbox.fedex.com/oauth/token";

let client_id = "l7e8fc560f27684fb8b947ac902c5dd081";
let client_secret = "428bb553fc494747af184c6e91b6512e";

let grant_type = "client_credentials";

let bodyFormData = new FormData();

bodyFormData.append("grant_type", grant_type);
bodyFormData.append("client_id", client_id);
bodyFormData.append("client_secret", client_secret);

axios
  .post(OAuth, {
    headers: {
      "Content-Type": "multipart/form-data",
      "X-locale": "en_US",
    },
    data: bodyFormData,
  })
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
