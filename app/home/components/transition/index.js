import { CustomButton, CustomImage } from 'components'
import { ImageWrapper, InnerContentWrapper, SectionWrapper } from './styles'
import { Container, HugeText } from 'styles'

const Transition = () => {
  return (
    <SectionWrapper>
      <Container>
        <ImageWrapper>
          <InnerContentWrapper>
            <HugeText>
              We provide professional-led training
              <br /> for your team. Backed by OSHA
            </HugeText>
            <CustomButton href="/about">Explore our training</CustomButton>
          </InnerContentWrapper>
          <CustomImage
            src={'/images/buildings.webp'}
            alt="Buildings"
            speed={2}
          />
        </ImageWrapper>
      </Container>
    </SectionWrapper>
  )
}

export default Transition
