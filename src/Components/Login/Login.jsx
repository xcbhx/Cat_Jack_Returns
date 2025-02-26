import "./Login.css"

function Login() {
  return (
    <div>
      <p>Please Login to Continue:</p>
      <label for="email">Email:</label>
      <input type="text" id="" name="email"></input>
      <label for="password">Password:</label>
      <input type="text" id="" name="password"></input>
      <button type="submit">Enter</button>
    </div>
  )
};

export default Login;