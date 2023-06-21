import { useState } from "react";
import axios from 'axios';

const VerlofForm = () => {
    const [verlofData, setVerlofData] = useState({
        verlofTypeID: '',
        startDate: '',
        endDate: '',
        reden: '',
    });

    const handleChange = (event) => {
        setVerlofData({
            ...verlofData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        axios
            .post('http://localhost:44362/api/CreateVerlof', verlofData)
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.error('An error occurred while sending the POST request:', error);
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="verlofTypeID"
                value={verlofData.verlofTypeID}
                onChange={handleChange}
                placeholder="VerlofTypeID"
            />
            <input
                type="date"
                name="startDate"
                value={verlofData.startDate}
                onChange={handleChange}
                placeholder="Start Date"
            />

            <input
                type="date"
                name="endDate"
                value={verlofData.endDate}
                onChange={handleChange}
                placeholder="End Date"
            />

            <input
                type="text"
                name="reden"
                value={verlofData.reden}
                onChange={handleChange}
                placeholder="Reden"
            />
            <button className="button button-grey" type="submit">Verlof aanvragen</button>
            <a className="button button-grey cs-cancel">Annuleren</a>
        </form>
    );
};

export default VerlofForm;
