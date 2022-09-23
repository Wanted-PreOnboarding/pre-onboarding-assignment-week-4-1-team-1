import { useState } from 'react';

import baseUrl from '../../../api';
import { getToken } from '../../../utils/token';
import { getTodayTime } from '../../../utils/getTodayTime';

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';

import { v4 as uuidv4 } from 'uuid';

const token = getToken();

function AddUser({ getUsers }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const addUserHandler = e => {
    return baseUrl.post(
      `/customers`,
      {
        uuid: uuidv4(),
        photo: e.target[0].value,
        name: e.target[1].value,
        email: e.target[2].value,
        age: e.target[3].value,
        gender_origin: e.target[4].value,
        birth_date: e.target[5].value,
        phone_number: e.target[6].value,
        address: e.target[7].value,
        detail_address: e.target[8].value,
        last_login: getTodayTime(),
        created_at: getTodayTime(),
        updated_at: getTodayTime(),
      },
      {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      }
    );
  };

  const onSubmitUser = e => {
    e.preventDefault();
    addUserHandler(e);
    setOpen(false);
    getUsers();
  };

  return (
    <div>
      <Button onClick={handleOpen}>사용자를 추가하세요 +</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={onSubmitUser} style={{ display: 'flex', flexDirection: 'column' }}>
            <label for="avatar">사진 url</label>
            <input type="text" id="avatar" name="avatar" required />
            <label for="name">사용자 이름</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              minlength="4"
              maxlength="14"
              size="10"
            />
            <label for="email">이메일</label>
            <input type="email" id="email" size="30" required />
            <label for="age">나이</label>
            <input type="number" id="age" name="age" min="10" max="100" required />
            <label for="sex">주민등록상 성별코드</label>
            <input type="number" id="sex" name="sex" min="1" max="4" required />
            <label for="birthday-time">생년월일시간</label>
            <input
              type="datetime-local"
              id="birthday-time"
              name="birthday-time"
              min="1910-06-07T00:00"
              max="2022-06-14T00:00"
              required
            />
            <label for="phone">휴대폰 번호</label>
            <small>ex: 123-456-7890</small>
            <input type="tel" id="phone" name="phone" required />
            <label for="address">주소</label>
            <small>ex: 서울시 분당구</small>
            <input
              type="text"
              id="address"
              name="address"
              required
              minlength="4"
              maxlength="20"
              size="10"
            />
            <label for="detail">상세주소</label>
            <small>ex: 0622 광명면 Suite 418</small>
            <input
              type="text"
              id="detail"
              name="detail"
              required
              minlength="4"
              maxlength="20"
              size="10"
            />
            <button>사용자 추가</button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}

export default AddUser;

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
