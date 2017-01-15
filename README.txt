
   ____               __    __ __                 ___   ___  ____
  / __/_ _  ___ _____/ /_  / // /__  __ _  ___   / _ | / _ \/  _/
 _\ \/  ' \/ _ `/ __/ __/ / _  / _ \/  ' \/ -_) / __ |/ ___// /
/___/_/_/_/\_,_/_/  \__/ /_//_/\___/_/_/_/\__/ /_/ |_/_/  /___/


This is a large rest API that is responsible for all backend data
processing. This api handles data from several clients. The first one being
a window curtain, taking in information every 10 min and updating a database.
The second client is Amazon Alexa echo. It listens to voice commands(open
or close). Lastly,it handles a chat bot client that allows the user to
close/open the curtain.

Chatbot Client
1. Send information
2. Classify either "open" or "close"
3. Get state form the window client
4. Send response to window client

Amazon Alexa Client
1. Send information
2. Classify either "open" or "close"
3. Get state form the window client
4. Send response to window client

Client Response Schema

{
    "type": "window-controller",
    "controller-id": 1,
    "room-id": 1,
    "date-time": "January 1, 1970, 00:00:00",
    "temp": 35,
    "light": ".5",
    "state": 1      //indicates open/closed
}

Chatbot Response Schema

{
    "type": "android-client",
    "id": 1,
   	"response": "can you close the blinds plz?"
}

Amazon Alexa Client

Ex. "Alexa, turn off the window"  (close window)
    "Alexa, turn on the window"   (open window)

    {
        "type": "alexa-client",
        "id": 1,
       	"response": 1
    }
