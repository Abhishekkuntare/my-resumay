import { Container, Flex, Heading, Input, Button, Text } from '@chakra-ui/react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useRouter } from 'next/router'

const Login = () => {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  useEffect(() => {
    if (localStorage.getItem('myuser')) {
      router.push('/')
    }
  }, [])

  const handleChange = e => {
    if (e.target.name == 'email') {
      setEmail(e.target.value)
    } else if (e.target.name == 'password') {
      setPassword(e.target.value)
    }
  }

  const handleSubmit = async e => {
    e.preventDefault()

    const data = { email, password }
    let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    let responce = await res.json()
    console.log(responce)
    setEmail('')
    setPassword('')
    if (responce.success) {
      localStorage.setItem(
        'myuser',
        JSON.stringify({
          token: responce.token,
          email: responce.email
        })
      )
      toast.success('You are successfully loged in!', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      })
      setTimeout(() => {
        router.push(process.env.NEXT_PUBLIC_HOST)
      }, 1000)
    } else {
      toast.error(responce.error, {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      })
    }
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
        border="0.5px"
        borderColor="gray.200'"
        alignItems="center"
        justifyContent="center"
      >
        <Flex direction="column" p={12} rounded={6}>
          <Heading mb={6}>Log in</Heading>
          <form method="POST" onSubmit={handleSubmit}>
            <Input
              onChange={handleChange}
              name="email"
              value={email}
              type="email"
              id="email"
              placeholder="xyz.@.com"
              variant="filled"
              mb={3}
              required
            />
            <Input
              onChange={handleChange}
              name="password"
              value={password}
              type="password"
              id="password"
              placeholder="*********"
              variant="filled"
              mb={6}
              required
            />
            <Button
              type="submit"
              width={[250, 400, 400, 500]}
              colorScheme="teal"
            >
              Log in
            </Button>
            <Flex direction="row  ">
              <Text pr={2} size={0.4}>
                Create account?
              </Text>
              <Link size={1} href="/signup">
                <Text cursor="pointer" fontSize="sm">
                  Sign up
                </Text>
              </Link>
            </Flex>
          </form>

          <Flex alignItems="center" justifyContent="center" display="flex">
            <Button display="flex" bgColor="#4FD1C5" width={200} mt={10}>
              <Link size={1} href="/forgotPassword">
                <Text
                  color="black"
                  cursor="pointer"
                  textAlign="center"
                  fontSize="sm"
                >
                  ForgotPassword
                </Text>
              </Link>
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Container>
  )
}

export default Login
