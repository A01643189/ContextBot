
import { useNavigate } from 'react-router-dom';

const NavigationBar = ({ children, setSearchTerm }) => {
  const navigate = useNavigate();

  const handleNavigate = (route) => {
    if (route === 'dashboard') {
      if (setSearchTerm) {
        setSearchTerm(''); // Reseteamos el término de búsqueda al navegar al dashboard
      }
      navigate('/');
    }
    else if (route === 'register') {
      navigate('/register');
    }
  };

  return (
    <div style={{ width: '100%', height: '40px', boxShadow: '0px 10px 15px -3px rgba(0,0,0,0.1)', position: 'relative' }}>
      <div style={{ display: 'flex' }}>
        <div onClick={() => handleNavigate("dashboard")} style={{ border: "2px black solid", width: "100px", height: '30px', borderRadius: '10px', display: 'flex', cursor: "pointer", position: 'absolute', left: '10px', alignItems: 'center', justifyContent: 'center', backgroundColor: 'black', color: 'white'  }}>
          <p>Dashboard</p>
        </div>
        <div onClick={() => handleNavigate("register")} style={{ border: "2px black solid", width: "100px", height: '30px', borderRadius: '10px', display: 'flex', cursor: "pointer", position: 'absolute', left: '130px', justifyContent: 'center', alignItems: 'center', backgroundColor: 'black', color: 'white' }}>
          <p>Register</p>
        </div>
        <input
          style={{ border: "2px black solid", width: "90px", height: '22px', borderRadius: '10px', position: 'absolute', right: '10px'}}
          type="text"
          placeholder="Filter by name"
          onChange={(e) => setSearchTerm && setSearchTerm(e.target.value)} // Solo llamar setSearchTerm si está definido
        />
        {children}
      </div>
    </div>
  );
};

export default NavigationBar;
