import React from 'react'
import { useNavigate } from 'react-router-dom'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { BROKERS as brokers } from '../../../constant/broker'
import { ACCOUNT_LIST_TABLE_HEADERS as tableHeaders, ACCOUNT_STATE as accountState } from '../../../constant/accounts'
import { getAssetPattern, getSimpleDatePattern } from '../../../utils/formating'
import { maskingName, maskingAccount } from '../../../utils/masking'
import { getIsProfit } from "../../../utils/getIsProfit"

function AccountListTable({ accountList, customers }) {
  const navigate = useNavigate();

  const rows = accountList.map(item => {
    const {broker_id, id, number, name, status, user_id, assets, payments, is_active, created_at, uuid} = item;
    return {broker_id, id, number, name, status, user_id, assets, payments, is_active, created_at, uuid};
  })

  const getUserName = (userId) => {
    const index = customers.findIndex(customer => customer.id === userId);
    if (index !== -1) {
      return maskingName(customers[index].name);
    }
    return "유저 정보가 존재하지 않습니다."
  }

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            {tableHeaders.map(header => (
              <TableCell align="center">{header}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.uuid}>
              <TableCell align='center'>{brokers[row.broker_id]}</TableCell>
              <TableCell sx={hoverStyle} align='center' onClick={() => {navigate(`/accounts/${row.id}`)}}>{maskingAccount(row.number)}</TableCell>
              <TableCell sx={hoverStyle} align='center' onClick={() => {navigate(`/users/${row.user_id}`)}}>{getUserName(row.user_id)}</TableCell>
              <TableCell align='center'>{accountState[row.status]}</TableCell>
              <TableCell align='center'>{row.name}</TableCell>
              <TableCell align='center' sx={{ color : `${getIsProfit(row.assets, row.payments)}`}}>{getAssetPattern(row.assets)}</TableCell>
              <TableCell align='center'>{getAssetPattern(row.payments)}</TableCell>
              <TableCell align='center'>{row.is_active ? "활성화" : "비활성화"}</TableCell>
              <TableCell align='center'>{getSimpleDatePattern(row.created_at)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default AccountListTable

const hoverStyle = {
  "&:hover": {
    cursor: "pointer",
    fontWeight: "600"
  }
};

