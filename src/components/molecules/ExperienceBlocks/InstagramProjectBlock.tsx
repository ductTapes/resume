import { alpha, Typography, useTheme } from '@mui/material'
import { ExperienceBlockDescription } from 'src/components/molecules/ExperienceBlockDescription'
import * as S from './styles'
import SvgIcon from 'src/components/atoms/SvgIcon'
import { InstaProjectLabelIcon } from 'src/components/atoms/svg'

export const InstagramProjectBlock = () => {
  const theme = useTheme()
  return (
    <S.Root>
      <S.LabelIconContainer>
        <SvgIcon component={InstaProjectLabelIcon} />
      </S.LabelIconContainer>

      <ExperienceBlockDescription
        work="Own project"
        role="Backend-developer"
        date="01.01.2023 - Current day"
        description={
          <Typography variant="inherit">
            I wanted to learn how <span>to write the backend part</span>, so I came up with an
            application to collect statistics on instagram. In this project, I used technologies
            such as expreess js, mongodb, typescript. A secure system for collecting statistics on
            Instagram was developed, which distinguishes this application from all others on the
            market.
          </Typography>
        }
        linkText="Check out the application"
        linkHref="https://devapi.perfectinst.app/swagger"
      />

      <S.ImageContainer>
        <Typography
          variant="inherit"
          component="pre"
          sx={{
            position: 'absolute',
            zIndex: 0,
            right: '-3rem',
            top: '-2rem',
            color: alpha(theme.palette.common.green, 0.3),
          }}
        >
          {`.SobreMi {

            Profesion: Developer;
            Lenguajes: JS, CSS;
          }`}
        </Typography>
        <Typography
          variant="inherit"
          component="pre"
          sx={{
            position: 'absolute',
            zIndex: 0,
            left: '27%',
            bottom: '-3rem',
            color: alpha(theme.palette.common.green, 0.3),
          }}
        >
          {`.Educacion {
              FreeCodeCamp: JS Courses;
              Udemy: CSS Courses;
             }`}
        </Typography>
        <img src="/images/instagramPhones.webp" alt="instagram" />
      </S.ImageContainer>
    </S.Root>
  )
}
