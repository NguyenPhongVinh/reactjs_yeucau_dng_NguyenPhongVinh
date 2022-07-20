import { useState } from 'react';
import './DomDice.css';

function DomBasic() {
    const arrImages = [
        './images/dice1.png', // index 0 
        './images/dice2@2x.png', // index 1
        './images/dice3@2x.png', // index 2
        './images/dice4@2x.png', // index 3
        './images/dice5@2x.png', // index 4
        './images/dice6@2x.png', // index 5
    ]

    function randomDiceIndex() {
        return Math.floor(Math.random() * arrImages.length);
    }

    const [imgDice1, setImgDice1] = useState(arrImages[0]);
    const [imgDice2, setImgDice2] = useState(arrImages[0]);

    function handleClickRollDice(e) {
        const idx1 = randomDiceIndex();
        const idx2 = randomDiceIndex();

        const src1 = arrImages[idx1];
        const src2 = arrImages[idx2];

        setImgDice1(src1);
        setImgDice2(src2);
    }

    return (<div className="container">
        <div className="logo">
            <img src="./images/diceeLogo@2x.png" alt="" />
        </div>
        <div className="list-dice">
            <img className="dice-1" src={imgDice1} alt="" />
            <img id="dice-2" src={imgDice2} alt="" />
        </div>
        <button onClick={handleClickRollDice} className="roll-dice">Roll Dice</button>
    </div>
    );
}

export default DomBasic;