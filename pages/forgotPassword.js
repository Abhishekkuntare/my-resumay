import { Container, Button, Flex, Heading, Input } from '@chakra-ui/react'

const ForgotPassword = () => {
  return (
    <Container>
      <Flex
        border="0.5px"
        borderColor="gray.200'"
        alignItems="center"
        justifyContent="center"
      >
        <Flex direction="column" p={12} rounded={6}>
          <Heading mb={6}>Forgot Password</Heading>
          <Input placeholder="xyz.@.com" variant="filled" mb={3} type="email" />
          <Button colorScheme="teal">Continue</Button>
        </Flex>
      </Flex>
    </Container>
  )
}

export default ForgotPassword
