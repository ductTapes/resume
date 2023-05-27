import { alpha, Typography, useTheme } from '@mui/material'
import { ExperienceBlockDescription } from 'src/components/molecules/ExperienceBlockDescription'
import * as S from './styles'
import SvgIcon from 'src/components/atoms/SvgIcon'
import { CmsProjectLabelIcon } from 'src/components/atoms/svg'

export const CmsProjectBlock = () => {
  const theme = useTheme()
  return (
    <S.Root>
      <S.LabelIconContainer>
        <SvgIcon component={CmsProjectLabelIcon} />
      </S.LabelIconContainer>

      <ExperienceBlockDescription
        work="Brimit"
        role="Frontend-developer"
        date="02.08.2020 - Current day"
        description={
          <Typography variant="inherit">
            Mastered the build of the nx.dev system, <span>strengthened my</span> skills in
            typescript, worked in an English-speaking team.
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
            left: '-4rem',
            top: '-3rem',
            color: alpha(theme.palette.common.blue, 0.3),
          }}
        >
          {`if (element.count <= element_array.length) {
            setTimeout(() => {
            writeSymbols();
          }, time);`}
        </Typography>
        <Typography
          variant="inherit"
          component="pre"
          sx={{
            position: 'absolute',
            zIndex: 0,
            right: '-5rem',
            bottom: '-6rem',
            color: alpha(theme.palette.common.blue, 0.3),
          }}
        >
          {`.SobreMi {

            Profesion: Developer;
            Lenguajes: JS, CSS;
          }`}
        </Typography>
        <img src="/images/brimitLaptop.png" alt="scrump" />
      </S.ImageContainer>
    </S.Root>
  )
}
