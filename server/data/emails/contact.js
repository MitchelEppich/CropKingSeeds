exports.contact = input => {
  console.log(input.subject);
  let recipient =
    input.subject === "Advertisement"
      ? "jenn@vancoastind.com"
      : "info@cropkingseeds.com";
  if (["Event Sponsorship", "Wholesale Inquiry"].includes(input.subject))
    recipient = "vanessa@vancoastind.com";
  return {
    from: input.email,
    to: recipient,
    replyTo: input.email,
    recipient,
    subject: input.subject + " - Crop King Seeds",
    html: `
   <style type="text/css">
      body,
      text,
      p {
        font-family: sans-serif;
        font-size: 14px;
        padding: 2px;
        margin: 0;
        background: white;
      }
      .tg {
        border-collapse: collapse;
        border-spacing: 0;
        background: white;
      }
      .tg td {
        font-family: sans-serif;
        font-size: 14px;
        color: #404040;
        padding: 10px 5px;
        background: white;
        border-style: none;
        border: 0px;
        overflow: hidden;
        word-break: normal;
        
      }
      .tg th {
        font-family: sans-serif;
        font-size: 14px;
        font-weight: normal;
        padding: 10px 5px;
        background: white;
        border-style: none;        
        border: 0px;
        overflow: hidden;
        word-break: normal;
        
      }
      .tg-0lax {
        text-align: left;
        padding: 5px 14px;
        vertical-align: top;
      }
      .tg-1lax {
    text-align: left;
    padding: 5px 14px;
    width: 135px;
      }
      .bold {
        font-weight: bold;
        text-transform: uppercase;
      }
    </style>

    <p
      style="background: #fff;
      font-size: 18px;
      padding: 15px; "
    >
      <span style=" text-transform: uppercase; font-weight: bold;">Subject:</span>
      <span
        style="
        text-transform: uppercase;
        color: #656565;
        
    "
        >${input.subject}</span
      >
    </p>

    <table style="background: #fff; border: 0" class="tg">
       
      <tr style="margin-top: 20px; padding: 5px 0; background: #fff;">
        <td style="vertical-align: top; font-weight: bold; text-transform: uppercase; width: 130px" class="tg-0lax bold">Full Name:</td>
        <td class="tg-0lax">${input.name}</td>
      </tr>
      <tr style="padding:5px 0; background: #fff;">
        <td style="vertical-align: top; font-weight: bold; text-transform: uppercase; width: 130px" class="tg-0lax bold">Email Address:</td>
        <td class="tg-0lax">${input.email}</td>
      </tr>
      <tr style="padding:5px 0; background: #fff;">
        <td style="vertical-align: top; font-weight: bold; text-transform: uppercase; width: 130px" class="tg-0lax bold">Message:</td>
        <td class="tg-0lax">${input.body}</td>
      </tr>
      ${
        input.phone
          ? `<tr style="padding:5px 0; background: #fff;">
        <td style="vertical-align: top; font-weight: bold; text-transform: uppercase; width: 130px" class="tg-0lax bold">Phone:</td>
        <td class="tg-0lax">${input.phone}</td>
      </tr>`
          : `<tr style="background: white"></tr>`
      }
      ${
        input.company
          ? `<tr style="padding:5px 0; background: #fff;">
        <td style="vertical-align: top; font-weight: bold; text-transform: uppercase; width: 130px" class="tg-0lax bold">Company:</td>
        <td class="tg-0lax">${input.company}</td>
      </tr>`
          : `<tr style="background: white"></tr>`
      }
      ${
        input.eventName
          ? `<tr style="padding:5px 0; background: #fff;">
        <td style="vertical-align: top; font-weight: bold; text-transform: uppercase; width: 130px" class="tg-0lax bold">Event Name:</td>
        <td class="tg-0lax">${input.eventName}</td>
      </tr>`
          : `<tr style="background: white"></tr>`
      }
      ${
        input.website
          ? `<tr style="padding:5px 0; background: #fff;">
        <td style="vertical-align: top; font-weight: bold; text-transform: uppercase; width: 130px" class="tg-0lax bold">Website:</td>
        <td class="tg-0lax">${input.website}</td>
      </tr>`
          : `<tr style="background: white"></tr>`
      }
      ${
        input.location
          ? `<tr style="padding:5px 0; background: #fff;">
        <td style="vertical-align: top; font-weight: bold; text-transform: uppercase; width: 130px" class="tg-0lax bold">Location:</td>
        <td class="tg-0lax">${input.location}</td>
      </tr>`
          : `<tr style="background: white"></tr>`
      }
      ${
        input.date
          ? `<tr style="padding:5px 0; background: #fff;">
        <td style="vertical-align: top; font-weight: bold; text-transform: uppercase; width: 130px" class="tg-0lax bold">Date:</td>
        <td class="tg-0lax">${input.date}</td>
      </tr>`
          : `<tr style="background: white"></tr>`
      }
      ${
        input.cost
          ? `<tr style="padding:5px 0; background: #fff;">
        <td style="vertical-align: top; font-weight: bold; text-transform: uppercase; width: 130px" class="tg-0lax bold">Cost:</td>
        <td class="tg-0lax">${input.cost}</td>
      </tr>`
          : `<tr style="background: white"></tr>`
      }
      ${
        input.mediaKit
          ? `<tr style="padding:5px 0; background: #fff;">
        <td style="vertical-align: top; font-weight: bold; text-transform: uppercase; width: 130px" class="tg-0lax bold">Media Kit (URL)</td>
        <td class="tg-0lax">${input.mediaKit}</td>
      </tr>`
          : `<tr style="background: white"></tr>`
      }
    </table>

    <div
      style="  
            background: #fff;
            display: inline-flex;
            width: 100%;
            margin-top: 40px;
            padding: 10px;
            align-items: center;
            "
    >     
      <div style="margin-top: 10px;color: #000;margin-left: 20px;">
        <span style="font-weight: bold">Canada:</span> (604) 563-0291<br />
        <span style="font-weight: bold">USA:</span> +1 (844) 276-7546<br />
        <span style="font-weight: bold">Worldwide:</span> +1 (604) 563-0291<br />
        <p style="font-weight: bold; margin-top: 10px">www.cropkingseeds.com</p>
      </div>
    </div>`
  };
};
