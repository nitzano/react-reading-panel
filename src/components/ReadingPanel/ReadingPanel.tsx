import { MdTextDecrease, MdTextIncrease } from 'react-icons/md'
import { Container, PanelButton } from "./ReadingPanel.styles"

function ReadingPanel() {
  return (
    <Container>
      <div>
        <PanelButton>
      <MdTextIncrease></MdTextIncrease>

        </PanelButton>
        <PanelButton>
      <MdTextDecrease></MdTextDecrease>

        </PanelButton>

      </div>
    </Container>
  )
}

export default ReadingPanel