import {
  Box,
  Progress,
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  useSteps,
} from "@chakra-ui/react";

import React, { useEffect } from "react";

const Stepperss = ({oriented, count, steps, index }) => {
  const { activeStep, setActiveStep } = useSteps({
    index: index,
  });
  useEffect(() => {
    setActiveStep(index);
  }, [index]);

  const max = steps.length - 1;
  const progressPercent = (activeStep / max) * 100;

  return (
    <div>
      <Box position="relative">
        <Stepper size="sm" orientation={oriented} colorScheme="yellow" index={activeStep} gap="1">
          {steps.map((step, i) => (
            <Step key={i} gap="0">
              <StepIndicator bg="white">
                <StepStatus
                  complete={<StepIcon />}
                  incomplete={<StepNumber />}
                  active={<StepNumber />}
                />
              </StepIndicator>
            </Step>
          ))}
        </Stepper>
        <Progress
          value={progressPercent}
          position="absolute"
          colorScheme="yellow"
          height="2px"
          width="full"
          top="10px"
          zIndex={-1}
        />
      </Box>
    </div>
  );
};

export default Stepperss;
