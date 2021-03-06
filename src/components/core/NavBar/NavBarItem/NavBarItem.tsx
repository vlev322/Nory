import { FC } from "react";
import { Center, Box } from "@chakra-ui/react";
import { useRouteMatch } from "react-router";

type Props = {
  href: string;
  onClick: () => void;
  imgSrc: string;
  imgActiveSrc: string;
};

export const NavBarItem: FC<Props> = (props) => {
  const match = useRouteMatch(props.href);
  const styles = additionalStyles({ ...props, isExact: Boolean(match?.isExact) });

  return (
    <Center
      h={["100%", "64px"]}
      w={["46px", "auto"]}
      position="relative"
      _before={styles.before}
      _hover={styles.hover}
      onClick={props.onClick}
      title="navbar item"
    >
      <Box bgImage={match?.isExact ? props.imgActiveSrc : props.imgSrc} bgRepeat="no-repeat" bgSize="contain" h="16px" w="16px" />
    </Center>
  );
};

const additionalStyles = ({ imgActiveSrc, isExact }: Props & { isExact: boolean }) => ({
  hover: {
    cursor: "pointer",
    "&::before": {
      backgroundColor: "accent",
    },
    div: {
      backgroundImage: imgActiveSrc,
    },
  },
  before: {
    content: `""`,
    height: ["2px", "100%"],
    width: ["100%", "2px"],
    backgroundColor: isExact ? "accent" : "transparent",
    position: "absolute",
    right: 0,
    bottom: [0, "auto"],
  },
});
