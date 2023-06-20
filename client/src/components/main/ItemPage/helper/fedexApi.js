import axios from "axios"


const data = "grant_type=client_credentials&client_id=l7e8fc560f27684fb8b947ac902c5dd081&client_secret=428bb553fc494747af184c6e91b6512e";

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "https://apis-sandbox.fedex.com/oauth/token");
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

xhr.send(data);


const generateAuthToken = async () => {
    const data = "grant_type=client_credentials&client_id=l7e8fc560f27684fb8b947ac902c5dd081&client_secret=428bb553fc494747af184c6e91b6512e";
    const url = "https://apis-sandbox/oauth/token"
    const request = {
        method: "POST",
        headers:  {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        body: data,
    }

    try {
        const response = await axios(url, request)
        const result = await response.json()
        if (response.ok) {
            const authToken = result.access_token;
            console.log("Authorization Token:", authToken);
            return authToken;
          } else {
            console.error("Error:", result.error);
          }
        } catch (error) {
          console.error("Error:", error);
        }
    }

    console.log(generateAuthToken());

    export default generateAuthToken;