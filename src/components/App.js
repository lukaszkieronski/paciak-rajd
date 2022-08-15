import { useLocalStorage } from "hooks/useLocalStorage";
import { riderSchema } from "schema/Rider";
import { Rider } from "components/Rider";
import { RegisterRider } from "components/RegisterRider";

export const App = () => {
  const [rider, setRider] = useLocalStorage("rider", riderSchema);

  return (
    <>
      {rider ? (
        <Rider rider={rider} setRider={setRider} />
      ) : (
        <RegisterRider setRider={setRider} />
      )}
    </>
  );
};
export default App;
