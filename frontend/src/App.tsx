import { ConnectionString } from "@/components/connection-string";
import { ConnectDatabase, GetTables } from "../wailsjs/go/main/App";

function App() {
  const handleConnectDatabase = async (url: string) => {
    const database = await ConnectDatabase(url);
    console.log(database);
    const tables = await GetTables();
    console.log(tables);
  };

  return (
    <>
      <ConnectionString handleConnectDatabase={handleConnectDatabase} />
    </>
  );
}

export default App;
