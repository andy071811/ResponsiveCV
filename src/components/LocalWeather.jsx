import styled from "styled-components"
import { getDateAndTime } from "../../helpers/getDateAndTime";
import { useState } from "react";
import { localPositionAndCurrentWeather } from "../../helpers/geoLocationAPI"

const StyledLocalWeather = styled.div`
    font-size: large;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 40px;
    width: 100%;


    @media (max-width: 768px) {
        flex-shrink: 1;
        font-size: small;
        gap: 20px;
    }
`;

function LocalWeather() {

    const dateTime = getDateAndTime();
    const [weather, setWeather] = useState('');
    const [location, setLocation] = useState('');
    const [unitOfTemp, setUnitOfTemp] = useState('');

    localPositionAndCurrentWeather(setWeather, setLocation, setUnitOfTemp);

    return (
        <StyledLocalWeather>
            <p>{dateTime}</p>
            {weather && <p>{`${location}: ${weather}${unitOfTemp}`}</p>}
            {weather ? <p>{Number(weather) <= 10 ? '🥶' : Number(weather) <= 21 ? '😃' : '🥵'}</p> : '📖'}
        </StyledLocalWeather>
    )
}

export default LocalWeather
