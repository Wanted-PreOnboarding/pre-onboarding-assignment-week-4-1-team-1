import { useState } from 'react';

import { updateUserNameById } from '../../../api/customers';

function EditUserName({ user, onEditModeToggle, getlist }) {
  const onChangeName = e => {
    setName(e.target.value);
  };

  const [name, setName] = useState(user.name);

  const onEditName = async () => {
    updateUserNameById(user.id, name);
    onEditModeToggle();
    getlist();
  };

  return (
    <div>
      <input value={name} onChange={onChangeName}></input>
      <button onClick={onEditName}>수정</button>
      <button onClick={onEditModeToggle}>취소</button>
    </div>
  );
}

export default EditUserName;
