import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState('admin');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const roles = {
    admin: { email: 'admin@gmail.com', password: 'admin' },
    user: { email: 'user@gmail.com', password: 'user' },
  };

  const [data, setData] = useState(roles.admin);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleRoleChange = (role) => {
    setData(roles[role]);
    setRole(role);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');
    
    try {
      const response = await axios.post(`${BaseUrl}/login`, data);
      console.log(response.data);
      
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Logged in successfully",
        showConfirmButton: false,
        timer: 1500,
      });
      
      const { token, role, name } = response.data;
      localStorage.setItem("admin-token", token);
      localStorage.setItem("role", role);
      localStorage.setItem("name", name);
  

      if (role === "admin") {
        navigate('/admin_dashboard');
      } else if (role === "user") {
        navigate('/patient_dashboard');
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Access Denied',
          text: 'Your role does not have a valid dashboard. Please contact support.',
        });
      }
  
    } catch (error) {
      setErrorMessage('Please try again.');
      console.error("Login error:", error);
      
      Swal.fire({
        icon: 'error',
        title: 'Login Failed',
        text: 'An error occurred during login. Please try again.',
      });
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div className="container-fluid">
      <div className="row vh-100">
        <div className="col-md-12 d-flex align-items-center justify-content-center">
          <div className="card shadow-lg p-5" style={{ width: "100%", maxWidth: "600px" }}>
            <h4 className="text-center mb-4 fw-bold">Login</h4>
            <form onSubmit={handleSubmit}>
              <div className="form-group mb-3">
                <label htmlFor="email" className="fw-bold">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter email"
                  name="email"
                  value={data.email}
                  onChange={handleChange}
                  required />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="password" className="fw-bold">Password</label>
                <input
                  type={showPassword ? 'text' : 'password'}
                  className="form-control"
                  id="password"
                  placeholder="Password"
                  name="password"
                  value={data.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group form-check mb-3">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="showPassword"
                  checked={showPassword}
                  onChange={() => setShowPassword(!showPassword)} />
                <label className="form-check-label fw-bold" htmlFor="showPassword">
                  Show Password
                </label>
              </div>
              
              {errorMessage && <p className="text-danger">{errorMessage}</p>}

              <button type="submit" className="btn Ehr_bgcolor w-100" disabled={loading}>
                {loading ? 'Logging in...' : 'Login'}
              </button>
            </form>

            <div className="mb-3 d-flex justify-content-center mt-4">
              <button
                type="button"
                className={`btn ${role === 'admin' ? 'Ehr_bgcolor' : 'btn-outline'} mx-2 py-2`}
                onClick={() => handleRoleChange('admin')}>
                Admin Login
              </button>
              <button
                type="button"
                className={`btn ${role === 'user' ? 'Ehr_bgcolor' : 'btn-outline'} mx-2 py-2`}
                onClick={() => handleRoleChange('user')}>
                Patient Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
