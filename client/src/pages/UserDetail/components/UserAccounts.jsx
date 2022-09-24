import React, { useEffect, useState } from 'react';
import {
  Box,
  Collapse,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { transformToBrokerResource } from '../../../utils/bankFormatter';
import { convertNumToStr } from '../../../utils/statusFormatter';
import { moneyFormatter } from '../../../utils/moneyFormatter';
import styled from '@emotion/styled';
import { getIsProfit, changeColor } from '../../../utils/getIsProfit';

const UserAccounts = ({ accounts, status }) => {
  const [accountsInfo, setAccountsInfo] = useState([]);

  useEffect(() => {
    if (accounts) setAccountsInfo(accounts);
  }, [accounts]);

  return (
    <Paper square elevation={2}>
      <TableContainer component={Paper}>
        {accountsInfo.length === 0 ? (
          '사용자의 계좌가 0개 입니다.'
        ) : (
          <Table aria-label="collapsible table">
            <TableHead>
              <TableBar>
                <TableName />
                <TableName>계좌 이름</TableName>
                <TableName align="right">은행명</TableName>
                <TableName align="right">계좌상태</TableName>
                <TableName align="right">평가손익</TableName>
                <TableName align="right">수익률</TableName>
              </TableBar>
            </TableHead>
            <TableBody>
              {accountsInfo.map(account => {
                if (status === '') return <Row key={account.uuid} account={account} />;
                if (account.status === status) return <Row key={account.uuid} account={account} />;
              })}
            </TableBody>
          </Table>
        )}
      </TableContainer>
    </Paper>
  );
};

export default UserAccounts;

function Row(props) {
  const { account } = props;
  const [open, setOpen] = React.useState(false);

  const { brokerName, formattedAccount } = transformToBrokerResource(
    account.broker_id,
    account.number
  );

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {account.name}
        </TableCell>
        <TableCell align="right">{brokerName}</TableCell>
        <TableCell align="right">{account.status && convertNumToStr(account.status)}</TableCell>
        <TableName className={getIsProfit(account.assets, account.payments)} align="right">
          {moneyFormatter((account.assets - account.payments).toFixed(2))}
        </TableName>
        <TableName
          className={changeColor(
            (((account.assets - account.payments) / account.payments) * 100).toFixed(2)
          )}
          align="right"
        >
          {moneyFormatter(
            (((account.assets - account.payments) / account.payments) * 100).toFixed(2)
          )}
          %
        </TableName>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>활성화 여부</TableCell>
                    <TableCell>계좌번호</TableCell>
                    <TableCell align="right">임금금액</TableCell>
                    <TableCell align="right">평가금액</TableCell>
                    <TableCell align="right">최근수정일</TableCell>
                    <TableCell align="right">계좌개설일</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      {account.is_active ? '활성화됨' : '비활성화됨'}
                    </TableCell>
                    <TableCell>{formattedAccount}</TableCell>
                    <TableCell align="right">{moneyFormatter(account.payments)}</TableCell>
                    <TableCell align="right">{moneyFormatter(account.assets)}</TableCell>
                    <TableCell align="right">{account.updated_at?.slice(0, 16)}</TableCell>
                    <TableCell align="right">{account.created_at?.slice(0, 16)}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const TableBar = styled(TableRow)`
  background-color: #023047;
`;

const TableName = styled(TableCell)`
  color: #fff;

  &.red {
    color: red;
  }

  &.blue {
    color: blue;
  }
`;
