import * as S from './styles'
import React, { useState } from 'react'
import { GetStackCardByType, StackCardProps } from 'src/components/molecules/StackCard/types'
import { GitIcon, NodeJSIcon, ReactIcon } from 'src/components/atoms/svg/index'
import { SvgIcon } from 'src/components/atoms/SvgIcon/SvgIcon'

const getStackCardByType: GetStackCardByType = type => {
  switch (type) {
    case 'frontend':
      return {
        title: 'Frontend',
        icon: ReactIcon,
        svgIconProps: { width: '' },
        description: (
          <>
            I have experience in building complex and scalable web applications. I make all
            components responsive and cross-browser compatible. I use{' '}
            <S.Bold>HTML5/CSS3 standards and BEM for layout</S.Bold>. The main development tool is
            React & Typescript. I have experience with next, redux, zustand, material,
            styled-components, formik, yup, SCSS and etc...
          </>
        ),
      }
    case 'backend':
      return {
        title: 'Backend',
        icon: NodeJSIcon,
        description: (
          <>
            I have experience <S.Bold>writing backend on my own projects.</S.Bold> Technologies
            include Typescript, express js, mongoose, jwt, express-validator etc. I describe all the
            documentation through swagger
          </>
        ),
      }
    case 'other':
      return {
        title: 'Other',
        icon: GitIcon,
        description: (
          <>
            I use git for teamwork and application version control. Participate in cross-review. I
            use postman to test the rest api. During team leading, I participated in release
            planning, <S.Bold>supervised the development of tasks, composed</S.Bold> / distributed
            tasks.
          </>
        ),
      }
  }
}

const StackCard: React.FC<StackCardProps> = ({ type }) => {
  const [showMore, setShowMore] = useState(false)

  const stackCardData = getStackCardByType(type)

  return (
    <S.Root
      onClick={() => {
        setShowMore(!showMore)
      }}
      onMouseLeave={() => {
        setShowMore(false)
      }}
      showMore={showMore}
    >
      <S.IconContainer>
        <SvgIcon component={stackCardData.icon} />
      </S.IconContainer>

      <S.Title variant="h3">{stackCardData.title}</S.Title>

      <S.Description>{stackCardData.description}</S.Description>
    </S.Root>
  )
}

export default StackCard
