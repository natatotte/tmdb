import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme.header};
  width: 100%;
  height: 4rem;
  padding: 0 16px;
  display: flex;

  justify-content: center;
  align-items: center;
`
