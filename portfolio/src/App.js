import { useEffect, useState } from "react";
import "./App.css"
import Portfolio from "./components/Portfolio";
import LoadingPage from "./components/Loading";

function App() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div >
              {isLoading ? (
          <LoadingPage />
        ) : (
          <div>
              <Portfolio/>
          </div>
        )}

    </div>
  );
}

export default App;
