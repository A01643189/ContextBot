import { useState } from 'react';

const Form = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    age: '',
    gender: '',
    nationality: '',
    studies: ''
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    const newForm = {
      ...form,
      [name]: value,
    };
    setForm(newForm);
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });
      return res.status === 200
        ? alert('Registro exitoso')
        : alert('Error al registrar');
    } catch (error) {
      alert('Error al registrar');
      throw new Error('Error al registrar');
    }
  };

  return (
    <div>
      <h1>User Register</h1>
      <form style={{ display: 'flex', flexDirection: 'column' }}>
        <p>Name</p>
        <input
          style={{ height: '45px', width:'30%', paddingLeft: '5px', borderRadius: '5px', border: '1px solid #079DDA', fontStyle: 'italic'}}
          type="text"
          name="name"
          placeholder="Nombre"
          value={form.name}
          onChange={handleChange}
        />
        <p>Email</p>
        <input
          style={{ height: '45px', width:'30%', paddingLeft: '5px', borderRadius: '5px', border: '1px solid #079DDA', fontStyle: 'italic'}}
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />
        <p>Age</p>
        <input
          style={{ height: '45px', width:'30%', paddingLeft: '5px', borderRadius: '5px', border: '1px solid #079DDA', fontStyle: 'italic'}}
          type="age"
          name="age"
          placeholder="Age"
          value={form.age}
          onChange={handleChange}
        />
        <p>Gender</p>
        <input
          style={{ height: '45px', width:'30%', paddingLeft: '5px', borderRadius: '5px', border: '1px solid #079DDA', fontStyle: 'italic'}}
          type="gender"
          name="gender"
          placeholder="Gender"
          value={form.gender}
          onChange={handleChange}
        />
        <p>Nationality</p>
        <input
          style={{ height: '45px', width:'30%', paddingLeft: '5px', borderRadius: '5px', border: '1px solid #079DDA', fontStyle: 'italic'}}
          type="nationality"
          name="nationality"
          placeholder="Nationality"
          value={form.nationality}
          onChange={handleChange}
        />
        <p>Studies</p>
        <input
          style={{ height: '45px', width:'30%', paddingLeft: '5px', borderRadius: '5px', border: '1px solid #079DDA', fontStyle: 'italic'}}
          type="studies"
          name="studies"
          placeholder="Studies"
          value={form.studies}
          onChange={handleChange}
        />
        <div style={{ paddingTop: '5%' }}>
          <button
            onClick={handleSubmitForm}
            style={{
              height: '50px',
              width: '239px',
              backgroundColor: '#079DDA',
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              fontSize: '12px',
              fontWeight: 'bold',
              textAlign: 'center',
              borderRadius: '5px',
            }}
            type="submit"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
