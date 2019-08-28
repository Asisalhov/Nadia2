import axios from "axios";
// api keys
import config from "../config/apis";
const { GI_API, GI_Secret, sandbox_url } = config;

export const getToken = async () => {
  try {
    const res = await axios.post(
      `https://sandbox.d.greeninvoice.co.il/api/v1/account/token`,
      {
        id: GI_API,
        secret: GI_Secret
      }
    );
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};
// 1. Token Creation

// output = {'token':None}
// try:
//     url = "https://sandbox.d.greeninvoice.co.il/api/v1/account/token"
//     payload = "{\n  \"id\": \"1a5ee7f0-b34c-4a81-508f-02aee0138fd6\",\n  \"secret\": \"DQWlKt8lvqw_k6oMl-WwRw\"\n}"
//     headers = {'Content-Type': "application/json"}
//     response = requests.post(url, data=payload, headers=headers)
//     if (200 == response.status_code):
//         import json
//         response_json = json.loads(response.text)
//         output["token"] = response_json.get("token")
//     else:
//         print("Failed to receive token from Heshbonit Yeruka")
//         print(response)
//         print(response.status_code)
//         print(response.text)
// except Exception as e:
//     print("The code has exception")
//     print(e)
// finally:
//     return output

// 2. Client creation

// var output = {customer_id: null};

// fetch('https://sandbox.d.greeninvoice.co.il/api/v1/clients',{

//   method: 'post',

//   body:     JSON.stringify({ name: input.customer_name, emails: [ input.email ], mobile: '0545656675' }),

//   headers:  { 'Content-Type': 'application/json',

//                  Authorization: 'Bearer '+input.token }

// })

//   .then(function(res) {

//     return res.json();

//   }).then(function(json) {

//     // but if i swap this to callback, this works perfect in zapier

//     output.customer_id = json.id

//     callback(null, output);

//   });

// 3. document creation

// var payload =
// {
//   "type": 300,
//   "date": "2019-08-17",
//   "dueDate": "2020-04-30",
//   "vatType": 1,
//   "lang": "he",
//   "currency": "ILS",
//   "description": "שמלת כלה",
//   "remarks": "חשבונית מס / קבלה עבור תעודת משלוח 32",
//   "footer": "תודה על קנייתך!",
//   "emailContent": "הולההה",
//   "client": {
//     "id": input.customer_id
//   },
//   "rounding": false,
//   "signed": true,
//   "income": [
//     {
//       "catalogNum": "458",
//       "description": "שמלת אינה",
//       "quantity": 1,
//       "price": 300,
//       "initialPrice": 0,
//       "amount": 300,
//       "currency": "ILS",
//       "currencyRate": 1,
//       "vatRate": 0,
//       "vatType": 2
//     }
//   ],
//   "payment": [
//     {
//       "date": "2019-04-14",
//       "type": 2,
//       "price": 300,
//       "currency": "ILS",
//       "currencyRate": 1,
//       "bankName": "My Bank",
//       "bankBranch": "198",
//       "bankAccount": "212435",
//       "chequeNum": "10002",
//       "accountId": "TFGFFGSYYE",
//       "transactionId": "TGBBBXNLKS75SKJS",
//       "cardType": 2,
//       "cardNum": "8765",
//       "dealType": 2,
//       "numPayments": 1,
//       "firstPayment": 10
//     }
//   ],
// };

// fetch( input.url ,{
//   method: 'post',
//   body:     JSON.stringify(payload),
//   headers:  { 'Content-Type': 'application/json',
//                  Authorization: 'Bearer '+input.token }
// })
//   .then(function(res) {
//     return res.json();
//   }).then(function(json) {
//     // but if i swap this to callback, this works perfect in zapier
//     callback(null, json);
//   });
