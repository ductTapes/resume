import * as S from './styles'

const Footer = () => {
  return (
    <S.Root id="contact">
      <S.Block>
        <S.BlockTitle $color="blue">Don’t be shy, say hello!</S.BlockTitle>

        <S.BlockLinkContainer>
          <S.BlockLink
            to="#"
            onClick={e => {
              window.location.href = 'mailto:no-reply@maxim-ivanov@yandex.by'
              e.preventDefault()
            }}
          >
            maxim-ivanov@yandex.by
          </S.BlockLink>
        </S.BlockLinkContainer>
      </S.Block>

      <S.Block>
        <S.BlockTitle $color="green">See more work</S.BlockTitle>

        <S.BlockLinkContainer>
          <S.BlockLink to="https://github.com/" target="_blank">
            Github
          </S.BlockLink>
        </S.BlockLinkContainer>
      </S.Block>

      <S.Block>
        <S.BlockTitle $color="purple">Let’s connect</S.BlockTitle>

        <S.BlockLinkContainer>
          <S.BlockLink to="https://www.linkedin.com" target="_blank">
            Linkedin
          </S.BlockLink>
        </S.BlockLinkContainer>
      </S.Block>
    </S.Root>
  )
}

export default Footer
