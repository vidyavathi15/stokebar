import styled from 'styled-components/macro'

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: #161625;
  min-height: 100vh;
`
export const CowinDashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 80%;
  max-width: 1110px;
`

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`
export const Logo = styled.img`
  height: 50px;
  width: 50px;
`
export const LogoHeading = styled.h1`
  color: #2cc6c6;
  font-size: 26px;
  font-family: 'Roboto';
  font-weight: 800;
  margin-left: 10px;
  font-style: normal;
`
export const Heading = styled.h1`
  color: #cbd5e1;
  font-size: 26px;
  font-family: 'Roboto';
  font-weight: 800;
  font-style: normal;
`

export const FailureView = styled.div`
  display: flex;
  flex-direction: 'column';
  align-items: center;
`
export const FailureImage = styled.div`
  width: 50%;
  margin: 10px;
`
export const FailureText = styled.p`
  color: #ffffff;
  font-family: 'Bree Serif';
  font-weight: 800;
  font-size: 16px;
  text-align: center;
`
export const LoadingView = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
`
