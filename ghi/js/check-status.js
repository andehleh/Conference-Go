// Get the cookie out of the cookie store
const payloadCookie = // FINISH THIS
if (payloadCookie) {
  // The cookie value is a JSON-formatted string, so parse it
  const encodedPayload = JSON.parse(payloadCookie.value);

  // Convert the encoded payload from base64 to normal string
  const decodedPayload = // FINISH THIS

  // The payload is a JSON-formatted string, so parse it
  const payload = // FINISH THIS

  // Print the payload
  console.log(payload);

  // Check if "events.add_conference" is in the permissions.
  // If it is, remove 'd-none' from the link


  // Check if "events.add_location" is in the permissions.
  // If it is, remove 'd-none' from the link

}