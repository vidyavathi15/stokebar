import {PieChart, Pie, Legend, Cell} from 'recharts'

import {VaccinationByGenderContainer, Heading} from './styledComponents'

const VaccinationByGender = props => {
  const {vaccinationGenderDetails} = props

  return (
    <VaccinationByGenderContainer>
      <Heading>Vaccination by gender</Heading>

      <PieChart width={1000} height={300}>
        <Pie
          cx="50%"
          cy="60%"
          startAngle={180}
          endAngle={0}
          data={vaccinationGenderDetails}
          innerRadius="30%"
          outerRadius="60%"
          dataKey="count"
        >
          <Cell name="Male" fill="#f54394" />
          <Cell name="Female" fill="#5a8dee" />
          <Cell name="Others" fill="#64c2a6" />
        </Pie>
        <Legend
          iconType="circle"
          layout="horizontal"
          verticalAlign="bottom"
          align="center"
          wrapperStyle={{
            fontSize: 12,
            fontFamily: 'Roboto',
          }}
        />
      </PieChart>
    </VaccinationByGenderContainer>
  )
}

export default VaccinationByGender
