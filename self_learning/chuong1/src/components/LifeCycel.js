import { useState, useEffect } from "react"
import $ from 'jquery';

function LifeCycel() {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);

    useEffect(() => {
        console.log('chạy lại mõi khi có sự thay đổi');
    });

    useEffect(() => {
        console.log('chạy lần đầu sau render');
    }, []);

    useEffect(() => {
        console.log('chạy lại mõi khi có sự thay đổi count2');
    }, [count2]);

    return (
        <div className="alert alert-info">
            <button type="button" onClick={() => setCount(count + 1)} className="close 123">Count1</button> <br />
            <button type="button" onClick={() => setCount2(count2 + 1)} className="close 123 btn-success">Count2</button>
            <strong>Title!</strong> Alert body [count: {count}, count2: {count2}]
        </div>
    );
}

export default LifeCycel;
