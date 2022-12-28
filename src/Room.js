import React, { useState, useEffect } from 'react';
import Timer from './Timer';
import DateTime from './DateTime';
import classes from './room.module.css';

function Room(props) {
  const [currPart, setCurrPart] = useState(1);
  const [finished, setFinished] = useState(false);
  const [participants] = useState([1, 2, 3, 4]);
  const [participant] = useState(props.participant);

  const startTimer = () => {
    if (finished) {
      const index = participants.findIndex(el => currPart === el);
      if (index < participants.length - 1) {
        setCurrPart(participants[index + 1]);
      } else {
        setCurrPart(participants[0]);
      }
    }
    setFinished(false);
    console.log(participants, currPart);
  }

  const changeCurrPart = (status) => {
    setFinished(status);
    console.log(finished);
  }

  useEffect(() => {
    startTimer();
  }, [finished]);

  useEffect(() => console.log("Component rerendered"));

  return (    
    <div className={classes.room}>
      <header className={classes.header}>
        <div className={classes.heading}>
          <h1>Ход торгов {props.auctionName}</h1>
          <DateTime />
          <a href="/#" className={classes.exit} type='button' onClick={() => props.changeAuth(false, null)}>Exit</a>
        </div>        
        <h3>Уважаемые участники! Во время вашего хода вы можете изменить параметры торгов, указанных в таблице</h3>
      </header>
      <table className={classes['timer-table']}>
        <thead>
          <tr className={classes['timer-row']}>
            <th scope='row'>ХОД</th>
            <td id="1">{currPart === 1 ? <Timer transPart={changeCurrPart} key={currPart} /> : ""}</td>
            <td id="2">{currPart === 2 ? <Timer transPart={changeCurrPart} key={currPart} /> : ""}</td>
            <td id="3">{currPart === 3 ? <Timer transPart={changeCurrPart} key={currPart} /> : ""}</td>
            <td id="4">{currPart === 4 ? <Timer transPart={changeCurrPart} key={currPart} /> : ""}</td>            
          </tr>
          <tr className={classes.participants}>
            <th></th>
            <th scope='col'>Semen Semenov</th>
            <th scope='col'>Fedor Fedorov</th>
            <th scope='col'>{participant || "Ivan Ivanov"}</th>
            <th scope='col'>Ayna Aynova</th>
          </tr>
          <tr className={classes['participant-details']}>
            <th scope='row'>Параметры и требования</th>
            <th>smth</th>
            <th>smth</th>
            <th>smth</th>
            <th>smth</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope='row'>Наличие комплекса мероприятий, повышающих стандарты качества изготовления</th>
            <td>*</td>
            <td>*</td>
            <td>*</td>
            <td>*</td>
          </tr>
          <tr>
            <th scope='row'>Срок изготовления лота, дней</th>
            <td>80</td>
            <td>90</td>
            <td>75</td>
            <td>120</td>
          </tr>
          <tr>
            <th scope='row'>Гарантийные обязательства, мес</th>
            <td>24</td>
            <td>24</td>
            <td>22</td>
            <td>36</td>
          </tr>
          <tr>
            <th scope='row'>Условия оплаты</th>
            <td>30%</td>
            <td>100%</td>
            <td>60%</td>
            <td>50%</td>
          </tr>
          <tr>
            <th scope='row' rowSpan={4}>Стоимость изготовления лота, руб. (без НДС)</th>
          </tr>
          <tr className={classes['table-price']}>            
            <td>3.700.000 руб.</td>
            <td>3.200.000 руб.</td>
            <td>2.800.000 руб.</td>
            <td>2.500.000 руб.</td>
          </tr>
          <tr className={classes['table-discount']}>
              <td>-25.000 руб.</td>
              <td>-25.000 руб.</td>
              <td>-25.000 руб.</td>
              <td>-25.000 руб.</td>
          </tr>
          <tr className={classes['table-amount']}>
            <td>2.475.000 руб.</td>
            <td>2.475.000 руб.</td>
            <td>2.475.000 руб.</td>
            <td>2.475.000 руб.</td>
          </tr>
          <tr>
            <th scope='row'>Действия</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Room;