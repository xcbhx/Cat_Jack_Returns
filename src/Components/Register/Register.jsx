import "./Register.css"

function Register() {
  return (
    <div>
      <p>Please Register to Continue:</p>
      <label for="name">Name:</label>
      <input type="text" id="" name="name"></input>
      <label for="email">Email:</label>
      <input type="text" id="" name="email"></input>
      <label for="password">Password:</label>
      <input type="text" id="" name="password"></input>
      <button type="submit">Enter</button>
    </div>
  )
};

export default Register;