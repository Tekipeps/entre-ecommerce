import { useState } from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import axios from "axios";
import { BASE_URL } from "../requestMethods";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Register = () => {
  const [state, setState] = useState({});
  // console.log(state);  // console.log(state);

  const submitForm = async () => {
    const res = await axios.post(`${BASE_URL}auth/register`, state);
    const data = await res.data;
    console.log(data);
  };
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            submitForm();
          }}
        >
          <Input
            placeholder="name"
            onChange={({ target }) =>
              setState({ ...state, fname: target.value })
            }
          />
          <Input
            placeholder="last name"
            onChange={({ target }) =>
              setState({ ...state, lname: target.value })
            }
          />
          <Input
            placeholder="username"
            onChange={({ target }) =>
              setState({ ...state, username: target.value })
            }
          />
          <Input
            placeholder="email"
            onChange={({ target }) =>
              setState({ ...state, email: target.value })
            }
          />
          <Input
            placeholder="password"
            onChange={({ target }) =>
              setState({ ...state, password: target.value })
            }
            type="password"
          />
          <Input
            placeholder="confirm password"
            onChange={({ target }) =>
              setState({ ...state, confirmPass: target.value })
            }
            type="password"
          />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
