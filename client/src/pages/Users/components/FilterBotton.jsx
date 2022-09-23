import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

function FilterBotton({ checkActive, checkStaff }) {
  const navigate = useNavigate();

  const refStaff = useRef();
  const refActive = useRef();

  const onStaff = e => {
    const { checked } = e.target;
    const isActive = refActive.current.control.checked;

    if (checked) {
      if (isActive) {
        navigate(`/users/userSetting/?is_staff=true&is_active=true`);
      } else {
        navigate(`/users/userSetting/?is_staff=true`);
      }
    } else {
      if (isActive) {
        navigate(`/users/userSetting/?is_active=true`);
      } else {
        navigate(`/users/?_page=1&_limit=4`);
      }
    }
  };

  const onActive = e => {
    const { checked } = e.target;
    const isStaff = refStaff.current.control.checked;

    if (checked) {
      if (isStaff) {
        navigate(`/users/userSetting/?is_staff=true&is_active=true`);
      } else {
        navigate(`/users/userSetting/?is_active=true`);
      }
    } else {
      if (isStaff) {
        navigate(`/users/userSetting/?is_staff=true`);
      } else {
        navigate(`/users/?_page=1&_limit=4`);
      }
    }
  };

  return (
    <FormGroup>
      <FormControlLabel
        ref={refStaff}
        value="스태프"
        onChange={onStaff}
        control={<Checkbox />}
        label="스태프"
        checked={checkStaff}
      />
      <FormControlLabel
        ref={refActive}
        value="활성화"
        onChange={onActive}
        control={<Checkbox />}
        label="활성화"
        checked={checkActive}
      />
    </FormGroup>
  );
}

export default FilterBotton;
