import React from 'react'
import { Container, Table } from 'react-bootstrap'

function CityWeather({weather}) {
    // console.log(weather)
    return (
        <Container className="mt-3">
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
}

export default CityWeather
