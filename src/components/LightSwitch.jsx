import { useState } from "react";

function LightSwitch() {
  const [isOn, setIsOn] = useState(false);

  const handleClick = () => {
    setIsOn(!isOn);
  };

  return (
    <div>
      <button
        className="bg-amber-300 p-3 rounded-lg"
        onClick={handleClick}
      >
        Light
      </button>

      <h2>
        {isOn ? "Light is ON " : "Light is OFF "}
      </h2>
    </div>
  );
}

export default LightSwitch;