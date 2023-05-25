import * as S from './styles'
import {
  BlockchainProjectBlock,
  CmsProjectBlock,
  InstagramProjectBlock,
} from 'src/components/molecules/ExperienceBlocks'

const ExperienceSection = () => {
  return (
    <S.Root>
      <S.Container size="small">
        <CmsProjectBlock />
        <InstagramProjectBlock />
        <BlockchainProjectBlock />
      </S.Container>
    </S.Root>
  )
}

export default ExperienceSection
