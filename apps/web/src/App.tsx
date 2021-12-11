import { Button, Card } from "../../../packages/ui/atoms";

function App() {
  return (
    <div className="bg-red-500 w-full h-full">
      <header>
        <p className="text-2xl">Hello Vite + React!</p>
        <Button title="Button" />
        <Card title="Title">Hello hello hello</Card>
      </header>
    </div>
  );
}

export default App;
