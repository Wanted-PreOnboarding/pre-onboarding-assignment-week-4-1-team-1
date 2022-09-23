import { useState } from 'react';

import { getToken } from '../../../utils/token';
import baseUrl from '../../../api';

const token = getToken();

function EditUserName({ user, onEditModeToggle, getUsers }) {
  const onChangeName = e => {
    setName(e.target.value);
  };

  const [name, setName] = useState(user.name);

  const onEditName = async () => {
    await baseUrl.patch(
      `/customers/${user.id}`,
      {
        name,
      },
      {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      }
    );
    onEditModeToggle();
    getUsers();
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
