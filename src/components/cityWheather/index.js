import React from 'react'
import { Container, Table } from 'react-bootstrap'


function CityWeather({weather}) {
    // console.log(JSON.stringify(weather.weather[0].description))
    // weather = JSON.stringify(weather)
    // console.log(weather.wind.speed)
    try{
        if(!weather){
            return null;
        }
    
    

        return (
            <Container className="mt-3">

                {/* <div>
                    {JSON.stringify(weather)}
                </div> */}
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>Weather Description</th>
                        <th>Wind Speed</th>
                        <th>Humidity</th>
                        <th>Amount of clouds</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{weather.weather[0].description}</td>
                            <td>{weather.wind.speed}</td>
                            <td>{weather.main.humidity}</td>
                            <td>{weather.clouds.all}</td>
                        </tr>
                    </tbody>
                    </Table>
            </Container>
        )
    }catch(e){
        return (
            <Container className="mt-3">

                <div className="bg-warning p-3 text-danger font-weight-bold rounded"> 
                    Enter valid Data !!!
                </div>
                    
            </Container>
        )
        // console.log(e)
    }
    // finally{
    //     return (
    //         <Container className="mt-3">

    //             {/* <div>
    //                 {JSON.stringify(weather)}
    //             </div> */}
    //             <Table striped bordered hover>
    //                 <thead>
    //                     <tr>
    //                     <th>Weather Description</th>
    //                     <th>Wind Speed</th>
    //                     <th>Humidity</th>
    //                     <th>Amount of clouds</th>
    //                     </tr>
    //                 </thead>
    //                 <tbody>
    //                     <tr>
    //                         <td></td>
    //                         <td></td>
    //                         <td></td>
    //                         <td></td>
    //                     </tr>
    //                 </tbody>
    //                 </Table>
    //         </Container>
    //     )
    // }
}

export default CityWeather
