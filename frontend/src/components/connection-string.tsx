import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

interface ConnectionProps {
  handleConnectDatabase: (url: string) => void;
}

export function ConnectionString({ handleConnectDatabase }: ConnectionProps) {
  const [databaseUrl, setDatabaseUrl] = useState("");

  const handleConnect = () => {
    handleConnectDatabase(databaseUrl);
  };

  return (
    <div className={`w-full px-4 my-4`}>
      <div className="flex">
        <Input
          onChange={(e) => setDatabaseUrl(e.target.value)}
          type="text"
          placeholder="Database URL"
          className="flex-1 rounded-none rounded-l-lg focus:z-10 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:shadow-none"
        />

        <Button
          onClick={handleConnect}
          className="rounded-l-none font-geist-mono bg-orange-600 hover:bg-orange-700 text-white px-6"
        >
          Create Connection
        </Button>
      </div>
    </div>
  );
}
