/*==============================================================================
Project:       ANA ARTESANA
Author:        CASA BARATHEON
Description:   BOT DE WHATSAAP
----------------------------------------------------------------------
Creation Date:    19 / SEPTIEMBRE / 2022
==============================================================================*/

/* Intrucciones: 

*Agregar instrucciones para hacer funcionar el BOT

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
            msg_body = "Hola! 👋🏻 Soy *Ana la artesana*, tu asistente virtual para encontrar las mejores artesanías en Paraguay. 🇵🇾 \n\n *¿Qué tipo de artesanía estás buscando?*\n_Responde con el número que corresponda_\n\n *1-* Ñandutí \n *2-* Tallado de madera \n *3-* Ao po´i \n *4-* Filigrana \n *5-* Cuero \n *6-* Cerámica  \n *0-* Finalizar";
            i += 1;
            console.log(i);
            }
            break;
          case 1:
            if (msg_body == "1") {
              nombre = req.body.entry[0].changes[0].value.messages[0].text.body;
              console.log(nombre)
              msg_body = "Seleccionaste *Ñandutí* para esta artesanía tenemos recomendaciones en las siguientes ciudades:\n_Responde con el número que corresponda_\n\n*1-* Pirayú \n*2-* Itauguá \n*3-* Asunción \n*0-* Finalizar";
              i += 1;
              console.log(i);
              break;
          }
          else if (msg_body == "2") {
              nombre = req.body.entry[0].changes[0].value.messages[0].text.body;
              console.log(nombre)
              msg_body = "Seleccionaste *Tallado de madera* para esta artesanía tenemos recomendaciones en las siguientes ciudades:\n_Responde con el número que corresponda_\n\n*1-* Pirayú \n*2-* Itauguá \n*3-* Asunción \n*0-* Finalizar";
              i += 1;
              console.log(i);
              break;
          }
          else if (msg_body == "3") {
              nombre = req.body.entry[0].changes[0].value.messages[0].text.body;
              console.log(nombre)
              msg_body = "Seleccionaste *Ao po´i* para esta artesanía tenemos recomendaciones en las siguientes ciudades:\n_Responde con el número que corresponda_\n\n*1-* Pirayú \n*2-* Itauguá \n*3-* Asunción \n*0-* Finalizar";
              i += 1;
              console.log(i);
              break;
          }
          else if (msg_body == "4") {
              nombre = req.body.entry[0].changes[0].value.messages[0].text.body;
              console.log(nombre)
              msg_body = "Seleccionaste *Filigrana* para esta artesanía tenemos recomendaciones en las siguientes ciudades:\n_Responde con el número que corresponda_\n\n*1-* Pirayú \n*2-* Itauguá \n*3-* Asunción \n*0-* Finalizar";
              i += 1;
              console.log(i);
              break;
            }
              else if (msg_body == "5") {
                nombre = req.body.entry[0].changes[0].value.messages[0].text.body;
                console.log(nombre)
                msg_body = "Seleccionaste *Cuero* para esta artesanía tenemos recomendaciones en las siguientes ciudades:\n_Responde con el número que corresponda_\n\n*1-* Pirayú \n*2-* Itauguá \n*3-* Asunción \n*0-* Finalizar";
                i += 1;
                console.log(i);
                break;
          }
          else if (msg_body == "6") {
            nombre = req.body.entry[0].changes[0].value.messages[0].text.body;
            console.log(nombre)
            msg_body = "Seleccionaste *Cerámica* para esta artesanía tenemos recomendaciones en las siguientes ciudades:\n_Responde con el número que corresponda_\n\n*1-* Pirayú \n*2-* Itauguá \n*3-* Asunción \n*0-* Finalizar";
            i += 1;
            console.log(i);
            break;
      }
          else if (msg_body == 0) {
              nombre = req.body.entry[0].changes[0].value.messages[0].text.body;
              console.log(nombre)
              msg_body = "Muchas gracias por confiar en Ana la Artesana, tu asistente virtual que te ayuda a contactar con los artesanos del Paraguay, para volver a iniciar responde con cualquier mensaje";
              i = 2
              console.log(i);
              i = 0
              break
            }
          else {
              msg_body = "Lo siento pero no entendí tu respuesta, por favor envía el número que hace referencia a la opción de tu elección.\n\n*¿Qué tipo de artesanía estas buscando?*\n_Responde con el número que corresponda_\n\n*1-* Ñanduti \n*2-* Tallado de madera \n*3-* Ao po´i \n*4-* Filigrana \n*5-* Cuero \n*6-* Cerámica\n*0-* Finalizar";
              i = 1
              console.log(i);
              break;
              }
          case 2:
            if (msg_body == '1') {
              nombre = req.body.entry[0].changes[0].value.messages[0].text.body;
              console.log(nombre)
              msg_body = "Seleccionaste la ciudad de *Pirayú* en la misma tenemos los siguientes artesanos para recomendarte:\n\n*- Local:* La Esperanza GM \n*- Artesano/a:* Laura Galeano de Martinez \n*- Celular:* 0975-737-322 \n*- Ubicación:* https://goo.gl/maps/DVgdi6YiGWFUM33y6\n\n*- Local: Maitei \n*- Artesano/a:* Adalberto Mancuello:\n*- Celular:* 0983-219-056 \n*- Ubicación:* https://goo.gl/maps/Fp5ch6LjDzenc1qE6 \n\n*- Local:* Alma Guaraní \n*- Artesano/a:* Adela Rodriguez López:\n*- Celular:* 0982-303-936\n*- Ubicación:* https://goo.gl/maps/Fp5ch6LjDzenc1qE6 \n\n*1-* Volver al menú principal \n*0-* Finalizar";
              i += 1;
              console.log(i);
              break;
          }
          else if (msg_body == "2") {
              nombre = req.body.entry[0].changes[0].value.messages[0].text.body;
              console.log(nombre)
              msg_body = "Seleccionaste la ciudad de *Itauguá* en la misma tenemos los siguientes artesanos para recomendarte:\n\n*- Local:* Amaidy BC \n*- Artesano/a:* Zunilda Britez Cardozo \n*- Celular:* 0984-829-195 \n*- Ubicación:* https://goo.gl/maps/oxvDaedfC1QefjCm6 \n\n*- Local:* Alma Guaraní \n*- Artesano/a:* Vicenta Segovia de Aldama:\n*- Celular:* 0983-466-093\n*- Ubicación:* https://goo.gl/maps/8zVfW5UGzqubZzGZ8 \n\n*- Local:* Marquez TR \n*- Artesano/a:* Trigidia Rodas Vda. de Marquez:\n*- Celular:* 0983-460-251\n*- Ubicación:* https://goo.gl/maps/m3QZhMhBvdW9Uyqs9 \n\n*1-* Volver al menú principal \n*0-* Finalizar";
              i += 1;
              console.log(i);
              break;
          }
          else if (msg_body == "3") {
              nombre = req.body.entry[0].changes[0].value.messages[0].text.body;
              console.log(nombre)
              msg_body = "Seleccionaste la ciudad de *Asunción* en la misma tenemos los siguientes artesanos para recomendarte:\n\n*- Local:* Alma Guaraní \n*- Artesano/a:* Maria Catalina Nieto Diaz de Vivar \n*- Celular:* 0994-504.617 \n*- Ubicación:* https://goo.gl/maps/SjSzRyZgt8PzXWxF9 \n\n*- Local:* Artesasty \n*- Artesano/a:* Eulogia Amada Fretes Pesoa:\n*- Celular:* 0981-574-421\n*- Ubicación:* https://goo.gl/maps/i8nCDwgfSNuwkYzT9 \n\n*- Local:* Panambí DF \n*- Artesano/a:* Diana Noemi Fretes:\n*- Celular:* 0981-994-567\n*- Ubicación:* https://goo.gl/maps/c6fy5fp3PoxQUff16 \n\n*1-* Volver al menú principal \n*0-* Finalizar";
              i += 1;
              console.log(i);
              break;
          }
          else if (msg_body == 0) {
              nombre = req.body.entry[0].changes[0].value.messages[0].text.body;
              console.log(nombre)
              msg_body = "Muchas gracias por confiar en Ana la Artesana, tu asistente virtual, que te ayuda a contactar con los artesanos del Paraguay, para volver a iniciar responde con cualquier mensaje";
              console.log(i);
              i = 0
              break
            }
          else {
              msg_body = "Lo siento pero no entendí tu respuesta, por favor envía el número que hace referencia a la opción de tu elección. Muchas gracias\n\n*1-* Volver al menú principal \n*0-* Finalizar";
              i = 1
              console.log(i);
              break
              }
          case 3:
            if (msg_body == 1) {
              nombre = req.body.entry[0].changes[0].value.messages[0].text.body;
              console.log(nombre)
              msg_body = "Hola! 👋🏻 Soy *Ana la artesana*, tu asistente virtual para encontrar las mejores artesanías en Paraguay. 🇵🇾 \n\n *¿Qué tipo de artesanía estás buscando?*\n_Responde con el número que corresponda_\n\n *1-* Ñandutí \n *2-* Tallado de madera \n *3-* Ao po´i \n *4-* Filigrana \n *5-* Cuero \n *6-* Cerámica  \n *0-* Finalizar";
              i = 1;
              console.log(i);
              break
              }
          else if (msg_body == 0) {
              nombre = req.body.entry[0].changes[0].value.messages[0].text.body;
              console.log(nombre)
              msg_body = "¡Muchas gracias por tu interés! Con tus compras estás ayudando a muchas familias paraguayas que hacen de las artesanías su medio de subsistencia y ayudan a preservar nuestra identidad cultural 💪🏻🇵🇾";
              console.log(i);
              i = 0
              break
            }
          else {
            nombre = req.body.entry[0].changes[0].value.messages[0].text.body;
              console.log(nombre)
              msg_body = "Lo siento pero no entendí tu respuesta, favor vuelve a intentar \n\n*1-* Volver al menú principal \n*0-* Finalizar";
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