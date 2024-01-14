import {
  Container,
  DisplayText,
  GridWrapper,
  HugeText,
  NormalText,
} from 'styles'
import {
  AnimList,
  InnerList,
  ListItem,
  ParagraphWrapper,
  SolutionsWrapper,
} from './styles'
import { ArrowIcon, Marquee } from 'components'

const listItems = [
  { num: '01', title: 'Safety management' },
  { num: '02', title: 'Training and compliance' },
  { num: '03', title: 'Hazard Awareness' },
]

const Solutions = () => {
  return (
    <SolutionsWrapper>
      <Marquee repeat={3} duration={8}>
        <DisplayText>
          Safer <span>solutions</span>
        </DisplayText>
      </Marquee>
      <Container>
        <GridWrapper>
          <ParagraphWrapper>
            <NormalText>
              As a multidisciplinary construction safety studio, we offer a
              range of professional services.
            </NormalText>
          </ParagraphWrapper>
        </GridWrapper>
      </Container>
      <Container>
        {listItems.map((info, index) => (
          <ListItem href="/" key={index}>
            <InnerList>
              <GridWrapper className="grid-wrapper">
                <HugeText>{info.num}</HugeText>
                <HugeText className="item-name">{info.title}</HugeText>
                <ArrowIcon />
              </GridWrapper>
            </InnerList>
            <AnimList className="inner">
              <Marquee repeat={10} duration={3}>
                <HugeText>Click to view</HugeText>
              </Marquee>
            </AnimList>
          </ListItem>
        ))}
      </Container>
    </SolutionsWrapper>
  )
}

export default Solutions
