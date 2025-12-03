
import React, {useState} from 'react';
import '../auth/LoginPage.css';
import './SignUpPage.css';

export default function SignUpPage({onSignUp}) {
  const [form, setForm] = useState({name:'', email:'', password:''});
  const [message, setMessage] = useState('');

  const handleChange = e => setForm({...form, [e.target.name]: e.target.value});

  const submit = async e => {
    e.preventDefault();
    setMessage('Creating account...');
    try {
      const res = await fetch('/backend/register.php', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(form)
      });
      const data = await res.json();
      if(data.success){
        setMessage('Account created. You can now sign in.');
        if(onSignUp) onSignUp();
      } else {
        setMessage(data.error || 'Signup failed');
      }
    } catch(err){
      setMessage('Network error: ' + err.message);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2 className="auth-header">Create account</h2>
        <p className="auth-desc">Sign up to access your dashboard</p>
        <form className="auth-form" onSubmit={submit}>
          <label>Name</label>
          <input name="name" value={form.name} onChange={handleChange} required />
          <label>Email</label>
          <input name="email" type="email" value={form.email} onChange={handleChange} required />
          <label>Password</label>
          <input name="password" type="password" value={form.password} onChange={handleChange} required />
          <button className="btn-primary" type="submit">Sign up</button>
        </form>
        <div className="auth-footer">{message}</div>
      </div>
    </div>
  );
}
