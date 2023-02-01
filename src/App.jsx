import { Canvas } from "@react-three/fiber"
import './App.css'
import Experience from "./Components/Experience"
import Configurator from "./Components/Configurator";
import { CustomizationProvider } from "./Context/Customization";

function App() {

  return (
    <CustomizationProvider>
      <div className="App">
        <Canvas>
          <color attach="background" args={["#101010"]} />
          <fog attach="fog" args={['#101010', 10, 20]} />
          <Experience />
        </Canvas>
        <Configurator />
      </div>
    </CustomizationProvider>
  );
}

export default App
