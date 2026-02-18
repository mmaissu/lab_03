import { useState } from "react";
import Counter from "./task_1/counter";
import UserProfile from "./task_2/userprofile";

function App() {
  const [userId, setUserId] = useState(1);

  return (
    <div>
      <h1>Lab 03 - React Hooks</h1>

      <h2>Task 1 - StepCounter</h2>
      <Counter initialValue={0} step={1} />
      <Counter initialValue={10} step={5} />

      <hr />

      <h2>Task 2 - UserProfile</h2>

      <div>
        <button onClick={() => setUserId(1)}>User 1</button>
        <button onClick={() => setUserId(2)}>User 2</button>
        <button onClick={() => setUserId(3)}>User 3</button>
      </div>

      <UserProfile userId={userId} />
    </div>
  );
}

export default App;
