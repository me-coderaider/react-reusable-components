import ProfileCard from "./ProfileCard";
import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';
import base64img from "./base64toimage";
console.log(AlexaImage);
console.log(base64img);

function App(){
    return (
        <div>
            <div>Personal Digital Assistants</div>

            <img src={AlexaImage} />
            <img src={base64img} />

            <ProfileCard title="Alexa" handle="@alexa99" />
            <ProfileCard title="Cortana" handle="@cortana32" />
            <ProfileCard title="Siri" handle="@siri01"/>
        </div>
    );
}

export default App;