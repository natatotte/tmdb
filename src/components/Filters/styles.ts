import styled from 'styled-components'
import { devices } from 'styles/global'

export const Container = styled.div`
  background: ${(props) => props.theme.main};
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 14px;
  height: auto;
`
export const Content = styled.div`
  @media ${devices.mobileS} {
    width: 24rem;
    height: 8rem;
    margin: 60px;
  }
`
export const Title = styled.p`
  font-weight: 700;

  @media ${devices.mobileS} {
    font-size: 2rem;
  }
`
export const FilterContainer = styled.div`
  height: 100%;
  width: 100%;
`
export const FilterBy = styled.div`
  @media ${devices.mobileS} {
    width: 80%;
  }
`
export const FilterByText = styled.h3`
  font-weight: 700;

  @media ${devices.mobileS} {
    font-size: 1rem;
  }
`
export const ButtonContainer = styled.div`
  width: 100%;
  height: auto;
  flex-wrap: wrap;
  display: flex;
  gap: 10px;
  margin-top: 8px;
`

export const Button = styled.button`
  background: ${(props) => props.theme.white};
  color: ${(props) => props.theme.title};
  border-radius: 4px;
  padding: 8px 16px;
  width: auto;
  height: 2.5rem;
  border: none;
  font-weight: 700;
  cursor: pointer;
`
