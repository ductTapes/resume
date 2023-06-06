import * as S from './styles'

const Footer = () => {
  return (
    <S.Root id="contact">
      <S.Block>
        <S.BlockTitle $color="blue">Don’t be shy, say hallo!</S.BlockTitle>

        <S.BlockLinkContainer>
          <S.BlockLink
            to="#"
            onClick={e => {
              window.location.href = 'mailto:no-reply@grishchenko-yuriy1996@yandex.by'
              e.preventDefault()
            }}
          >
            grishchenko-yuriy1996@yandex.by
          </S.BlockLink>
        </S.BlockLinkContainer>
      </S.Block>

      <S.Block>
        <S.BlockTitle $color="green">See more work</S.BlockTitle>

        <S.BlockLinkContainer>
          <S.BlockLink to="https://github.com/ductTapes" target="_blank">
            Github
          </S.BlockLink>
        </S.BlockLinkContainer>
      </S.Block>

      <S.Block>
        <S.BlockTitle $color="purple">Let’s connection</S.BlockTitle>

        <S.BlockLinkContainer>
          <S.BlockLink
            to="https://www.linkedin.com/in/yuriy-grishchenko-0a5151216/"
            target="_blank"
          >
            Linkedin
          </S.BlockLink>
        </S.BlockLinkContainer>
      </S.Block>
    </S.Root>
  )
}

export default Footer
