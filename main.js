// Normal Request Form
const DOMAIN = "https://jsonplaceholder.typicode.com";
const normalRequestForm = document.getElementById("normal-request");
normalRequestForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const result = normalRequestForm.querySelector("pre");
  result.textContent = "Loading...";
  const response = await fetch(`${DOMAIN}/users/1`);
  const json = await response.json();
  result.textContent = JSON.stringify(json, null, 2);
});

// MTE Relay Form
// Requires 2 changes to the above request
// 1. Change the DOMAIN of the request to point to MTE Relay Server
// 2. Change fetch to mteFetch, which handles all the encryption/decryption
const MTE_RELAY_DOMAIN = "__MTE_RELAY_SERVER_URL_HERE__";
const mteRelayRequestForm = document.getElementById("mte-relay-request");
mteRelayRequestForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const result = mteRelayRequestForm.querySelector("pre");
  result.textContent = "Loading...";
  const response = await fetch(`${MTE_RELAY_DOMAIN}/users/1`);
  const json = await response.json();
  result.textContent = JSON.stringify(json, null, 2);
});
