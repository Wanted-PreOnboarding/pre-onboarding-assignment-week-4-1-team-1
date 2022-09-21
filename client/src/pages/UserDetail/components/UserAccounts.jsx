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
  Typography,
} from '@mui/material';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const UserAccounts = ({ accounts }) => {
  const [accountsInfo, setAccountsInfo] = useState([]);
  console.log(accounts);

  useEffect(() => {
    if (accounts) setAccountsInfo(accounts);
  }, [accounts]);

  return (
    // <div>
    //   <ul>
    //     {accountInfo.map(account => (
    //       <li key={account.id}>{account.name}</li>
    //     ))}
    //   </ul>
    // </div>
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>계좌 이름</TableCell>
            <TableCell align="right">은행명</TableCell>
            <TableCell align="right">계좌상태</TableCell>
            <TableCell align="right">평가손익</TableCell>
            <TableCell align="right">수익률</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {accountsInfo.map(account => (
            <Row key={account.name} account={account} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UserAccounts;

function Row(props) {
  const { account } = props;
  const [open, setOpen] = React.useState(false);

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
        <TableCell align="right">{account.broker_id}</TableCell>
        <TableCell align="right">{account.status}</TableCell>
        <TableCell align="right">{account.assets - account.payments}</TableCell>
        <TableCell align="right">
          {(((account.assets - account.payments) / account.payments) * 100).toFixed(2)}%
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              {/* <Typography variant="h6" gutterBottom component="div">
                상세정보
              </Typography> */}
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
                    <TableCell>{account.number}</TableCell>
                    <TableCell align="right">{account.payments}</TableCell>
                    <TableCell align="right">{account.assets}</TableCell>
                    <TableCell align="right">{account.updated_at}</TableCell>
                    <TableCell align="right">{account.created_at}</TableCell>
                  </TableRow>

                  {/* {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.customerId}</TableCell>
                      <TableCell align="right">{historyRow.amount}</TableCell>
                      <TableCell align="right">
                        {Math.round(historyRow.amount * row.price * 100) / 100}
                      </TableCell>
                    </TableRow>
                  ))} */}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}
