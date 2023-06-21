import { useState } from "react";
import { z } from "zod";

const zod = z.object({
  email: z.string().email({ message: "Enter a valid Email" }),
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  password: z
    .string()
    .min(8)
    .regex(/[a-z]/, { message: "Must Contain a Lowercase" })
    .regex(/[A-Z]/, { message: "Must Contain an UpperCase" })
    .regex(/[0-9]/, { message: "Must Contain a Number" }),
});

function App() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    zod.parse({ email, firstName, lastName, password });
    console.log(email, firstName, lastName, password);
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div>
        <label htmlFor="Email">Email Input:</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          id="Email"
          type="text"
        />
      </div>
      <div>
        <label htmlFor="First Name">First Input:</label>
        <input
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
          id="First Name"
          type="text"
        />
      </div>
      <div>
        <label htmlFor="Last Name">Last Input:</label>
        <input
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
          id="Last Name"
          type="text"
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          id="password"
          type="password"
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default App;
