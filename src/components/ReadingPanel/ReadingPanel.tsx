import { useEffect, useState } from 'react';
import { MdTextDecrease, MdTextIncrease } from 'react-icons/md';
import { Container, PanelButton } from "./ReadingPanel.styles";

interface Props {
  targetClass?: string;
  targetId?: string;
}

function ReadingPanel({targetClass, targetId}: Props) {
  const [classElements, setClassElements] = useState<HTMLCollectionOf<Element>>()
  const [idElement, setIdElement] = useState<Element | null>()

  useEffect(() => {
    if (targetClass) {
      const allElements = document.getElementsByClassName(targetClass)
      setClassElements(allElements)
    }
  
    
  }, [targetClass])
  

  useEffect(() => {


    if (targetId) {
      const idElements = document.getElementById(targetId)
      setIdElement(idElements)
    }
  
    
  }, [targetId])
  

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