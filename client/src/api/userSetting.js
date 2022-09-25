import instance from './index';
import { createUserSetting } from '../services/userSetting';

const getUserSettingUuid = searchParams => instance.get(`/userSetting/${searchParams}`);

const getUserSettingInfo = uuid => instance.get(`/userSetting/?uuid=${uuid}`);

const addUserSetting = uuid => createUserSetting(uuid);

export { getUserSettingUuid, getUserSettingInfo, addUserSetting };
