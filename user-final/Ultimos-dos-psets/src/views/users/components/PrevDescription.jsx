/* eslint-disable react/prop-types */


const PrevDescription = ({ descriptions }) => {
  console.log(descriptions);
  return (
    <div style={{
      width: '300px',
      backgroundColor: 'white',
      boxShadow: '0px 10px 15px -3px rgba(0,0,0,0.1)',
      height: '120px',
      borderRadius: '5px',
      display: 'flex',
      justifyContent: 'center',
      overflow: 'auto',
    }}>
      <div>
        <div>
          <div style={{ display: 'flex', flexDirection: 'row'}}>
            <p style={{paddingRight: '4px', fontWeight: 'bold'}}>Description:</p>
            <p>{descriptions.description}</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row'}}>
            <p style={{paddingRight: '4px', fontWeight: 'bold'}}>Prescription:</p>
            <p>{descriptions.prescription}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrevDescription;
