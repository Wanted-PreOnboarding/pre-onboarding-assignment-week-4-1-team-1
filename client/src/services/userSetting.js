import instance from '../api/index';
import { getTodayTime } from '../utils/getTodayTime';

const createUserSetting = async uuid => {
  const res = await instance.post('/userSetting', {
    ...uuid,
    allow_marketing_push: false,
    allow_invest_push: false,
    is_active: false,
    is_staff: false,
    created_at: getTodayTime(),
    updated_at: getTodayTime(),
  });
  return res;
};

export { createUserSetting };
