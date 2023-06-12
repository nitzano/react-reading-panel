import { useEffect, useState } from "react";
import { MdTextDecrease, MdTextIncrease } from "react-icons/md";
import { Container, PanelButton } from "./ReadingPanel.styles";

interface Props {
  targetClass?: string;
  targetId?: string;
}

function ReadingPanel({ targetClass, targetId }: Props) {
  const [elements, setElements] = useState<HTMLElement[] | null>();

  useEffect(() => {

    // test 


    
    if (targetClass) {
      const htmlCollection: HTMLCollectionOf<Element> =
        document.getElementsByClassName("example");
      const htmlElements: HTMLElement[] = Array.from(
        htmlCollection
      ) as HTMLElement[];
      setElements(htmlElements);
    }
  }, [targetClass]);

  useEffect(() => {
    if (targetId) {
      const idElement = document.getElementById(targetId);
      if (idElement) {
        setElements([idElement]);
      } else {
        setElements(null);
      }
    }
  }, [targetId]);

  return (
    <Container>
      <PanelButton>
        <MdTextIncrease></MdTextIncrease>
      </PanelButton>
      <PanelButton>
        <MdTextDecrease></MdTextDecrease>
      </PanelButton>
    </Container>
  );
}

export default ReadingPanel;
