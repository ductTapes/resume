import * as S from './styles'
import { Box } from '@mui/material'
import SvgIcon from 'src/components/atoms/SvgIcon'
import { DiagonalArrowIcon } from 'src/components/atoms/svg'
import React from 'react'
import { ExperienceBlockDescriptionProps } from 'src/components/molecules/ExperienceBlockDescription/types'

export const ExperienceBlockDescription: React.FC<ExperienceBlockDescriptionProps> = ({
  description,
  role,
  linkText,
  linkHref,
  work,
  date,
}) => {
  return (
    <S.Root>
      <Box component="ul">
        <S.ListItem>
          <S.ListItemTitle>Work</S.ListItemTitle>
          <S.ListItemValue>{work}</S.ListItemValue>
        </S.ListItem>
        <S.ListItem>
          <S.ListItemTitle>Role</S.ListItemTitle>
          <S.ListItemValue>{role}</S.ListItemValue>
        </S.ListItem>
        <S.ListItem>
          <S.ListItemTitle>Date</S.ListItemTitle>
          <S.ListItemValue>{date}</S.ListItemValue>
        </S.ListItem>
        <S.ListItem>
          <S.ListItemTitle>Link</S.ListItemTitle>
          <S.ListItemLinkValue to={linkHref}>
            {linkText}

            <S.ListItemLinkArrowContainer>
              <SvgIcon component={DiagonalArrowIcon} />
              <SvgIcon component={DiagonalArrowIcon} />
            </S.ListItemLinkArrowContainer>
          </S.ListItemLinkValue>
        </S.ListItem>
      </Box>

      <S.DescriptionContainer>{description}</S.DescriptionContainer>
    </S.Root>
  )
}
