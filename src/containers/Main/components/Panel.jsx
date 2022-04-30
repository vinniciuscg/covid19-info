import React, { memo } from 'react'
import RefreshIcon from '../../../assets/images/refresh.svg'
import { Card, Typography, Button, Select, MenuItem } from '../../../components'
//import COUNTRIES from '../../../commons/constants/countries'
import { CardPanelContentStyled, ItemStyled } from './style'

const navigatorHasShare = navigator.share

function Panel({ updateAt, onChange, countriesNames, data, country }) {
  const { cases, recovered, deaths, todayCases, todayDeaths, deathsPerOneMillion, active } = data
  //const COUNTRIES = Array.from(data).map((entry) => entry.country)

  //const renderCountries = (country, index) => (
  //  <MenuItem key={`country-${index}`} value={country.value}>
  //    <ItemStyled>
  //      <div>{country.label}</div>
  //      <img src={country.flag} alt={`País-${country.label}`} />
  //    </ItemStyled>
  //  </MenuItem>
  //)

  const renderCountries = (country, index) => (
    <MenuItem key={`country-${index}`} value={country}>
      <ItemStyled>
        <div>{country}</div>
      </ItemStyled>
    </MenuItem>
  )

  const textCovid19 = `País: ${country}
                      - Total de casos: ${cases}
                      - Óbitos hoje: ${todayDeaths} 
                      - Casos hoje: ${todayCases}
                      - Casos ativos: ${active}
                      - Total de óbitos: ${deaths}
                      - Total de recuperados: ${recovered}
                      - Mortes por milhão: ${deathsPerOneMillion}`
                      

  const copyInfo = () => {
    navigator.clipboard.writeText(textCovid19)
  }

  const shareInfo = () => {
    navigator.share({
      title: `Dados do Covid19 - ${country}`,
      text: textCovid19,
      url: 'https://covid19dio.netlify.app/'
    })
  }

  const renderShareButton = (
    <div>
      <Button variant="contained" color="primary" onClick={shareInfo}>
        Compartilhar
      </Button>
    </div>
  )

  const renderCopyButton = (
    <div>
      <Button variant="contained" color="primary" onClick={copyInfo}>
        Copiar
      </Button>
    </div>
  )

  return (
    <Card>
      <CardPanelContentStyled>
        <div>
          <Typography variant="h5" component="span" color="primary">COVID19 </Typography>
          <Typography variant="h6" component="span" color="primary"> Painel Coronavírus </Typography>
          <br></br>
          <Typography variant="body2" component="span" color="primary"> Atualizado em: {updateAt} </Typography>
          <div className="pt-2">
            <Select onChange={onChange} value={country}>
              {countriesNames.map(renderCountries)}
            </Select>
          </div>
        </div>
        {navigatorHasShare ? renderShareButton : renderCopyButton}
      </CardPanelContentStyled>
    </Card>
  )
}

export default memo(Panel)