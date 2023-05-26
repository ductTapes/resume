import * as S from './styles'
import StackCard from 'src/components/molecules/StackCard'
import Container from 'src/components/atoms/Container'

const StackSection = () => {
  return (
    <S.Root>
      <Container>
        <S.CardsContainer>
          <StackCard type="frontend" />
          <StackCard type="backend" />
          <StackCard type="other" />
        </S.CardsContainer>
      </Container>
    </S.Root>
  )
}

export default StackSection
