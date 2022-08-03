import { Container, Flex, Heading, Input, Button, Text } from '@chakra-ui/react'
import Link from 'next/link'
import { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Signup = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleChange = e => {
    if (e.target.name == 'name') {
      setName(e.target.value)
    } else if (e.target.name == 'email') {
      setEmail(e.target.value)
    } else if (e.target.name == 'password') {
      setPassword(e.target.value)
    }
  }

  const handleSubmit = async e => {
    e.preventDefault()

    const data = { name, email, password }
    let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    let responce = await res.json()
    console.log(responce)
    setName('')
    setEmail('')
    setPassword('')
    toast.success('Your Account has been created,Please Access to Login!', {
      position: 'top-center',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined
    })
  }
  return (
    <Container>
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Flex
        border={0.5}
        borderRadius="gray.200"
        alignItems="center"
        justifyContent="center"
      >
        <Flex direction="column" p={12} rounded={6}>
          <Heading mb={6}>Sign Up</Heading>

          <form method="POST" onSubmit={handleSubmit}>
            <Input
              value={name}
              onChange={handleChange}
              name="name"
              type="text"
              placeholder=" your name"
              variant="filled"
              mb={3}
              required
            />
            <Input
              value={email}
              onChange={handleChange}
              name="email"
              type="email"
              required
              placeholder="xyz.@.com"
              variant="filled"
              mb={3}
            />
            <Input
              value={password}
              onChange={handleChange}
              name="password"
              type="password"
              placeholder="*********"
              variant="filled"
              mb={6}
              required
            />
            <Button
              width={[250, 400, 400, 500]}
              type="submit"
              colorScheme="teal"
            >
              Signup
            </Button>
          </form>

          <Flex direction="row  ">
            <Text pr={2} size={0.4}>
              Already account?{' '}
            </Text>
            <Link size={1} href="/login">
              <Text cursor="pointer" fontSize="sm">
                Log in
              </Text>
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </Container>
  )
}
export default Signup
