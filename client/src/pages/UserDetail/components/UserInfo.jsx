import React, { useEffect, useState } from 'react';
import { Paper } from '@mui/material';
import styled from '@emotion/styled';
import LabelAndContentBox from '../../../components/LabelAndContentBox';
import { maskingName, maskingPhoneNumber } from '../../../utils/masking';

const UserInfo = ({ user, userSetting }) => {
  const [userInfo, setUserInfo] = useState({});
  const [userSettingInfo, setSettingUserInfo] = useState({});

  useEffect(() => {
    if (user && userSetting) {
      setUserInfo(user);
      setSettingUserInfo(userSetting);
    }
  }, [user, userSetting]);

  const {
    photo,
    name,
    email,
    age,
    gender_origin,
    birth_date,
    phone_number,
    address,
    detail_address,
    last_login,
    created_at,
    updated_at,
  } = userInfo;

  const { allow_marketing_push, allow_invest_push, is_active, is_staff } = userSettingInfo;

  const gender = gender_origin === 1 || gender_origin === 3 ? '남성' : '여성';

  return (
    <ContainerPaper square elevation={2}>
      <table>
        <tbody>
          <tr>
            <th>프로필 사진</th>
            <td>
              <img src={photo} alt="프로필 사진" />
            </td>
            <LabelAndContentBox label="이름" content={name && maskingName(name)} />
            <LabelAndContentBox label="이메일" content={email} />
            <LabelAndContentBox label="나이" content={age} />
            <LabelAndContentBox label="성별" content={gender} />
          </tr>
          <tr>
            <LabelAndContentBox
              label="생년월일"
              content={birth_date?.slice(0, 10)}
              contentColSpan="3"
            />
            <LabelAndContentBox
              label="전화번호"
              content={phone_number && maskingPhoneNumber(phone_number)}
              contentColSpan="5"
            />
          </tr>
          <tr>
            <LabelAndContentBox label="주소" content={address} contentColSpan="3" />
            <LabelAndContentBox label="상세주소" content={detail_address} contentColSpan="5" />
          </tr>
          <tr>
            <LabelAndContentBox
              label="최근 로그인 시간"
              content={last_login?.slice(0, 16)}
              contentColSpan="3"
            />
            <LabelAndContentBox
              label="생성 시간"
              content={created_at?.slice(0, 16)}
              contentColSpan="2"
            />
            <LabelAndContentBox
              label="수정 시간"
              content={updated_at?.slice(0, 16)}
              contentColSpan="2"
            />
          </tr>
          <tr>
            <LabelAndContentBox
              label="마케팅 동의"
              content={allow_marketing_push ? 'O' : 'x'}
              contentColSpan="3"
            />
            <LabelAndContentBox
              label="투자 동의"
              content={allow_invest_push ? 'O' : 'x'}
              contentColSpan="2"
            />
            <LabelAndContentBox
              label="활성화 여부"
              content={is_active ? 'O' : 'x'}
              contentColSpan="2"
            />
          </tr>
          <tr>
            <LabelAndContentBox label="스태프" content={is_staff ? 'O' : 'x'} contentColSpan="3" />
            <LabelAndContentBox
              label="setting 수정시간"
              content={userSettingInfo.updated_at?.slice(0, 16)}
              contentColSpan="2"
            />
            <LabelAndContentBox
              label="setting 생성시간"
              content={userSettingInfo.created_at?.slice(0, 10)}
              contentColSpan="2"
            />
          </tr>
        </tbody>
      </table>
    </ContainerPaper>
  );
};

export default UserInfo;

const ContainerPaper = styled(Paper)`
  & > table {
    margin: 0 auto;
    width: 100%;
    border-collapse: collapse;
  }

  & tr {
    height: 80px;
    border: 1px solid grey;
  }

  & th {
    background-color: #023047;
    border: 1px solid rgba(224, 224, 224, 1);
    color: #fff;
    min-width: 50px;
  }

  & td {
    border: 1px solid rgba(224, 224, 224, 1);
    min-width: 80px;
    text-align: center;
  }
`;
