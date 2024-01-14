import { Container, GridWrapper, HugeText, NormalText } from 'styles'
import {
  DescriptionWrapper,
  ImageWrapper,
  MoreInfoWrapper,
  SectionWrapper,
} from './styles'
import { CustomImage, CustomLink } from 'components'

const About = () => {
  return (
    <SectionWrapper>
      <Container>
        <GridWrapper>
          <DescriptionWrapper>
            <HugeText>
              For the last 20 years, our team has been at the forefront of
              addressing New York's construction industry's urgent need for
              robust health and safety management.
            </HugeText>
            <CustomLink className="custom-link" href="/about">
              Read more
            </CustomLink>
          </DescriptionWrapper>
          <ImageWrapper>
            <CustomImage
              src={'/images/tractor.webp'}
              alt="RJZ Construction Site"
              speed={1.2}
              scale={1.3}
            />
          </ImageWrapper>
          <MoreInfoWrapper>
            <NormalText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </NormalText>
          </MoreInfoWrapper>
        </GridWrapper>
      </Container>
    </SectionWrapper>
  )
}

export default About
