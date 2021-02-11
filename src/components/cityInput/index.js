import React from 'react'
import {Form,Button,Container} from "react-bootstrap"

const CityInput = ({city, setCity, fetchCityWheather}) =>{

    const [error,setError] = React.useState("");
    const handleInputChange = (event) => {
        setCity(event.target.value);
    };

    const handleSubmit=()=>{
        if(!city){
            setError("City field is empty!!!");
        }else{
            setError("");
            fetchCityWheather();
        }


    }


    return (
        <Container className="mt-5">
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>City</Form.Label>
                    <Form.Control value={city}   type="text" placeholder="Enter city" onChange={handleInputChange}/>
                    <p className="text-white bg-danger font-weight-bold pl-3 mt-3 rounded">{error}</p>
                </Form.Group>

                <Button variant="primary" onClick={handleSubmit}>
                    Submit
                </Button>
            </Form>  
        </Container>
    )
}


export default CityInput