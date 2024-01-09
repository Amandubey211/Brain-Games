import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";
import { Tooltip } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import ProjectModal from "./ProjectModal";

function MyModal({
  title,
  Description,
  link,
  image,
  i,
  Techstack,
  Features,
  TimeTaken,
  TooltipData
}) {
  const OverlayTwo = () => (
    <ModalOverlay
      bg="none"
      backdropFilter="auto"
      backdropInvert="80%"
      backdropBlur="2px"
    />
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayTwo />);

  return (
    <>
      <Tooltip
        hasArrow
        placement="top"
        label={TooltipData}
        bg="yellow.600"
      >
        <div
          key={i}
          className="text-decoration-none  text-reset"
          onClick={() => {
            setOverlay(<OverlayTwo />);
            onOpen();
          }}
        >
          <div className="hoverlink p-3 rounded-2" id={i}>
            <div className="d-flex justify-content-center ">
              <span className="py-1">
                {" "}
                <b className="vibrant"> {title.charAt(0)}</b>
                <b>{title.substring(1)} </b>
              </span>
            </div>
          </div>
        </div>
      </Tooltip>

      <Modal size="xl" isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            {" "}
            <div className="d-flex justify-content-between pe-5 align-items-center">
              <h4>{title}</h4>
              <b> {TimeTaken}</b>
            </div>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <ProjectModal
              title={title}
              Description={Description}
              image={image}
              link={link}
              i={i}
              Techstack={Techstack}
              Features={Features}
            />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="yellow" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default MyModal;
