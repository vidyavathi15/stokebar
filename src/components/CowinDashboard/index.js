import {Component} from 'react'
import Loader from 'react-loader-spinner'

import VaccinationByAge from '../VaccinationByAge'
import VaccinationByGender from '../VaccinationByGender'
import VaccinationCoverage from '../VaccinationCoverage'

import {
  AppContainer,
  CowinDashboardContainer,
  LogoContainer,
  Logo,
  LogoHeading,
  Heading,
  FailureView,
  FailureImage,
  FailureText,
  LoadingView,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class CowinDashboard extends Component {
  state = {apiStatus: apiStatusConstants.initial, vaccinationData: {}}

  componentDidMount() {
    this.getVaccinationData()
  }

  getVaccinationData = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const covidVaccinationDataApiUrl =
      'https://apis.ccbp.in/covid-vaccination-data'

    const response = await fetch(covidVaccinationDataApiUrl)

    if (response.ok === true) {
      const fetchedData = await response.json()

      const updatedData = {
        last7DaysVaccination: fetchedData.last_7_days_vaccination.map(
          eachVaccination => ({
            vaccineDate: eachVaccination.vaccine_date,
            dose1: eachVaccination.dose_1,
            dose2: eachVaccination.dose_2,
          }),
        ),

        vaccinationByAge: fetchedData.vaccination_by_age.map(range => ({
          age: range.age,
          count: range.count,
        })),

        vaccinationByGender: fetchedData.vaccination_by_gender.map(
          genderType => ({
            gender: genderType.gender,
            count: genderType.count,
          }),
        ),
      }
      this.setState({
        vaccinationData: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderSuccessView = () => {
    const {vaccinationData} = this.state

    return (
      <>
        <VaccinationCoverage
          coverageDetails={vaccinationData.last7DaysVaccination}
        />
        <VaccinationByGender
          genderDetails={vaccinationData.vaccinationByGender}
        />
        <VaccinationByAge ageDetails={vaccinationData.vaccinationByAge} />
      </>
    )
  }

  renderFailureView = () => (
    <FailureView>
      <FailureImage
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="failure view"
      />
      <FailureText>Something went wrong</FailureText>
    </FailureView>
  )

  renderLoadingView = () => (
    <LoadingView data-testid="loader">
      <Loader type="threeDots" color="#ffffff" height={80} width={80} />
    </LoadingView>
  )

  renderViewBasedOnApiStatus = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccessView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <AppContainer>
        <CowinDashboardContainer>
          <LogoContainer>
            <Logo
              src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
              alt="website logo"
            />
            <LogoHeading>Co-WIN</LogoHeading>
          </LogoContainer>
          <Heading>CoWIN Vaccination in India</Heading>
          {this.renderViewBasedOnApiStatus()}
        </CowinDashboardContainer>
      </AppContainer>
    )
  }
}

export default CowinDashboard
