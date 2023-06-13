import { useEffect, useState } from "react";
import { MdTextDecrease, MdTextIncrease } from "react-icons/md";
import { VscColorMode } from "react-icons/vsc";
import { Container, PanelButton } from "./ReadingPanel.styles";
import { Theme } from "./theme/theme.types";
import { decreaseFont } from "./utils/decrease-font.util";
import { increseFont } from "./utils/increase-font.util";
interface Props {
  targetClass?: string;
  targetId?: string;
  fontUnits?: string;
  fontChange?: number;
  theme?: Theme;
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
      <PanelButton>
        <VscColorMode></VscColorMode>
      </PanelButton>
    </Container>
  );
}
