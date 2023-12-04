import React, {useState} from "react";
import "./create.css";
import Month from "../Month";
import Get from "../Get";
import fs from 'fs';
import {compareArraysAsSet} from "@testing-library/jest-dom/dist/utils";

function Create() {
    const [bloc, setBloc] = useState();
    function send_data()
    {
        //  получаю данные из инпутов
        const name = document.getElementById('event-name').value
        const organizer_fio = document.getElementById('fio').value
        const organizer_phone = document.getElementById('phone-num').value
        const organizer_socials = document.getElementById('social-link').value
        const event_type = "gbnm"
        const date_start =  document.getElementById('event-date').value
        const time_start =  document.getElementById('event-time').value
        const place = "TyumGU"
        const photo = document.getElementById('event-image').value

        //const toBase64 = file => new Promise((resolve, reject) => {
        //    const reader = new FileReader();
        //    reader.readAsDataURL(file);
        //    reader.onload = () => resolve(reader.result);
        //    reader.onerror = error => reject(error);
        //});
        //
        //async function main() {
        //    const file = document.querySelector('#event-image').files[0];
        //    console.log(await toBase64(file));
        //}
        //main(photo)
        let obj =
            {
                "organizer_fio": organizer_fio,
                "organizer_phone": organizer_phone,
                "organizer_socials": organizer_socials,

                "name": name,
                "event_type": event_type,
                "date_start": date_start,
                "time_start": time_start,
                "photo": photo,
                "place": place
            }

        let headers =
            {
                method: 'POST',
                headers:
                    {
                        'Content-Type': 'application/json;charset=utf-8'
                    },
                body: JSON.stringify(obj),
            }
        let f = async function()
        {
            let response = await fetch('http://158.160.129.2/api/v1/events/', headers);
            let result = await response.json();
            // alert(result);

            for (let key in result)
            {
                console.log(key)
            }
        }
        f()
    }

    function handleClick() {
        alert('You clicked me!');
        send_data()
    }
    return (
        <div className="mai">
        <div className= "maiin">
            <div className="form-wrapper">
                <form action="index.html">
                    <div className="wrap">
                        <div className="user-credentials">
                            <h1>Предложить свое мероприятие</h1>

                            <p>Ф.И.О</p>
                            <input type="text" className="form-input" id="fio" name="fio" required/>
                                <p>Номер телефона</p>
                                <input type="text" className="form-input" id="phone-num" name="phone-num" required/>
                                    <p>Ссылка на профиль VK или Telegram</p>
                                    <input type="text" className="form-input" id="social-link" name="social-link"
                                           required/>
                                        <p>Название организации</p>
                                        <input type="text" className="form-input" id="organization-name"
                                               name="organization-name" required/>
                        </div>
                    </div>
                    <div className="wrap2">
                        <div className="event-info">
                            <div className="info-left">
                                <p>Название мероприятия</p>
                                <input type="text" className="form-input left-input" id="event-name" name="event-name"
                                       required/>

                                        <p>Дата мероприятия</p>
                                        <input type="text" className="form-input left-input" id="event-date"
                                               name="event-date"
                                               placeholder="пример: 10.09.2023" required/>

                                <p>Время мероприятия</p>
                                <input type="text" className="form-input left-input" id="event-time"
                                       name="event-time"
                                       placeholder="пример: 12:30 " required/>
                            </div>
                            <div className="kostyl">
                            </div>
                            <div className="info-right">
                                <div>
                                </div>
                                <input type="text"  className="browse_btn" id="event-image" name="event-image" required/>
                                <div className="right-bottom regular-text gray-text">
                                    <p>Требования к файлу:</p>
                                    <p>размер минимум: 500x500</p>
                                    <p>расширение: jpeg, jpg, png</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="wrap">
                        <div className="event-description">
                            <p>Описание мероприятия</p>
                            <textarea className="form-textarea" id="description" name="description"></textarea>
                            <div className="hz">
                                <input type="submit" value="Предложить мероприятие" className="submit-btn"
                                       onClick={send_data}/>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        </div>

    );
}

export default Create;
