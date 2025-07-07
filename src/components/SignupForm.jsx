import { useState } from "react";
function SignupForm() {
     const [clicked, setClicked] = useState(false);
  return (
    <section style={{ backgroundColor:"black"}}>
    <div style={{
      background: '#007bff', padding: '30px', borderRadius: '8px',
      color: 'white', width: '400px',height:'400px'
    }}>
      <h3>Sign Up Today</h3>
      <p>Please fill out this form to register</p>
      <input type="text" placeholder="username" style={{ width: '100%', marginBottom: '10px', padding: '8px' }} />
      <input type="email" placeholder="email" style={{ width: '100%', marginBottom: '10px', padding: '8px' }} />
      <input type="password" placeholder="your password" style={{ width: '100%', marginBottom: '10px', padding: '8px' }} />
      <input type="password" placeholder="confirm password" style={{ width: '100%', marginBottom: '10px', padding: '8px' }} />
          <button
      onClick={() => setClicked(true)}
      style={{
        backgroundColor: clicked ? 'white' : 'blue',
        color: clicked ? 'black' : 'white',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '4px'
      }}
    >
      Submit
    </button>
    </div>
    </section>
  );
}

export default SignupForm;
