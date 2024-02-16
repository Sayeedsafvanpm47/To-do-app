import styled from 'styled-components'
export const Container = styled.div`
  max-width: 500px;
  margin: 0 auto; 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90vh; 
`;
export const Heading = styled.h1`
  color: black;
  display: flex;
  text-decoration:line-through;
  text-decoration-color:white;

  flex-direction: column;
  align-items: center;
  justify-content: center;
  
 
`;
export const Li = styled.li`
&::before {
  content:'♠️ ';
}; list-style:none;
margin-left : -7%  
`;
    
export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  color: white;
`;

export const Th = styled.th`
  padding: 10px;
  border: 1px solid white;
`;

export const Td = styled.td`
  padding: 10px;
  border: 1px solid white;
`;