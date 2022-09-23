import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';

function TableHeadList() {
  return (
    <TableHead>
      <TableRow>
        <StyledTableCell align="center">고객명</StyledTableCell>
        <StyledTableCell align="center">보유계좌수</StyledTableCell>
        <StyledTableCell align="center">이메일</StyledTableCell>
        <StyledTableCell align="center">성별코드</StyledTableCell>
        <StyledTableCell align="center">생년월일</StyledTableCell>
        <StyledTableCell align="center">휴대폰 번호</StyledTableCell>
        <StyledTableCell align="center">최근 로그인</StyledTableCell>
        <StyledTableCell align="center">수신동의 여부</StyledTableCell>
        <StyledTableCell align="center">활성화 여부</StyledTableCell>
        <StyledTableCell align="center">가입일</StyledTableCell>
        <StyledTableCell align="center">삭제</StyledTableCell>
      </TableRow>
    </TableHead>
  );
}

export default TableHeadList;

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 12,
  },
}));
