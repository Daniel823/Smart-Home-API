
   ____               __    __ __                 ___   ___  ____
  / __/_ _  ___ _____/ /_  / // /__  __ _  ___   / _ | / _ \/  _/
 _\ \/  ' \/ _ `/ __/ __/ / _  / _ \/  ' \/ -_) / __ |/ ___// /
/___/_/_/_/\_,_/_/  \__/ /_//_/\___/_/_/_/\__/ /_/ |_/_/  /___/


This is a large rest API that is responsible for all the backend data
processing. This api handles data from several clients. The first one being
the window blind, taking in information every 10 min and updating a database.
The second client is the Amazon Alexa echo voice commands(open or close). Lastly,
it handles a chat bot client that allows the user to communicate with the blind.

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
    "meta": {
        "room-id": 1
    },
    "data": {
        "type": "window-controller",
        "id": 1,
        "attributes": {
            "date-time": "January 1, 1970, 00:00:00",
            "temp": 35,
            "light": .5
        }
    }
}

Chatbot Response Schema

{
    "data": {
        "type": "android-client",
        "id": 1,
        "attributes": {
            "text": "open the blinds plz"
        }
    }
}

Amazon Alexa Client

Ex. "Alexa, turn off the window"  (close window)
    "Alexa, turn on the window"   (open window)

    {
        "data": {
            "type": "alexa-client",
            "id": 1,
            "attributes": {
                "response": "open"
            }
        }
    }
