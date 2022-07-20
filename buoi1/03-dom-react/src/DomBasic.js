import { useState } from 'react';

function DomBasic() {
  const [txt, setTxt] = useState('');

  function handleChangeInput(e) {
    setTxt(e.target.value);
  }

  return (
    <>
      <input type="text" onChange={handleChangeInput} /> <br />
      <h3>Giá trị nhập của user: {txt}</h3>
    </>
  );
}

export default DomBasic;