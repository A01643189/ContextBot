/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom';
import userImage from '../../../assets/user.png';

const Card = ({ user }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/users/${user.id}`);
  };
  // https://box-shadow.dev/
  return (
    <div
      style={{
        width: '300px',
        backgroundColor: 'white',
        boxShadow: '0px 10px 15px -3px rgba(0,0,0,0.1)',
        height: '120px',
        borderRadius: '5px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
      }}
      onClick={handleClick}
    >
      <div style={{ paddingRight: '15px' }}>
        <img src={userImage} width={55} alt="user" />
      </div>
      <div>
        <p style={{fontWeight: 'bold'}}>{user.name}</p>
        <p style={{color: 'gray', fontStyle: 'italic'}}>{user.email}</p>
      </div>
    </div>
  );
};

export default Card;
