import React, { useEffect, useState } from "react";
import { Text, Box, Flex, useColorModeValue, Image } from "@chakra-ui/react";


const Component = () => {
  const slides = [
    {
    img:
    "https://images.pexels.com/photos/436413/pexels-photo-436413.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    {
      img:
        "https://images.pexels.com/photos/1634689/pexels-photo-1634689.jpeg?auto=compress&cs=tinysrgb&dpr=750&w=500",
    },
    {
      img:
      "https://images.pexels.com/photos/6447217/pexels-photo-6447217.jpeg?auto=compress&cs=tinysrgb&dpr=750&w=500",
    },
    
    
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  const slidesCount = slides.length;

  const prevSlide = () => {
    setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
  };
  const nextSlide = () => {
    setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
  };
  const carouselStyle = {
    transition: "all .5s",
    ml: `-${currentSlide * 100}%`,
  };

  const SLIDES_INTERVAL_TIME = 3000;
  const ANIMATION_DIRECTION = "right";

  useEffect(() => {
    const automatedSlide = setInterval(() => {
      ANIMATION_DIRECTION.toLowerCase() === "left" ? prevSlide() : nextSlide();
    }, SLIDES_INTERVAL_TIME);
    return () => clearInterval(automatedSlide);
  }, []);

  return (
    
    <Flex
      
      bg="black"
      
      alignItems="center"
      justifyContent="center"
      objectFit="contain"
      borderRadius="md"
      
      boxShadow="md"
    >
    
      <Flex w="full" overflow="hidden">
        <Flex pos="relative" h="400px" w="full" {...carouselStyle}>
          {slides.map((slide, sid) => (
            <Box key={`slide-${sid}`} flex="none" boxSize="full" shadow="md">
              <Text
                color="white"
                fontSize="xs"
                p="8px 12px"
                pos="absolute"
                top="0"
                whiteSpace="nowrap"
              >
                {sid + 1} / {slidesCount}
              </Text>
              <Image src={slide.img} boxSize="full" backgroundSize="cover" objectFit="cover"/>
            </Box>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
};
export default Component;