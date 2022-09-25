import Pagination from '@mui/material/Pagination';
import styled from '@emotion/styled';

function Paginations({ pages, onChangePage }) {
  return (
    <Container>
      <Pagination count={pages} onChange={onChangePage} variant="outlined" shape="rounded" />
    </Container>
  );
}
export default Paginations;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin: 2rem 0;
`;
