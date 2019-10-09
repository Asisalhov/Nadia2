import axios from "axios";
// api keys
import config from "../config/apis";

const { GI_API, GI_Secret, sandbox_url } = config;
let TOKEN = null;

export const getToken = async () => {
  try {
    const res = await axios.post(
      `https://sandbox.d.greeninvoice.co.il/api/v1/account/token`,
      {
        id: GI_API,
        secret: GI_Secret
      }
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const verifyGreenInvoiceToken = async () => {
  const greenInvoice = JSON.parse(localStorage.getItem("greenInvoice"));
  if (greenInvoice) {
    const { token, expires } = greenInvoice;
    const currentTime = Date.now() / 1000;
    if (expires < currentTime) {
      const { token, expires } = await getToken();
      saveGreenInvoiceToken({ token, expires });
      return token;
    } else {
      return token;
    }
  } else {
    const { token, expires } = await getToken();

    saveGreenInvoiceToken({ token, expires });
    return token;
  }
};
const saveGreenInvoiceToken = ({ token, expires }) => {
  localStorage.setItem("greenInvoice", JSON.stringify({ token, expires }));
};

/*------------------------clients------------------------------*/
export const getClient = async id => {
  const token = await verifyGreenInvoiceToken();

  try {
    const res = await axios.get(
      `https://api.greeninvoice.co.il/api/v1/clients/${id}`,
      { headers: { Authorization: "bearer " + token } }
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const addClient = async newClient => {
  const token = await verifyGreenInvoiceToken();
  const {
    official_name,
    number,
    contact_person,
    phone_number,
    email,
    address,
    country,
    send_invoice_auto,
    finance_contact,
    finance_email,
    currency,
    payment_terms
  } = newClient;
  try {
    const res = await axios.post(
      `https://api.greeninvoice.co.il/api/v1/clients`,
      {
        name: official_name,
        active: true,
        accountingKey: number,
        paymentTerms: 0,
        address,
        country,
        phone: phone_number,
        contactPerson: contact_person,
        emails: [email, finance_email]
      },
      { headers: { Authorization: "bearer " + token } }
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
export const updateClient = async updClient => {
  const token = await verifyGreenInvoiceToken();
  const {
    official_name,
    number,
    contact_person,
    phone_number,
    email,
    address,
    country,
    send_invoice_auto,
    finance_contact,
    finance_email,
    currency,
    payment_terms
  } = updClient;
  try {
    const res = await axios.put(
      `https://api.greeninvoice.co.il/api/v1/clients/${updClient.id}`,
      {
        name: official_name,
        active: true,
        accountingKey: number,
        paymentTerms: 0,
        address,
        country,
        phone: phone_number,
        contactPerson: contact_person,
        emails: [email, finance_email]
      },
      { headers: { Authorization: "bearer " + token } }
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
export const deleteClient = async id => {
  const token = await verifyGreenInvoiceToken();
  try {
    const res = await axios.delete(
      `https://api.greeninvoice.co.il/api/v1/clients/${id}`,

      { headers: { Authorization: "bearer " + token } }
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

/*------------------------suppliers------------------------------*/
export const getSupplier = async id => {
  const token = await verifyGreenInvoiceToken();
  try {
    const res = await axios.get(
      `https://api.greeninvoice.co.il/api/v1/suppliers/${id}`,
      { headers: { Authorization: "bearer " + token } }
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const addSupplier = async newSupplier => {
  const token = await verifyGreenInvoiceToken();
  const {
    official_name,
    number,
    contact_person,
    phone_number,
    email,
    address,
    country,
    send_invoice_auto,
    finance_contact,
    finance_email,
    currency,
    payment_terms
  } = newSupplier;
  try {
    const res = await axios.post(
      `https://api.greeninvoice.co.il/api/v1/suppliers`,
      {
        name: official_name,
        active: true,
        accountingKey: number,
        paymentTerms: 0,
        address,
        country,
        phone: phone_number,
        contactPerson: contact_person,
        emails: [email, finance_email]
      },
      { headers: { Authorization: "bearer " + token } }
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
export const updateSupplier = async updSupplier => {
  const token = await verifyGreenInvoiceToken();
  const {
    official_name,
    number,
    contact_person,
    phone_number,
    email,
    address,
    country,
    finance_contact,
    finance_email,
    currency,
    payment_terms,
    send_invoice_auto
  } = updSupplier;
  try {
    const res = await axios.put(
      `https://api.greeninvoice.co.il/api/v1/suppliers/${updSupplier.id}`,
      {
        name: official_name,
        active: true,
        accountingKey: number,
        paymentTerms: 0,
        address,
        country,
        phone: phone_number,
        contactPerson: contact_person,
        emails: [email, finance_email]
      },
      { headers: { Authorization: "bearer " + token } }
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteSupplier = async id => {
  const token = await verifyGreenInvoiceToken();
  try {
    const res = await axios.delete(
      `https://api.greeninvoice.co.il/api/v1/suppliers/${id}`,

      { headers: { Authorization: "bearer " + token } }
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
