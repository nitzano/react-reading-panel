import { merge } from "lodash";
import { useEffect, useState } from "react";
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineMenu,
} from "react-icons/ai";
import { FaExpandAlt } from "react-icons/fa";
import { ImShrink2 } from "react-icons/im";
import { IoMenuOutline } from "react-icons/io5";
import { MdTextDecrease, MdTextIncrease } from "react-icons/md";
import { VscColorMode } from "react-icons/vsc";
import { Container, PanelButton } from "./ReadingPanel.styles";
import { changeColorTheme } from "./colors/change-color-theme.util";
import { decreaseFont } from "./font-size/decrease-font.util";
import { increseFont } from "./font-size/increase-font.util";
import { decreaseLetterSpacing } from "./letter-spacing/decrease-letter-spacing.util";
import { increaseLetterSpacing } from "./letter-spacing/increase-letter-spacing.util";
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
  const [isOpen, setIsOpen] = useState<boolean>(settings.startOpen);

  const { showButtons } = settings;

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
      if (userSettings.showButtons)
        newSettings.showButtons = userSettings.showButtons;
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
      increaseLineHeight(
        el,
        settings.lineHeightUnits,
        settings.lineHeightsStep,
        settings.lineHeightDefaultSize
      )
    );
  };

  const handleLineHeightDecrease = () => {
    elements?.forEach((el) =>
      decreaseLineHeight(
        el,
        settings.lineHeightUnits,
        settings.lineHeightsStep,
        settings.lineHeightDefaultSize
      )
    );
  };

  const handleLetterSpacingIncrease = () => {
    elements?.forEach((el) =>
      increaseLetterSpacing(
        el,
        settings.letterSpacingUnit,
        settings.letterSpacingStep,
        settings.letterSpacingDefaultSize
      )
    );
  };

  const handleLetterSpacingDecrease = () => {
    elements?.forEach((el) =>
      decreaseLetterSpacing(
        el,
        settings.letterSpacingUnit,
        settings.letterSpacingStep,
        settings.letterSpacingDefaultSize
      )
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

  const handleSwitchOpen = () => {
    setIsOpen((currentIsOpen) => !currentIsOpen);
  };

  return (
    <Container direction={settings.direction}>
      <>
        {!isOpen && (
          <PanelButton onClick={handleSwitchOpen}>
            <AiOutlineEye></AiOutlineEye>
          </PanelButton>
        )}
        {isOpen && (
          <PanelButton onClick={handleSwitchOpen}>
            <AiOutlineEyeInvisible></AiOutlineEyeInvisible>
          </PanelButton>
        )}
      </>

      {isOpen && (
        <>
          {showButtons.includes("increase_font_size") && (
            <PanelButton onClick={handleFontIncrease}>
              <MdTextIncrease></MdTextIncrease>
            </PanelButton>
          )}
          {showButtons.includes("decrease_font_size") && (
            <PanelButton onClick={handleFontDecrease}>
              <MdTextDecrease></MdTextDecrease>
            </PanelButton>
          )}
          {showButtons.includes("increase_line_height") && (
            <PanelButton onClick={handleLineHeightIncrease}>
              <AiOutlineMenu></AiOutlineMenu>
            </PanelButton>
          )}
          {showButtons.includes("decrease_line_height") && (
            <PanelButton onClick={handleLineHeightDecrease}>
              <IoMenuOutline></IoMenuOutline>
            </PanelButton>
          )}
          {showButtons.includes("change_colors") && (
            <PanelButton onClick={handleColorChange}>
              <VscColorMode></VscColorMode>
            </PanelButton>
          )}
          {showButtons.includes("increase_letter_spacing") && (
            <PanelButton>
              <FaExpandAlt onClick={handleLetterSpacingIncrease}></FaExpandAlt>
            </PanelButton>
          )}
          {showButtons.includes("decrease_letter_spacing") && (
            <PanelButton onClick={handleLetterSpacingDecrease}>
              <ImShrink2></ImShrink2>
            </PanelButton>
          )}
        </>
      )}
    </Container>
  );
}
