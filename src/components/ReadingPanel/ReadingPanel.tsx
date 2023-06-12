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

  const handleFontIncrease = () => {
    if (elements?.length) {
      console.log(`element=${JSON.stringify(elements)}`);
    }
  };

  return (
    <Container>
      <PanelButton>
        <MdTextIncrease onClick={handleFontIncrease}></MdTextIncrease>
      </PanelButton>
      <PanelButton>
        <MdTextDecrease></MdTextDecrease>
      </PanelButton>
    </Container>
  );
}

export default ReadingPanel;
