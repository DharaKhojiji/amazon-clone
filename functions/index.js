const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { response } = require("express");
const { computeHeadingLevel } = require("@testing-library/react");
const stripe = require("stripe")(
  "sk_test_51KRBPoSJE7JFLGpTKqSJqql7uhyHMaVab15Fg27THkJtSWwSRTygVA9HUkBqTkerEPM4Qrv7Waekonszw4RQpXhK00Xqqcqibb"
);

//API

//API CONFIG
const app = express();

//MIDDELWAERS
app.use(cors({ origin: true }));
app.use(express.json());

//API route
app.post("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("payment request recieved", total);

  const paymentIntetnt = await stripe.paymentIntents.create({
    amount: total, //subunit of the cuurrency
    currency: "usd",
  });

  response.status(201).send({
    clientSecret: paymentIntetnt.client_secret,
  });
});

//Listen command
exports.api = functions.https.onRequest(app);

//Example endpoint
//http://localhost:5001/clone-addf3/us-central1/api
