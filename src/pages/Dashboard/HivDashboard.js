import React from 'react'
import Dashboard from '.'
import { HivdashboardGraphs } from '../../constants'

const HivDashboard = () => {
  return (
    <Dashboard data={HivdashboardGraphs} /> 
  )
}

export default HivDashboard