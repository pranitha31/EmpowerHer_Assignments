import React from "react";

function TodoCard({ userId, title, completed }) {
  return (
    <div style={{ border: "1px solid gray", margin: "5px", padding: "10px" }}>
      <h4>User ID: {userId}</h4>
      <p>Title: {title}</p>
      <p>Status: {completed ? "Completed ✅" : "Not Completed ❌"}</p>
    </div>
  );
}

export default TodoCard;
