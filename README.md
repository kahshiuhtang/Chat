### Web Chat Application

##### Built Using:

- ReactJS
- Firebase
- Sass
- HTML

###### Pages

- Login:
  - Allows users to login with email and password
  - Autheticated with firebase authentication
- Register:
  - Allows for use to register an email, username and password
- Home:
  - Stores the existing chats
  - Allows users to look up other users from database
  - Allows users to chat and send messages with other users

##### Firebase

- Uses Authetication and Cloud Firestore
- Databases:
  - Chats - Stores chats between two people (id'd by their combined uid)
    - Stores when each message was sent, who sent each message and what was in the message
  - Users - Stores each user's infomration
  - User-Chats - Stores which users each user has talked to

##### TODO:

- Home:
  - Allow for calling
  - Improve chat UI
- Register:
  - Allow for an image to be stored when registering
  - Validate the password
  - Two factor authetication
