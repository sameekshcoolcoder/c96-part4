//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyDUCiD-Cf3KAtgiHiasEV9CU_8ozjYTbDY",
      authDomain: "kwitter-232ce.firebaseapp.com",
      databaseURL: "https://kwitter-232ce-default-rtdb.firebaseio.com",
      projectId: "kwitter-232ce",
      storageBucket: "kwitter-232ce.appspot.com",
      messagingSenderId: "803497971500",
      appId: "1:803497971500:web:ce2bf57fe135c5000ca689"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");

    function send()
    {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push(
            {
                  name:user_name,
                  message:msg,
                  like:0
            });

            document.getElementById("msg").value = "";
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
            console.log(firebase_message_id);
            console.log(message_data);
            name = message_data['name'];
            message = message_data['message'];
            like = message_data['like'];

            name_with_tag = "<h4> "+ name +"<img class='user_tick' src='tick.png'></h4>";
            message_with_tag = "<h4 class='message_h4'>"+ message +"</h4>";



//End code
      } });  }); }
getData();
