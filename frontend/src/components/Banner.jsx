import React, { useEffect, useState } from "react";
import { Text, Box, Flex, useColorModeValue, Image } from "@chakra-ui/react";


const Component = () => {
  const slides = [
    {
      img:
        "https://ichef.bbci.co.uk/news/640/cpsprodpb/BF0D/production/_106090984_2e39b218-c369-452e-b5be-d2476f9d8728.jpg",
    },
    {
      img:
      "https://resizer.glanacion.com/resizer/OI4WH75XKosDWuXn2qU-VzZSYXU=/879x586/smart/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/3K2CEKCGX5BP3LFSFJ5GVVR6FM.jpg",
    },
    {
      img:
        "https://live.mrf.io/statics/i/ps/cdn.statically.io/img/maduradas.com/f=auto/wp-content/uploads/2021/12/spiderman-way-home-fecha-estreno.jpg?width=1200&enable=upscale",
    }
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