import AddUser from './AddUser';
import SearchBar from './SearchBar';
import FilterBotton from './FilterBotton';

import styled from '@emotion/styled';

function Header({ getlist, checkStaff, checkActive }) {
  return (
    <UserLIstHeader>
      <SearchBar />
      <AddUser getlist={getlist} />
      <FilterBotton checkStaff={checkStaff} checkActive={checkActive} />
    </UserLIstHeader>
  );
}

export default Header;

const UserLIstHeader = styled.head`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
