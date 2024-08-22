import { useEffect, useState } from "react";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import SpinnerMini from "../../ui/SpinnerMini";
import FormRowVertical from "../../ui/FormRowVertical";
import { useLogin } from "./useLogin";
import toast from "react-hot-toast";

function LoginForm() {
  const [email, setEmail] = useState("test@test.com");
  const [password, setPassword] = useState("55667788");
  const [notifying, setNotifying] = useState(false);

  const { login, isLoading } = useLogin();

  const notify = () => {
    toast.success(
      "All Create, Update and Delete operations are disabled on this app.",
      {
        autoclose: 5000,
      }
    );
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) {
      return;
    }

    login(
      { email, password },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      }
    );

    setNotifying(true);
  }

  useEffect(() => {
    if (notifying) {
      notify();
    }
    setNotifying(false);
  }, [notifying, setNotifying]);

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <FormRowVertical label="Email address">
          <Input
            type="email"
            id="email"
            // This makes this form better for password managers
            autoComplete="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isLoading}
          />
        </FormRowVertical>
        <FormRowVertical label="Password">
          <Input
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={isLoading}
          />
        </FormRowVertical>
        <FormRowVertical>
          <Button size="large" disabled={isLoading}>
            {!isLoading ? "Login" : <SpinnerMini />}
          </Button>
        </FormRowVertical>
        <FormRowVertical>
          <span>
            A portfolio project developed by the Hamza Bilal
          </span>
        </FormRowVertical>
      </Form>
    </>
  );
}

export default LoginForm;
