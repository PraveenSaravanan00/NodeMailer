import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

export const createMail = (data: any) => {
  //   console.log("createmail service data ==>", data);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    port: 587,
    auth: {
      user: process.env.EMAILID,
      pass: process.env.PASSWORD,
    },
  });
//   console.log("transporter", transporter);
  const mailOptions: any = {
    from: process.env.EMAILID,
    to: "saravananpraveen07@gmail.com,praveen.s@mitrahsoft.com",
    subject: "Sending email usng node js with nodemailer",
    text: "Hello praveen",
    html: `<h2 style="font-family: Arial; text-align: center;">Large HTML Table (100 Rows)</h2>
  <table border="1" cellpadding="5" cellspacing="0" style="width: 100%; border-collapse: collapse; font-family: Arial; font-size: 14px;">
    <thead style="background-color: #f2f2f2;">
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Info</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>1</td><td>Item 1</td><td>Details about item 1</td></tr>
      <tr><td>2</td><td>Item 2</td><td>Details about item 2</td></tr>
      <tr><td>3</td><td>Item 3</td><td>Details about item 3</td></tr>
      <tr><td>4</td><td>Item 4</td><td>Details about item 4</td></tr>
      <tr><td>5</td><td>Item 5</td><td>Details about item 5</td></tr>
      <tr><td>6</td><td>Item 6</td><td>Details about item 6</td></tr>
      <tr><td>7</td><td>Item 7</td><td>Details about item 7</td></tr>
      <tr><td>8</td><td>Item 8</td><td>Details about item 8</td></tr>
      <tr><td>9</td><td>Item 9</td><td>Details about item 9</td></tr>
      <tr><td>10</td><td>Item 10</td><td>Details about item 10</td></tr>
      <tr><td>11</td><td>Item 11</td><td>Details about item 11</td></tr>
      <tr><td>12</td><td>Item 12</td><td>Details about item 12</td></tr>
      <tr><td>13</td><td>Item 13</td><td>Details about item 13</td></tr>
      <tr><td>14</td><td>Item 14</td><td>Details about item 14</td></tr>
      <tr><td>15</td><td>Item 15</td><td>Details about item 15</td></tr>
      <tr><td>100</td><td>Item 100</td><td>Details about item 100</td></tr>
    </tbody>
  </table>`,

    alternatives: {
      contentType: "text/x-web-markdown",
      content: `<h2 style="font-family: Arial; text-align: center;">Hello world</h2>`,
    },
    attachments: [
        {   
            filename: 'text1.txt',
            content: 'hello world!'
        },
    ]
  };
//   console.log("mailOptions", mailOptions);
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log("Error", error);
      return error;
    } else {
      console.log("information", info.response);
      return info.response;
    }
  });
  return "successfully message sent";
};
