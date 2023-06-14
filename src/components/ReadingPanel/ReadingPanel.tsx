import { merge } from "lodash";
import { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FaExpandAlt } from "react-icons/fa";
import { ImShrink2 } from "react-icons/im";
import { IoMenuOutline } from "react-icons/io5";
import { MdTextDecrease, MdTextIncrease } from "react-icons/md";
import { VscColorMode } from "react-icons/vsc";
import { Container, PanelButton } from "./ReadingPanel.styles";
import { changeColorTheme } from "./colors/change-color-theme.util";
import { decreaseFont } from "./font-size/decrease-font.util";
import { increseFont } from "./font-size/increase-font.util";
import { decreaseLineHeight } from "./line-height/decrease-line-height.util";
import { increaseLineHeight } from "./line-height/increase-line-height.util";
import { Settings, defaultSettings } from "./settings/settings.types";

interface Props {
  targetClass?: string;
  targetId?: string;
  settings?: Partial<Settings>;
}

export function ReadingPanel({
  targetClass,
  targetId,
  settings: userSettings,
}: Props) {
  const [elements, setElements] = useState<HTMLElement[] | null>();
  const [settings, setSettings] = useState<Settings>(defaultSettings);

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
    if (userSettings) {
      const newSettings = merge(settings, userSettings);
      setSettings(newSettings);
    }
  }, [userSettings]);

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
    elements?.forEach((el) =>
      increseFont(el, settings.fontSizeUnits, settings.fontSizeStep)
    );
  };

  const handleFontDecrease = () => {
    elements?.forEach((el) =>
      decreaseFont(el, settings.fontSizeUnits, settings.fontSizeStep)
    );
  };

  const handleLineHeightIncrease = () => {
    elements?.forEach((el) =>
      increaseLineHeight(el, settings.lineHeightUnits, settings.lineHeightsStep)
    );
  };

  const handleLineHeightDecrease = () => {
    elements?.forEach((el) =>
      decreaseLineHeight(el, settings.lineHeightUnits, settings.lineHeightsStep)
    );
  };

  const handleColorChange = () => {
    elements?.forEach((el) => {
      changeColorTheme(el, settings.defaultTheme, settings.colorSettings);
    });

    setSettings((currentSettings) => ({
      ...currentSettings,
      defaultTheme: currentSettings.defaultTheme === "light" ? "dark" : "light",
    }));
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
