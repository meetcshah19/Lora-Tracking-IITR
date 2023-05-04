# Lora-Tracking-IITR
Contains setup instructions for the project LoRaWAN-Enabled Travel Solutions for IIT Roorkee

The project is divided into 3 code repositories containing the Frotend, Backend and Mobile App.

Follow these steps on a server of your choice to run the setup:

1. [Install nvm](https://github.com/nvm-sh/nvm#installing-and-updating) and use Node version 18.
2. [Install pm2](https://pm2.io/docs/runtime/guide/installation/).
3. [Install mongodb](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-ubuntu/) and run it on default port.
4. `git clone git@github.com:meetcshah19/erick-frontend.git`
5. `git clone git@github.com:meetcshah19/erick-backend.git`
6. Build the erick-frontend React project using `npm install && npm run build`.
7. Install dependencies for erick-backend using `npm install`.
8. Copy the contents of build directory from erick-frontend to erick-backend/public. 
10. Go to erick-backend and run `pm2 start`.
11. Open port 4000 on your server and ensure it has a public IP.

This should get the admin dashboard and backend up and running on http://IP:4000/.

Now let us configure The Things Network settings using the following steps:

1. Sign up and Create a new application on The Things Network console. 
2. Create a new end device. Select Brand : Heltec automation. Select device : HTCC-AB02(Class A OTAA). Select region : IN_865_867.
3. Set unique Join EUI.
4. Generate DevEUI and APP key and register end device.
5. Now go to Integrations/Webhooks and create a new one. Use base url : `http://IP:4000/save_erick_data` and check all events. 
6. Create the webhook.

This completes the TTN setup.

Lets upload code to the IoT device now using the followng steps:

1. Download [Arduino IDE](https://www.arduino.cc/en/software).
2. Follow setup instructions [here](https://docs.heltec.org/en/node/cubecell/quick_start.html) to setup LoRaWAN parameters and the IoT board parameters.
3. Set DevEUI, AppEUI and AppKey.
4. Upload GPS_LoRa.ino to device to get an active tracker.

Now lets build the app.

1. Clone `git clone git@github.com:meetcshah19/erick-app.git`.
2. Run `npm install`.
3. Use `npm run dev` and the Expo Go app to test.
4. Follow [Build Instructions](https://docs.expo.dev/build/setup/) to build the app.

This completes the whole setup for the LoRaWAN based tracking system.
