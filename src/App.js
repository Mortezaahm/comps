import { GoBellFill, GoCloud, GoDatabase } from "react-icons/go";
import Button from "./Button";
function App() {
  return (
    <div>
      <div>
        <Button secondary>
          <GoBellFill /> Click me!!
        </Button>
      </div>
      <div>
        <Button success outline>
          <GoCloud />
          Buy Now
        </Button>
      </div>
      <div>
        <Button warning>
          <GoDatabase />
          See Deals
        </Button>
      </div>
      <div>
        <Button secondary outline>
          Hide Ads
        </Button>
      </div>
      <div>
        <Button primary>Cancel</Button>
      </div>
    </div>
  );
}

export default App;
