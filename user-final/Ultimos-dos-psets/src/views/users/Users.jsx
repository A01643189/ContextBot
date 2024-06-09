import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PrevDescription from './components/PrevDescription';
import CardInfo from './components/CardInfo';
import NavigationBar from '../../shared/NavigationBar';  // Importar NavigationBar
import Nearbby from './components/Nearbby';

const Users = () => {
  const { id } = useParams();
  const idAsNumber = parseInt(id);

  const [form, setForm] = useState({
    description: '',
    prescription: '',
    user_id: idAsNumber,
  });

  const [isLoading, setIsLoading] = useState(false);
  const [description, setDescription] = useState([]);
  const [user, setUser] = useState([]);

  const fetchDescription = async () => {
    const response = await fetch('http://localhost:3000/description/' + id);
    const data = await response.json();
    setDescription(data);
    console.log(data);
    return data;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const newForm = {
      ...form,
      [name]: value,
    };
    setForm(newForm);
  };

  const fetchUserById = async () => {
    const response = await fetch('http://localhost:3000/users/' + id);
    const data = await response.json();
    console.log(data);
    setUser(data);
    return data;
  };

  const handleGenerateHelp = async () => {
    const prompt = {
      prompt: form.description,
    };
    setIsLoading(true);
    try {
      const response = await fetch('http://localhost:3000/chat/gemini', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(prompt),
      });
      const data = await response.json();
      setForm({ ...form, prescription: data.response });
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchUserById();
    fetchDescription();
  }, [id]);

  const createDescription = async (e) => {
    e.preventDefault();
    console.log(form);
    try{
        const response = await fetch(('http://localhost:3000/description/'+id), {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(form),
        });
        return response.status === 201 ? alert('Descripcion creada') : alert('Error al crear descripcion');
    }catch (error){
        console.log(error);
      }
    }

  return (
    <NavigationBar>
      <div>
        <div style={{ display: 'flex', flexDirection: 'column', flexFlow: 'wrap', paddingTop: '60px', justifyContent: 'center'}}>
          {description.map((des, idx) => (
            <div key = {idx} style={{padding: '1%'}}>
              <PrevDescription descriptions={des} />
            </div>
          ))}
          <div style={{ width: '1850px', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingTop: '60px'}}>
            <div style={{paddingRight: '30px'}}>
              <CardInfo user={user} />
            </div>
            <div>
              <p>Description</p>
              <textarea
                label="Descripcion"
                value={form.description}
                name="description"
                onChange={handleInputChange}
              />
              <p>Prescription</p>
              <textarea
                label="Prescription"
                value={form.prescription}
                name="prescription"
                onChange={handleInputChange}
              />
              <div>
                <button
                  style={{
                    height: '50px',
                    width: '170px',
                    backgroundColor: '#079DDA',
                    border: 'none',
                    color: 'white',
                    cursor: 'pointer',
                    fontSize: '10px',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    borderRadius: '10px',
                  }}
                  disabled={isLoading}
                  onClick={handleGenerateHelp}
                >
                  <p>{isLoading ? 'Loading' : 'Generate Help'}</p>
                </button>
                <button 
                  style={{
                    height: '50px',
                    width: '120px',
                    backgroundColor: '#079DDA',
                    border: 'none',
                    color: 'white',
                    cursor: 'pointer',
                    fontSize: '10px',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    borderRadius: '10px',
                  }}
                  onClick={createDescription} 
                >
                  <p>Upload</p>
                </button>
                <div>
                  <Nearbby />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </NavigationBar>
  );
};


export default Users;
