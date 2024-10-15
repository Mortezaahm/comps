import { GoBellFill, GoCloud, GoDatabase } from "react-icons/go";
import Button from "./Button";
import { IoAlarm } from "react-icons/io5";
function App() {
  return (
    <div>
      <div>
        <Button success rounded outline>
          <GoBellFill /> Click me!!
        </Button>
      </div>
      <div>
        <Button secondary rounded>
          <GoCloud />
          Buy Now
        </Button>
      </div>
      <div>
        <Button warning outline rounded>
          <GoDatabase />
          See Deals
        </Button>
      </div>
      <div>
        <Button success>
          <GoBellFill />
          Hide Ads
        </Button>
      </div>
      <div>
        <Button danger>
          <IoAlarm />
          Cancel
        </Button>
      </div>
    </div>
  );
}

export default App;
