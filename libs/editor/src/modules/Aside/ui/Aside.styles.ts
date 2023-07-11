import styled from 'styled-components'

import { flex, hover,wh } from '$/styles'

export const AsideStyles = styled.div`
  background: ${({ theme }) => theme.grey};
  border-right: 2px solid ${({ theme }) => theme.lightGrey};
  box-sizing: border-box;
  ${wh('60px', '100%')};
  ${flex('space-between', 'center', 'column')};
  padding-bottom: 15px;
`

export const Icon = styled.div`
  ${wh('23px')}
  svg {
    ${wh()}
    color: ${({ theme }) => theme.secondaryGrey};
    ${({ theme }) => hover(theme.light)}
  }
  margin-top: 20px;
  cursor: pointer;
  user-select: none;
`
