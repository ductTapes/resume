import * as S from './styles'

const Footer = () => {
  return (
    <S.Root>
      <S.Block>
        <S.BlockTitle $color="blue">Don’t be shy, say hallo!</S.BlockTitle>
        <S.BlockLink to="/">grishchenko-yuriy1996@yandex.by</S.BlockLink>
      </S.Block>

      <S.Block>
        <S.BlockTitle $color="green">See more work</S.BlockTitle>
        <S.BlockLink to="/">Github</S.BlockLink>
      </S.Block>

      <S.Block>
        <S.BlockTitle $color="purple">Let’s connection</S.BlockTitle>
        <S.BlockLink to="/">Linkedin</S.BlockLink>
      </S.Block>
    </S.Root>
  )
}

export default Footer
