import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

const LoginForm = () => {
  return (
    <div>
      <Field>
        <FieldLabel htmlFor="email">Email Address</FieldLabel>

        <Input id="email" type="text" placeholder="example@gmail.com" />
      </Field>
    </div>
  );
};

export default LoginForm;
