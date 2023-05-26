import * as S from './styles'

const Footer = () => {
  return (
    <S.Root>
      <S.Block>
        <S.BlockTitle $color="blue">Don’t be shy, say hallo!</S.BlockTitle>
        <S.BlockValue>grishchenko-yuriy1996@yandex.by</S.BlockValue>
      </S.Block>

      <S.Block>
        <S.BlockTitle $color="green">See more work</S.BlockTitle>
        <S.BlockValue>Github</S.BlockValue>
      </S.Block>

      <S.Block>
        <S.BlockTitle $color="purple">Let’s connection</S.BlockTitle>
        <S.BlockValue>Linkedin</S.BlockValue>
      </S.Block>
    </S.Root>
  )
}

export default Footer
