import React, { useState } from "react";

import Button from "components/Button";
import GridItem from "components/GridItem";
import GridLayout from "components/GridLayout";
import GridRow from "components/GridRow";
import Text from "components/Text";
import Dialog from "components/Dialog";
import Input from "components/Input";
import DialogActionContainer from "components/DialogActionContainer";
import DialogAction from "components/DialogAction";
import Label from "components/Label";
import { TextProps } from "app/types";

type RowComponentProps = {
  sentence: string;
  index: number;
};

type AppearenceControllerProps = {
  handleBoldClick: React.MouseEventHandler<HTMLButtonElement>;
  handleItalicClick: React.MouseEventHandler<HTMLButtonElement>;
  handleUnderlineClick: React.MouseEventHandler<HTMLButtonElement>;
  handleColorChange: React.ChangeEventHandler<HTMLInputElement>;
  setFontSize: (fontSize: number | null) => void;
  index: number;
};

function AppearenceController(props: AppearenceControllerProps) {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [fontSize, setFontSize] = useState<number | null>(null);

  const onFontSizeClicked = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!isDialogOpen) setIsDialogOpen(true);
  };

  const closeDialog = () => {
    if (isDialogOpen) setIsDialogOpen(false);
  };

  const handleOnCloseClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    closeDialog();
  };

  const onFontSizeInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFontSize(+event.target.value);
  };

  const handleOnSetClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    props.setFontSize(fontSize);
    closeDialog();
  };

  return (
    <>
      <Button onClick={props.handleBoldClick}>bold</Button>
      {", "}
      <Button onClick={props.handleItalicClick}>italic</Button>
      {", "}
      <Button onClick={props.handleUnderlineClick}>underline</Button>
      {", "}
      <Button onClick={onFontSizeClicked}>font-size</Button>
      <Dialog isOpen={isDialogOpen}>
        <Input type="number" visible={true} onChange={onFontSizeInputChange} />
        <DialogActionContainer>
          <DialogAction onClick={handleOnCloseClick}>Close</DialogAction>
          <DialogAction onClick={handleOnSetClick}>Set</DialogAction>
        </DialogActionContainer>
      </Dialog>
      {", "}
      <Label htmlFor={`color-controller-${props.index}`}>color</Label>
      <Input
        type="color"
        id={`color-controller-${props.index}`}
        visible={false}
        onChange={props.handleColorChange}
      />
    </>
  );
}

function RowComponent(props: RowComponentProps) {
  const [textStyles, setTextStyles] = useState<TextProps>({
    isBold: false,
    isItalic: false,
    isUnderlined: false,
    fontSize: null,
    customColor: null,
  });

  const handleBoldClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setTextStyles({ ...textStyles, isBold: !textStyles.isBold });
  };

  const handleItalicClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setTextStyles({ ...textStyles, isItalic: !textStyles.isItalic });
  };

  const handleUnderlineClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setTextStyles({ ...textStyles, isUnderlined: !textStyles.isUnderlined });
  };

  const setFontSize = (fontSize: number | null) => {
    setTextStyles({ ...textStyles, fontSize: fontSize });
  };

  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTextStyles({ ...textStyles, customColor: event.target.value });
  };

  return (
    <GridRow>
      <GridItem>
        <AppearenceController
          handleBoldClick={handleBoldClick}
          handleItalicClick={handleItalicClick}
          handleUnderlineClick={handleUnderlineClick}
          handleColorChange={handleColorChange}
          setFontSize={setFontSize}
          index={props.index}
        />
      </GridItem>
      <GridItem>
        <Text
          isBold={textStyles.isBold}
          isItalic={textStyles.isItalic}
          isUnderlined={textStyles.isUnderlined}
          fontSize={textStyles.fontSize}
          customColor={textStyles.customColor}
        >
          {props.sentence}
        </Text>
      </GridItem>
    </GridRow>
  );
}

export default function Home() {
  const sentences = [
    `He's not the sharpest knife in the drawer.`,
    `The big building was blazing with lights.`,
    `Now you must answer some big questions.`,
    `Get Your Act Together!`,
  ];
  return (
    <GridLayout>
      {sentences.map((sentence, index) => (
        <RowComponent key={sentence} sentence={sentence} index={index} />
      ))}
    </GridLayout>
  );
}
