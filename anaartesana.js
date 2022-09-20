/*
 * Starter Project for WhatsApp Echo Bot Tutorial
 *
 * Remix this as the starting point for following the WhatsApp Echo Bot tutorial
 *
 */


"use strict";

// Access token for your app
// (copy token from DevX getting started page
// and save it as environment variable into the .env file)
const token = process.env.WHATSAPP_TOKEN;
let i = 0;
let nombre = 'nombre'

console.log(i)


// Imports dependencies and set up http server
const request = require("request"),
  express = require("express"),
  body_parser = require("body-parser"),
  axios = require("axios").default,
  app = express().use(body_parser.json()); // creates express http server

// Sets server port and logs message on success
app.listen(process.env.PORT || 1337, () => console.log("webhook is listening"));

// Accepts POST requests at /webhook endpoint
app.post("/webhook", async (req, res) => {
  // Parse the request body from the POST
  let body = req.body;
  let data = null;

  try {
    // Check the Incoming webhook message
    //console.log(JSON.stringify(req.body, null, 2));

    // info on WhatsApp text message payload: https://developers.facebook.com/docs/whatsapp/cloud-api/webhooks/payload-examples#text-messages
    if (req.body.object) {
      if (
        req.body.entry &&
        req.body.entry[0].changes &&
        req.body.entry[0].changes[0] &&
        req.body.entry[0].changes[0].value.messages &&
        req.body.entry[0].changes[0].value.messages[0]
      ) {
        let phone_number_id =
          req.body.entry[0].changes[0].value.metadata.phone_number_id;
        let from = req.body.entry[0].changes[0].value.messages[0].from; // extract the phone number from the webhook payload
        let type = req.body.entry[0].changes[0].value.messages[0].type;
        let msg_body =  req.body.entry[0].changes[0].value.messages[0].text.body;


        switch (i) {
          case 0:
          if (type == 'text') {
            nombre = req.body.entry[0].changes[0].value.messages[0].text.body;
            console.log(nombre)
            msg_body = "Hola! Soy Ana la Artesana, tu asistente virtual para encontrar las mejores artesanías en Paraguay. para continuar responde con cualquier mensaje. \n Muchas gracias por tu interés! con tus compras estas ayudando a muchas familias paraguayas que hacen de las artesanías su medio de subsistencia y ayudan a preservar nuestra identidad cultural. \n Que tipo de artesanía estas buscando? responde con el numero que corresponda \n 1- Ñanduti \n 2- Ao Poi \n 3- Encaje Yú \n 4- Filigrana \n 0- Finalizar";
            i += 1;
            console.log(i);
            }
            break;
          case 1:
            if (msg_body == "1") {
              nombre = req.body.entry[0].changes[0].value.messages[0].text.body;
              console.log(nombre)
              msg_body = "Gracias por elegir Ñanduti! para esta artesanía tenemos recomendaciones en las siguientes ciudades: responde con el número que corresponda para avanzar \n 1- Asunción: \n 2- Itagua. \n 3- Ita \n 4- caacupe \n 0- Finalizar";
              i += 1;
              console.log(i);
              break;
          }
          else if (msg_body == "2") {
              nombre = req.body.entry[0].changes[0].value.messages[0].text.body;
              console.log(nombre)
              msg_body = "Gracias por elegir Ao poi! para esta artesanía tenemos recomendaciones en las siguientes ciudades: responde con el número que corresponda para avanzar \n 1- Asunción: \n 2- Itagua. \n 3- Ita \n 4- caacupe \n 0- Finalizar";
              i += 1;
              console.log(i);
              break;
          }
          else if (msg_body == "3") {
              nombre = req.body.entry[0].changes[0].value.messages[0].text.body;
              console.log(nombre)
              msg_body = "Gracias por elegir Encaje Yu! para esta artesanía tenemos recomendaciones en las siguientes ciudades: responde con el número que corresponda para avanzar \n 1- Asunción: \n 2- Itagua. \n 3- Ita \n 4- caacupe \n 0- Finalizar";
              i += 1;
              console.log(i);
              break;
          }
          else if (msg_body == "4") {
              nombre = req.body.entry[0].changes[0].value.messages[0].text.body;
              console.log(nombre)
              msg_body = "Gracias por elegir Filigrana! para esta artesanía tenemos recomendaciones en las siguientes ciudades: responde con el número que corresponda para avanzar \n 1- Asunción: \n 2- Itagua. \n 3- Ita \n 4- caacupe \n 0- Finalizar";
              i += 1;
              console.log(i);
              break;
          }
          else if (msg_body == 0) {
              nombre = req.body.entry[0].changes[0].value.messages[0].text.body;
              console.log(nombre)
              msg_body = "Muchas gracias por confiar en Ana la Artesana, tu asistente virtual que conecta con los artesanos del Paraguay, para volver a iniciar responde con cualquier mensaje";i = 2
              console.log(i);
              i = 0
              break
            }
          else {
              msg_body = "Lo siento pero no entendí tu respuesta, por favor envia el numero que hace referencia a la opción de tu elección. \n Que tipo de artesanía estas buscando? responde con el numero que corresponda \n 1- Ñanduti \n 2- Ao Poi \n 3- Encaje Yú \n 4- Filigrana \n 0- Finalizar";
              i = 1
              console.log(i);
              break;
              }
          case 2:
            if (msg_body == '1') {
              nombre = req.body.entry[0].changes[0].value.messages[0].text.body;
              console.log(nombre)
              msg_body = "La ciudad que elegiste es Asunción, en la misma tenemos los siguientes artesanos para recomendarte: \n - Carlos Lopez: 0981 555511 https://goo.gl/maps/VLPV6V71ijQLXupc8 \n - Felipe cañete: 09871464415 https://goo.gl/maps/VLPV6V71ijQLXupc8 \n Espero que haya sido de ayuda! para continuar responde con los siguientes nros: \n 1- volver al menú principal \n 0- finalizar";
              i += 1;
              console.log(i);
              break;
          }
          else if (msg_body == "2") {
              nombre = req.body.entry[0].changes[0].value.messages[0].text.body;
              console.log(nombre)
              msg_body = "La ciudad que elegiste es Itagua, en la misma tenemos los siguientes artesanos para recomendarte: \n - Carlos Lopez: 0981 555511 https://goo.gl/maps/VLPV6V71ijQLXupc8 \n - Felipe cañete: 09871464415 https://goo.gl/maps/VLPV6V71ijQLXupc8 \n Espero que haya sido de ayuda! para continuar responde con los siguientes nros: \n 1- volver al menú principal \n 0- finalizar";
              i += 1;
              console.log(i);
              break;
          }
          else if (msg_body == "3") {
              nombre = req.body.entry[0].changes[0].value.messages[0].text.body;
              console.log(nombre)
              msg_body = "La ciudad que elegiste es Ita, en la misma tenemos los siguientes artesanos para recomendarte: \n - Carlos Lopez: 0981 555511 https://goo.gl/maps/VLPV6V71ijQLXupc8 \n - Felipe cañete: 09871464415 https://goo.gl/maps/VLPV6V71ijQLXupc8 \n Espero que haya sido de ayuda! para continuar responde con los siguientes nros:  \n 1- volver al menú principal \n 0- finalizar";
              i += 1;
              console.log(i);
              break;
          }
          else if (msg_body == "4") {
              nombre = req.body.entry[0].changes[0].value.messages[0].text.body;
              console.log(nombre)
              msg_body = "La ciudad que elegiste es Caacupe, en la misma tenemos los siguientes artesanos para recomendarte: \n - Carlos Lopez: 0981 555511 https://goo.gl/maps/VLPV6V71ijQLXupc8 \n - Felipe cañete: 09871464415 https://goo.gl/maps/VLPV6V71ijQLXupc8 \n Espero que haya sido de ayuda! para continuar responde con los siguientes nros: \n 1- volver al menú principal \n 0- finalizar";
              i += 1;
              console.log(i);
              break;
          }
          else if (msg_body == 0) {
              nombre = req.body.entry[0].changes[0].value.messages[0].text.body;
              console.log(nombre)
              msg_body = "Muchas gracias por confiar en Ana la Artesana, tu asistente virtual que conecta con los artesanos del Paraguay, para volver a iniciar responde con cualquier mensaje";
              console.log(i);
              i = 0
              break
            }
          else {
              msg_body = "Lo siento pero no entendí tu respuesta, por favor envia el numero que hace referencia a la opción de tu elección. Muchas gracias \n 1-volver al menú principal \n 0- finalizar";
              i = 1
              console.log(i);
              break
              }
          case 3:
            if (msg_body == 1) {
              nombre = req.body.entry[0].changes[0].value.messages[0].text.body;
              console.log(nombre)
              msg_body = "Hola! Soy Ana la Artesana, tu asistente virtual para encontrar las mejores artesanías en Paraguay. para continuar responde con cualquier mensaje. \n Muchas gracias por tu interés! con tus compras estas ayudando a muchas familias paraguayas que hacen de las artesanías su medio de subsistencia y ayudan a preservar nuestra identidad cultural. \n Que tipo de artesanía estas buscando? responde con el numero que corresponda \n 1- Ñanduti \n 2- Ao Poi \n 3- Encaje Yú \n 4- Filigrana \n 0- Finalizar";
              i = 1;
              console.log(i);
              break
              }
          else if (msg_body == 0) {
              nombre = req.body.entry[0].changes[0].value.messages[0].text.body;
              console.log(nombre)
              msg_body = "Muchas gracias por confiar en Ana la Artesana, tu asistente virtual que conecta con los artesanos del Paraguay, queremos seguir mejorando para el usuario y también los artesanos de nuestro país, para evaluar tu experiencia de uso podes completar el siguiente formulario ";
              console.log(i);
              i = 0
              break
            }
          else {
            nombre = req.body.entry[0].changes[0].value.messages[0].text.body;
              console.log(nombre)
              msg_body = "Lo siento pero no entendi tu respuesta, favor vuelve a intentar \n 1-volver al menú principal \n 0- finalizar ";
              i = 3
              console.log(i);
              
          }
        }

        await axios({
          method: "POST", // Required, HTTP method, a string, e.g. POST, GET
          url:
            "https://graph.facebook.com/v13.0/" +
            phone_number_id +
            "/messages?access_token=" +
            token,
          data: data || {
            messaging_product: "whatsapp",
            to: from,
            text: { body: msg_body },
          },
          headers: { "Content-Type": "application/json" },
        });
      }
      res.sendStatus(200);
    } else {
      // Return a '404 Not Found' if event is not from a WhatsApp API
      res.sendStatus(404);
    }
  } catch (e) {
    console.log(e);
  }
});

// Accepts GET requests at the /webhook endpoint. You need this URL to setup webhook initially.
// info on verification request payload: https://developers.facebook.com/docs/graph-api/webhooks/getting-started#verification-requests
app.get("/webhook", (req, res) => {
  /**
   * UPDATE YOUR VERIFY TOKEN
   *This will be the Verify Token value when you set up webhook
   **/
  const verify_token = process.env.VERIFY_TOKEN;

  // Parse params from the webhook verification request
  let mode = req.query["hub.mode"];
  let token = req.query["hub.verify_token"];
  let challenge = req.query["hub.challenge"];

  // Check if a token and mode were sent
  if (mode && token) {
    // Check the mode and token sent are correct
    if (mode === "subscribe" && token === verify_token) {
      // Respond with 200 OK and challenge token from the request
      console.log("WEBHOOK_VERIFIED");
      res.status(200).send(challenge);
    } else {
      // Responds with '403 Forbidden' if verify tokens do not match
      res.sendStatus(403);
    }
  }
});