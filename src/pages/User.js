import { useEffect, useState } from 'react';
import Page from '../components/Page';
import './User.css'
// import profileImg from './harrypotterbg.png'

export default function User() {
  const [username, setusername] = useState("");

  const userdeatils = async () => {
    const response = await fetch("https://vctbackend.onrender.com/user/getuser", {
      method: "GET",
      headers: {
        "authToken": localStorage.getItem("usertoken")
      },
    });
    const json = await response.json();
    // console.log(json);
    const name01 = json.name;
    setusername(name01);
    // console.log(username)
  }
  useEffect(() => {
    userdeatils();
  }, [username, setusername]);

  const participantID = [
    {
      "houseName": "Ravenclaw",
      "bloodStatus": "Pure-blood"
    },
    {
      "houseName": "Huffle Puff",
      "bloodStatus": "Half-blood"
    },
    {
      "houseName": "Gryffindor",
      "bloodStatus": "Muggle-born"
    },
    {
      "houseName": "Slytherin",
      "bloodStatus": "Pure-blood"
    }
  ]
  const x = Math.floor(Math.random() * (3) + 0);

  return (
    <>
      <div style={{
        backgroundImage: "url('https://raw.githubusercontent.com/TAdS-VCT/Media/main/BG%20images/Profilebg.jpg')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100%',
        marginTop: '0px',
        overflow: "hidden",
        fontStyle: "Poppins"
      }}>
        <Page title="User | TAdS-VCT">
          <div className="user_maindiv" >
            <div className='user_details'>
              <h1>Name:<span>{`${username}`}</span></h1>
              <h1>Species: <span>Wizard / Human</span></h1>
              <h1>Blood Status: <span>{participantID[x].bloodStatus}</span></h1>
              <h1>Registered:<span>Yes</span></h1>
              <h1>House:<span>{participantID[x].houseName}</span></h1>
            </div>
          </div>
        </Page >
      </div>
    </>
  );
}
