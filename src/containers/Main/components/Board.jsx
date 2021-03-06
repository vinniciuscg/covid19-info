import React, { memo } from 'react'
import { Grid } from '../../../components'
import Card from './Card'

function Board({ data }) {
  const { cases, todayDeaths, recovered, deaths, todayCases, deathsPerOneMillion, active } = data

  const getValue = (value) => value /*? value : <Skeleton variant="text" width={182} height={60} />*/

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={3}>
        <Card value={getValue(cases)} label="Total de casos" color="#5d78ff" />
      </Grid>
      <Grid item xs={12} md={3}>
        <Card value={getValue(todayDeaths)} label="Óbitos hoje" color="#F7B829" />
      </Grid>
      <Grid item xs={12} md={3}>
        <Card value={getValue(todayCases)} label="Casos hoje" color="#000" />
      </Grid>
      <Grid item xs={12} md={3}>
        <Card value={getValue(active)} label="Casos ativos" color="#4d4c4c" />
      </Grid>
      <Grid item xs={12} md={3}>
        <Card value={getValue(deaths)} label="Total de óbitos" color="#E95078" />
      </Grid>
      <Grid item xs={12} md={3}>
        <Card value={getValue(deathsPerOneMillion)} label="Óbitos por milhão de habitantes" color="#c867be" />
      </Grid>
      <Grid item xs={12} md={3}>
        <Card value={getValue(recovered)} label="Total de recuperados" color="#67C887" />
      </Grid>
      
    </Grid>
  )
}

export default memo(Board)