/* eslint-disable react/prop-types */
import userImage from '../../../assets/user.png';

const CardInfo = ({user}) => {
  return (
    <div
        style={{
            width: "250px", 
            height:"425px", 
            backgroundColor: "white",
            boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)",
            borderRadius: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
        }}
    >
        <img src={userImage} width={80} alt="avatar" />
        <div style={{display: 'flex', flexDirection: 'row'}}>
          <p style={{paddingRight: '4px', fontWeight: 'bold'}}>Name:</p>
          <p style={{fontStyle: 'italic'}}>{user.name}</p>
        </div>
        <div style={{display: 'flex', flexDirection: 'row'}}>
          <p style={{paddingRight: '4px', fontWeight: 'bold'}}>Email:</p>
          <p style={{fontStyle: 'italic'}}>{user.email}</p>
        </div>
        <div style={{display: 'flex', flexDirection: 'row'}}>
          <p style={{paddingRight: '4px', fontWeight: 'bold'}}>Age:</p>
          <p style={{fontStyle: 'italic'}}>{user.age}</p>
        </div>
        <div style={{display: 'flex', flexDirection: 'row'}}>
          <p style={{paddingRight: '4px', fontWeight: 'bold'}}>Gender:</p>
          <p style={{fontStyle: 'italic'}}>{user.gender}</p>
        </div>
        <div style={{display: 'flex', flexDirection: 'row'}}>
          <p style={{paddingRight: '4px', fontWeight: 'bold'}}>Nationality:</p>
          <p style={{fontStyle: 'italic'}}>{user.nationality}</p>
        </div>
        <div style={{display: 'flex', flexDirection: 'row'}}>
          <p style={{paddingRight: '4px', fontWeight: 'bold'}}>Studies:</p>
          <p style={{fontStyle: 'italic'}}>{user.studies}</p>
        </div>
    </div>
  )
}

export default CardInfo