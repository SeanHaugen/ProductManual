import React, { useEffect, useState } from "react";
import axios from "axios";

function FedexTool({ product }) {
  const [weight, setWeight] = useState("");
  const [dimension, setDimension] = useState("");
  const [zip, setZip] = useState("");

  //   let numbersOnly = product.package_size.match(/\d+/g).map(Number);
  //   setDimension(numbersOnly);

  const fetchData = async () => {
    // const input = { weight, dimensions };
    try {
      const response = await axios.post(
        "https://cors-anywhere.herokuapp.com/https://apis-sandbox.fedex.com/rate/v1/rates/quotes",

        {
          headers: {
            "content-type": "application/json",
            "X-locale": "en_US",
            access_token:
              "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzY29wZSI6WyJDWFMiXSwiUGF5bG9hZCI6eyJjbGllbnRJZGVudGl0eSI6eyJjbGllbnRLZXkiOiJsN2U4ZmM1NjBmMjc2ODRmYjhiOTQ3YWM5MDJjNWRkMDgxIn0sImF1dGhlbnRpY2F0aW9uUmVhbG0iOiJDTUFDIiwiYWRkaXRpb25hbElkZW50aXR5Ijp7InRpbWVTdGFtcCI6IjMwLUp1bi0yMDIzIDA5OjE0OjE2IEVTVCIsImdyYW50X3R5cGUiOiJjbGllbnRfY3JlZGVudGlhbHMiLCJhcGltb2RlIjoiU2FuZGJveCIsImN4c0lzcyI6Imh0dHBzOi8vY3hzYXV0aHNlcnZlci1zdGFnaW5nLmFwcC5wYWFzLmZlZGV4LmNvbS90b2tlbi9vYXV0aDIifSwicGVyc29uYVR5cGUiOiJEaXJlY3RJbnRlZ3JhdG9yX0IyQiJ9LCJleHAiOjE2ODgxMzgwNTYsImp0aSI6IjQzMzg4MDdiLWU0M2UtNGRhOC1hNzc1LTQxYTZmNTY0ODNkOCJ9.e-fLGsgAljZiDQG3_rHntkdmPLb4Ihw_Wsz9PCqIOsRvzN2urqmnqed04Vm2wxwopf7B45BY8wCVRjO--S4Hy3KK5_9Y60zsJnCuqufrZfcvBPWc4z9Pcxwi-KvDz7sY7V5lDuE3R6nBYxvjVXFV2VlNmchStGB0cI_FGfPDUcrl6Nl-_ISAt3YQcsoEO8sgBL1aGIOUxGZFCwlstuCvekiQILjB-Ie18L6EDlij7owq9CcKYiT8TlQaGMuuAbTGUb6YGq3UeunvQYNSpe3HR1EfaxuqxyviBu3YBsUZdC3BXagtqOFecSlWAdy4qxR_rpFVYZnjYF4qYCR4wjl3GbMfrKPM0GnQ-ltLA9qbEUrUq5q3zcPMuopIeJVNs5PjNWd1cy7PY-xYAN_XOHj9BmTGpzhKJw6x4BA1r-Hl6FFrZ5z26vGUBFTrY0xis64_uX6V3sBOwk2mgCoaHRus3deDhiwX-xbrWFYdSCiwuq0PsHvUQXVpj9e5PT6OXaJlFXsWuivl3HROdod1FUcwhhwP3w_41JiGsB_59TrOhsNktqQvlavWtkmM8smmQJgpmJo6c0lhbvsOYxdvztrN1bSQ8ofd7p00C7QAejr5jGW7mTI63hMd8jZuZXIdrjUTMUM0r8152vG53h9ldJoD6Er27k7osGeLpPdXd3cJBnM",
            token_type: "bearer",
            expires_in: 3599,
            scope: "CXS",
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="box">
        <h1>Fedex Toolbox</h1>
        <p>
          This Will eventually only need a zip code and output the fedex prices
          below
        </p>
        <ul>
          <li>{product.package_size}</li>
          <li>{product.package_weight}</li>
        </ul>
        <h3>Fedex Quote for Qty 1</h3>
        <label>Zip Code</label>
      </div>
    </>
  );
}

export default FedexTool;
