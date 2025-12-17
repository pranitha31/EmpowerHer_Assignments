import MessageCard from "./MessageCard";

function App() {
  return (
    <div>
      <h2>Message Cards</h2>

      <MessageCard 
        title="Welcome" 
        message="This is your first message card." 
      />

      <MessageCard 
        title="React Props" 
        message="Props help you pass data to components." 
      />

      <MessageCard 
        title="Reusable Components" 
        message="Build once, use anywhere in your app." 
      />

      <MessageCard 
        title="Final Card" 
        message="You can add as many cards as you want." 
      />
    </div>
  );
}

export default App;
