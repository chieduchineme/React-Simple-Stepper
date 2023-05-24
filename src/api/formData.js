export const steps = [ 
    {
      label: 'Step 1',
      description: '',
    },
    {
      label: 'Step 2',
      description: '',
    },
    {
      label: 'Step 3',
      description: ``,
    },
    {
      label: 'Step 4',
      description: ''
    },
    {
      label: 'Step 5',
      description: ''
    }
];
  
export const leftSteps = [ 
    {label: 'Your Name' }, {label: 'City Location'}, {label: 'Telephone Number'}, {label: 'House Address'},{label: 'Country Of Residence'}
];   
  
export const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <>
            <h4> Let's Start with your name </h4>
            <small>Please fill in your name below</small>
            <hr />
            <div style={{display: "flex", flexDirection:"column"}}>
                <p> Enter your name</p>
                <input style={{border: "2px solid", borderColor: "#09795e", borderRadius:"6px"}}></input>
            </div>
          </>
        );
      case 1:
        return (
          <>
            <small>Please fill in your city location below</small>
            <hr />                
            <div style={{display: "flex", flexDirection:"column"}}>
                <p> Enter your city location</p>
                <input style={{border: "2px solid", borderColor: "#09795e", borderRadius:"6px"}}></input>
            </div>
          </>
        );
      case 2:
        return (
          <>
            <small>Please fill in your telephone below</small>
            <hr />
            <div style={{display: "flex", flexDirection:"column"}}>
                <p> Enter your Telephone Number</p>
                <input style={{border: "2px solid", borderColor: "#09795e", borderRadius:"6px"}}></input>
            </div>
          </>
        );
      case 3:
        return (
          <>
            <small>Please fill in your house address below</small>
            <hr />
            <div style={{display: "flex", flexDirection:"column"}}>
                <p> Tell us your house address</p>
                <input style={{border: "2px solid", borderColor: "#09795e", borderRadius:"6px"}}></input>
            </div>
          </>
        );
      case 4:
        return (
          <>
            <small>Please fill in your country of residence below</small>
            <hr />
            <div style={{display: "flex", flexDirection:"column"}}>
                <p> Tell us your country of residence</p>
                <input style={{border: "2px solid", borderColor: "#09795e", borderRadius:"6px"}}></input>
            </div>
          </>
        );
      default:
        return "Unknown step";
    }
};