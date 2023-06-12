import { useEffect, useState } from "react";
import { MdTextDecrease, MdTextIncrease } from "react-icons/md";
import { Container, PanelButton } from "./ReadingPanel.styles";

interface Props {
  targetClass?: string;
  targetId?: string;
  fontSizeUnits?: string;
  fontSizeUnitSize?: number;
}

function ReadingPanel({
  targetClass,
  targetId,
  fontSizeUnits = "px",
  fontSizeChange = 1,
}: Props) {
  const [elements, setElements] = useState<HTMLElement[] | null>();

  useEffect(() => {
    if (targetClass) {
      const htmlCollection: HTMLCollectionOf<Element> =
        document.getElementsByClassName(targetClass);
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
      for (const element of elements) {
        const style = window
          .getComputedStyle(element, null)
          .getPropertyValue("font-size");
        const fontSize = parseFloat(style);
        element.style.fontSize = `${fontSize + fontSizeChange}${fontSizeUnits}`;
      }
    }
  };

  const handleFontDecrease = () => {
    if (elements?.length) {
      for (const element of elements) {
        const style = window
          .getComputedStyle(element, null)
          .getPropertyValue("font-size");
        const fontSize = parseFloat(style);
        element.style.fontSize = `${fontSize - fontSizeChange}${fontSizeUnits}`;
      }
    }
  };
  return (
    <Container>
      <PanelButton>
        <MdTextIncrease onClick={handleFontIncrease}></MdTextIncrease>
      </PanelButton>
      <PanelButton>
        <MdTextDecrease onClick={handleFontDecrease}></MdTextDecrease>
      </PanelButton>
    </Container>
  );
}

export default ReadingPanel;
