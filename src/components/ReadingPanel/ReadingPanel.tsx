import { MdTextDecrease, MdTextIncrease } from 'react-icons/md'
import { Container, PanelButton } from "./ReadingPanel.styles"

function ReadingPanel() {
  return (
    <Container>
        <PanelButton>
      <MdTextIncrease></MdTextIncrease>

        </PanelButton>
        <PanelButton>
      <MdTextDecrease></MdTextDecrease>

        </PanelButton>

    </Container>
  )
}

export default ReadingPanel