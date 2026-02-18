import React from "react";
import { X, Camera } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";

const AddCustomerForm = () => {
  return (
    <Card className="w-full max-w-md mx-auto border-none shadow-lg rounded-2xl bg-white">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-xl font-bold text-gray-900">
          Add Customer
        </CardTitle>

        <Button
          asChild
          variant="ghost"
          size="icon"
          className="h-8 w-8 rounded-full bg-red-50 hover:bg-red-100 text-red-500"
        >
          <Link href="/customers">
            <X className="h-4 w-4" />
          </Link>
        </Button>
      </CardHeader>

      <CardContent className="space-y-6">
        <div className="flex justify-center py-4">
          <div className="relative group cursor-pointer">
            <div className="h-24 w-24 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-200 transition-colors">
              <Camera className="h-8 w-8" />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="firstName" className="text-gray-700 font-medium">
              First Name
            </Label>
            <Input
              id="firstName"
              placeholder="John"
              className="bg-gray-50 border-transparent focus-visible:ring-indigo-500 text-gray-700 h-11"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="lastName" className="text-gray-700 font-medium">
              Last Name
            </Label>
            <Input
              id="lastName"
              placeholder="Deo"
              className="bg-gray-50 border-transparent focus-visible:ring-indigo-500 text-gray-700 h-11"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-gray-700 font-medium">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Example@gmail.com"
              className="bg-gray-50 border-transparent focus-visible:ring-indigo-500 text-gray-700 h-11"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="text-gray-700 font-medium">
              Phone Number
            </Label>
            <Input
              id="phone"
              type="tel"
              placeholder="33757005467"
              className="bg-gray-50 border-transparent focus-visible:ring-indigo-500 text-gray-700 h-11"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="gender" className="text-gray-700 font-medium">
              Gender
            </Label>
            <Select defaultValue="male">
              <SelectTrigger className="bg-gray-50 border-transparent focus:ring-indigo-500 text-gray-700 h-11 w-full">
                <SelectValue placeholder="Select gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Button className="w-full h-11 bg-[#5569ff] hover:bg-[#4458ee] text-white font-medium text-base rounded-lg mt-4 shadow-sm shadow-blue-200">
          Add Customer
        </Button>
      </CardContent>
    </Card>
  );
};

export default AddCustomerForm;
