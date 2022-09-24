import React, { useLayoutEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import styled from '@emotion/styled';
import { getToken } from '../../utils/token';
import baseUrl from '../../api';
const AccountDetail = () => {
  const params = useParams();
  const token = getToken();
  const idx = params.id;
  const [accountData, setAccountData] = useState({});

  useLayoutEffect(() => {
    const getUsers = async () => {
      const res = await baseUrl.get(`/accounts/${idx}`, {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      });
      setAccountData(res.data);
    };
    getUsers();
  }, []);
  return (
    <Detail>
      <h1>계좌 상세</h1>
      <table>
        <thead>
          <tr>
            <td>명칭</td>
            <td>정보</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>ID</td>
            <td>{accountData.id}</td>
          </tr>
          <tr>
            <td>사용자 ID</td>
            <td>{accountData.user_id}</td>
          </tr>
          <tr>
            <td>UUID</td>
            <td>{accountData.uuid}</td>
          </tr>
          <tr>
            <td>브로커 ID</td>
            <td>{accountData.broker_id}</td>
          </tr>
          <tr>
            <td>Status</td>
            <td>{accountData.status}</td>
          </tr>
          <tr>
            <td>계좌번호</td>
            <td>{accountData.number}</td>
          </tr>
          <tr>
            <td>계좌 명</td>
            <td>{accountData.name}</td>
          </tr>
          <tr>
            <td>평가금액</td>
            <td>{accountData.assets}</td>
          </tr>
          <tr>
            <td>입금금액</td>
            <td>{accountData.payments}</td>
          </tr>
          <tr>
            <td>계좌 활성화 여부</td>
            <td>{accountData.is_active ? 'Y' : 'N'}</td>
          </tr>
          <tr>
            <td>계좌 개설일</td>
            <td>{accountData.created_at}</td>
          </tr>
        </tbody>
      </table>
    </Detail>
  );
};

export default AccountDetail;

const Detail = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 24px;

  & table {
    width: 50%;
    margin-top: 30px;
    tr {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ccc;
      height: 40px;
      & td:first-of-type {
        width: 135px;
        text-align: right;
        padding-right: 10px;
        border-right: 1px solid #ccc;
      }
      & td:nth-of-type(2) {
        width: calc(100% - 210px);
      }
    }
  }

  h1 {
    display: block;
    width: 100%;

    border-bottom: 2px solid #000;
  }
`;
