import { FieldLabel } from "@/components/ui/field";

const FormLabel = ({
  children,
  htmlFor,
}: {
  children: React.ReactNode;
  htmlFor: string;
}) => {
  return (
    <FieldLabel htmlFor={htmlFor} className="font-normal text-base">
      {children}
    </FieldLabel>
  );
};

export default FormLabel;
