// Movere Executive Coaching Company Website
import { Box, Container, Flex, Heading, Text, Button, Image, VStack, HStack, Icon } from "@chakra-ui/react";
import { FaArrowRight, FaRegLightbulb, FaUsers, FaChartLine } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Flex bg="gray.800" color="white" minHeight="100vh" direction="column" justifyContent="center" alignItems="center" paddingY="20">
        <VStack spacing={4} textAlign="center">
          <Heading as="h1" size="2xl" fontWeight="bold">
            Movere
          </Heading>
          <Text fontSize="xl" maxWidth="container.md">
            Unleashing potential, inspiring performance.
          </Text>
          <Button rightIcon={<FaArrowRight />} colorScheme="blue" size="lg">
            Learn More
          </Button>
        </VStack>
      </Flex>

      {/* About Section */}
      <Container maxW="container.lg" py="20">
        <VStack spacing={8}>
          <Heading as="h2" size="xl" textAlign="center">
            About Movere
          </Heading>
          <Text fontSize="lg" textAlign="center">
            Movere is an executive coaching company dedicated to helping organizations foster a motivated workforce. We deliver programs that inspire employees to excel and drive phenomenal results for their companies.
          </Text>
          <Image src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxleGVjdXRpdmUlMjBjb2FjaGluZ3xlbnwwfHx8fDE3MTQ0MDU1NDV8MA&ixlib=rb-4.0.3&q=80&w=1080" />
        </VStack>
      </Container>

      {/* Services Section */}
      <Box bg="gray.100" py="20">
        <Container maxW="container.lg">
          <Heading as="h2" size="xl" textAlign="center" mb="10">
            Our Services
          </Heading>
          <HStack spacing={10} justifyContent="center">
            <VStack spacing={4} alignItems="center">
              <Icon as={FaRegLightbulb} w={10} h={10} color="blue.500" />
              <Text fontSize="lg" fontWeight="bold">
                Innovation Training
              </Text>
              <Text textAlign="center">Empower your team to think creatively and innovate effectively.</Text>
            </VStack>
            <VStack spacing={4} alignItems="center">
              <Icon as={FaUsers} w={10} h={10} color="blue.500" />
              <Text fontSize="lg" fontWeight="bold">
                Team Building
              </Text>
              <Text textAlign="center">Strengthen team dynamics and collaboration.</Text>
            </VStack>
            <VStack spacing={4} alignItems="center">
              <Icon as={FaChartLine} w={10} h={10} color="blue.500" />
              <Text fontSize="lg" fontWeight="bold">
                Performance Coaching
              </Text>
              <Text textAlign="center">Enhance individual and group performance to meet business goals.</Text>
            </VStack>
          </HStack>
        </Container>
      </Box>

      {/* Call to Action Section */}
      <Flex bg="blue.600" color="white" minHeight="20vh" direction="column" justifyContent="center" alignItems="center" paddingY="10">
        <Heading as="h3" size="lg" textAlign="center">
          Ready to transform your workforce?
        </Heading>
        <Button mt="4" rightIcon={<FaArrowRight />} colorScheme="blue" variant="outline" size="lg">
          Contact Us
        </Button>
      </Flex>
    </Box>
  );
};

export default Index;
