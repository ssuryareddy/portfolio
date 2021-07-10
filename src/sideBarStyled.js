import styled from 'styled-components'

export const StyledMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  transition: transform 0.3s ease-in-out;
    @media screen and (max-width:998px){
        transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
    }
  }
`