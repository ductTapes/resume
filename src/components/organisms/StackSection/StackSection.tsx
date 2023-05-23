import * as S from './styles'
import StackCard from 'src/components/molecules/StackCard/StackCard'
import Container from 'src/components/atoms/Container/Container'

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
