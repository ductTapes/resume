import { alpha, Typography, useTheme } from '@mui/material'
import { ExperienceBlockDescription } from 'src/components/molecules/ExperienceBlockDescription'
import SvgIcon from 'src/components/atoms/SvgIcon'
import { BlockchainProjectLabelIcon } from 'src/components/atoms/svg'
import * as S from './styles'

export const BlockchainProjectBlock = () => {
  const theme = useTheme()
  return (
    <S.Root>
      <S.LabelIconContainer>
        <SvgIcon component={BlockchainProjectLabelIcon} />
      </S.LabelIconContainer>

      <ExperienceBlockDescription
        work="Scrump"
        role="Frontend-developer"
        date="20.07.2020-05.04.2022"
        description={
          <Typography variant="inherit">
            <span>Worked as a frontend</span> developer. This company developed this system, which
            includes 8 subprojects. Participated in all developments from architecture to releases.
            Was a temporary team leader. As a lead, I participated in release planning, code
            revision, problem solving, etc. <span>Among the developed systems</span> were: a
            referral system, a payment system, a web application for storing currencies, a site for
            connecting legal entities of the payment system and several landings.
          </Typography>
        }
        linkText="Check out the company’s site"
        linkHref="/"
      />

      <S.ImageContainer>
        <Typography
          variant="inherit"
          component="pre"
          sx={{
            position: 'absolute',
            zIndex: 0,
            left: '-20%',
            top: '-20%',
            color: alpha(theme.palette.common.purple, 0.3),
          }}
        >
          {`
          if (element.count <= element_array.length) {
              setTimeout(() => {
                writeSymbols();
          }, time);
          `}
        </Typography>

        <Typography
          variant="inherit"
          component="pre"
          sx={{
            position: 'absolute',
            zIndex: 0,
            left: '-25%',
            top: '50%',
            color: alpha(theme.palette.common.purple, 0.3),
          }}
        >
          {`
          let button_menu = document.querySelector(".header_button");
          let float_menu  = document.querySelector(".header_menu--float");
          `}
        </Typography>

        <Typography
          variant="inherit"
          component="pre"
          sx={{
            position: 'absolute',
            zIndex: 0,
            right: '-14%',
            bottom: '-25%',
            color: alpha(theme.palette.common.green, 0.3),
          }}
        >
          {`
          if (element.count <= element_array.length) {
            setTimeout(() => {
              writeSymbols();
          }, time);
          `}
        </Typography>
        <img src="/images/scrumpLaptop.png" alt="scrump" />
      </S.ImageContainer>
    </S.Root>
  )
}
