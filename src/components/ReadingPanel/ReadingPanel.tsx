import { useEffect, useState } from "react";
import { MdTextDecrease, MdTextIncrease } from "react-icons/md";
import { Container, PanelButton } from "./ReadingPanel.styles";
import { decreaseFont } from "./utils/decrease-font.util";
import { increseFont } from "./utils/increase-font.util";

interface Props {
  targetClass?: string;
  targetId?: string;
  fontUnits?: string;
  fontChange?: number;
}

export function ReadingPanel({
  targetClass,
  targetId,
  fontUnits: fontSizeUnits = "px",
  fontChange: fontSizeChange = 1,
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
      elements.forEach((el) => increseFont(el, fontSizeUnits, fontSizeChange));
    }
  };

  const handleFontDecrease = () => {
    if (elements?.length) {
      if (elements?.length) {
        elements.forEach((el) =>
          decreaseFont(el, fontSizeUnits, fontSizeChange)
        );
      }
    }
  };
  return (
    <Container>
      <PanelButton onClick={handleFontIncrease}>
        <MdTextIncrease></MdTextIncrease>
      </PanelButton>
      <PanelButton onClick={handleFontDecrease}>
        <MdTextDecrease></MdTextDecrease>
      </PanelButton>
    </Container>
  );
}
