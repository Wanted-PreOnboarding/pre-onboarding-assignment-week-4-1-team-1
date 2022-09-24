import React from 'react'
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
import { maskingAccount } from '../../../utils/masking'
import { getIsProfit } from "../../../utils/getIsProfit"

function AccountListTable({ accountList, customers }) {
  const rows = accountList.map(item => {
    const {broker_id, number, name, status, user_id, assets, payments, is_active, created_at, uuid} = item;
    return {broker_id, number, name, status, user_id, assets, payments, is_active, created_at, uuid};
  })

  console.log("c", customers);

  // const getUserName = (userId) => {
  //   const customer = customers.filter(customer => customer.id === userId);
  //   return customer.name;
  // }

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            {tableHeaders.map(header => <TableCell align="center">{header}</TableCell>)}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.uuid}>
              <TableCell align='center'>{brokers[row.broker_id]}</TableCell>
              <TableCell align='center'>{maskingAccount(row.number)}</TableCell>
              <TableCell align='center'>{row.user_id}</TableCell>
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
  )
}

export default AccountListTable

