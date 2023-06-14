import { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FaExpandAlt } from "react-icons/fa";
import { ImShrink2 } from "react-icons/im";
import { IoMenuOutline } from "react-icons/io5";
import { MdTextDecrease, MdTextIncrease } from "react-icons/md";
import { VscColorMode } from "react-icons/vsc";
import { Container, PanelButton } from "./ReadingPanel.styles";
import { decreaseFont } from "./font-size/decrease-font.util";
import { increseFont } from "./font-size/increase-font.util";
import { decreaseLineHeight } from "./line-height/decrease-line-height.util";
import { increaseLineHeight } from "./line-height/increase-line-height.util";
import { Settings } from "./settings/settings.types";

interface Props {
  targetClass?: string;
  targetId?: string;
  fontUnits?: string;
  fontChange?: number;
  settings?: Settings;
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
    elements?.forEach((el) => increseFont(el, fontSizeUnits, fontSizeChange));
  };

  const handleFontDecrease = () => {
    elements?.forEach((el) => decreaseFont(el, fontSizeUnits, fontSizeChange));
  };

  const handleLineHeightIncrease = () => {
    elements?.forEach((el) =>
      increaseLineHeight(el, fontSizeUnits, fontSizeChange)
    );
  };

  const handleLineHeightDecrease = () => {
    elements?.forEach((el) =>
      decreaseLineHeight(el, fontSizeUnits, fontSizeChange)
    );
  };

  return (
    <Container>
      <PanelButton onClick={handleFontIncrease}>
        <MdTextIncrease></MdTextIncrease>
      </PanelButton>
      <PanelButton onClick={handleFontDecrease}>
        <MdTextDecrease></MdTextDecrease>
      </PanelButton>
      <PanelButton onClick={handleLineHeightIncrease}>
        <AiOutlineMenu></AiOutlineMenu>
      </PanelButton>
      <PanelButton onClick={handleLineHeightDecrease}>
        <IoMenuOutline></IoMenuOutline>
      </PanelButton>
      <PanelButton>
        <VscColorMode></VscColorMode>
      </PanelButton>
      <PanelButton>
        <FaExpandAlt></FaExpandAlt>
      </PanelButton>
      <PanelButton>
        <ImShrink2></ImShrink2>
      </PanelButton>
    </Container>
  );
}
