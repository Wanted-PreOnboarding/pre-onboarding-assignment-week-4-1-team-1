import instance from './index';

const getUserSettingUuid = searchParams => instance.get(`/userSetting/${searchParams}`);

const getUserSettingInfo = uuid => instance.get(`/userSetting/?uuid=${uuid}`);

export { getUserSettingUuid, getUserSettingInfo };
