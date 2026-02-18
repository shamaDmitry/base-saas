import {
  columns,
  Customer,
  CustomersTable,
} from "@/components/custom/Customers/CustomersTable";
import Heading from "@/components/custom/Heading";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";

async function getData(): Promise<Customer[]> {
  return [
    {
      id: "1",
      firstName: "John",
      lastName: "Deo",
      email: "johndoe2211@gmail.com",
      phone: "+33757005467",
      gender: "Male",
      avatarUrl: "https://placehold.co/100x100/png?text=JD",
    },
    {
      id: "2",
      firstName: "Shelby",
      lastName: "Goode",
      email: "shelbygoode481@gmail.com",
      phone: "+33757005467",
      gender: "Female",
      avatarUrl: "https://placehold.co/100x100/png?text=SG",
    },
    {
      id: "3",
      firstName: "Robert",
      lastName: "Bacins",
      email: "robertbacins4182@com",
      phone: "+33757005467",
      gender: "Male",
      avatarUrl: "https://placehold.co/100x100/png?text=RB",
    },
    // ... add more data
  ];
}

const CustomersLayout = async ({ children }: { children: React.ReactNode }) => {
  const data = await getData();

  return (
    <div className="flex items-start">
      <div className="flex-1">
        <div className="flex items-center justify-between mb-7.5">
          <Heading className="">Customer List</Heading>

          <div className="">
            <Button asChild>
              <Link href="/customers/add">
                <Plus />
                Add Customer
              </Link>
            </Button>
          </div>
        </div>

        <div className="flex flex-col gap-7.5">
          <CustomersTable data={data} columns={columns} />
        </div>
      </div>

      {children}
    </div>
  );
};

export default CustomersLayout;
