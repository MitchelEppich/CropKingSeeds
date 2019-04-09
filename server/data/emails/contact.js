exports.contact = input => {
  let recipient =
    input.subject === "Advertisement"
      ? "jenn@vancoastind.com"
      : "info@cropkingseeds.com";
  if (["Event Sponsorship", "Wholesale Inquiry"].includes(input.subject))
    recipient = "vanessa@vancoastind.com";
  return {
    from: input.email,
    to: recipient,
    recipient,
    subject: "CropKingSeeds.com Contact Form: " + input.subject,
    html: `
    <style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}
.tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}
.tg .tg-0lax{text-align:left;vertical-align:top}
</style>
<table class="tg">
  <tr>
    <td class="tg-0lax">Subject:</td>
    <td class="tg-0lax">${input.subject}</td>
  </tr>
  <tr>
    <td class="tg-0lax">Full Name:</td>
    <td class="tg-0lax">${input.name}</td>
  </tr>
  <tr>
    <td class="tg-0lax">Email Address:</td>
    <td class="tg-0lax">${input.email}</td>
  </tr>
  <tr>
    <td class="tg-0lax">Message:</td>
    <td class="tg-0lax">${input.body}</td>
  </tr>
  <tr>
    <td class="tg-0lax">Phone:</td>
    <td class="tg-0lax">${input.phone ? input.phone : "N/A"}</td>
  </tr>
  <tr>
    <td class="tg-0lax">Company:</td>
    <td class="tg-0lax">${input.company ? input.company : "N/A"}</td>
  </tr>
  <tr>
    <td class="tg-0lax">Website:</td>
    <td class="tg-0lax">${input.website ? input.website : "N/A"}</td>
  </tr>
  <tr>
    <td class="tg-0lax">Location:</td>
    <td class="tg-0lax">${input.location ? input.location : "N/A"}</td>
  </tr>
  <tr>
    <td class="tg-0lax">Date:</td>
    <td class="tg-0lax">${input.date ? input.date : "N/A"}</td>
  </tr>
  <tr>
    <td class="tg-0lax">Cost (estimate, in USD or CAD):</td>
    <td class="tg-0lax">${input.cost ? input.cost : "N/A"}</td>
  </tr>
  <tr>
    <td class="tg-0lax">Media Kit (URL)</td>
    <td class="tg-0lax">${input.mediaKit ? input.mediaKit : "N/A"}</td>
  </tr>
</table>`
  };
};
