import { Text } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";

export const ShrinkableText = (): JSX.Element => {
  const [shrunk, setHasShrunk] = useState(false);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!textRef.current) {
      return;
    }

    setHasShrunk(textRef.current?.clientWidth < textRef.current?.scrollWidth);
  }, [textRef]);

  return (
    <>
      <Text
        ref={textRef}
        textOverflow="ellipsis"
        whiteSpace="nowrap"
        overflow="hidden"
      >
        lots of text. lots of text. lots of text. lots of text. lots of text.
        lots of text. lots of text. lots of text. lots of text. lots of text.
        lots of text. lots of text. lots of text. lots of text. lots of text.
      </Text>
      {shrunk && <span>shrunk</span>}
    </>
  );
};
