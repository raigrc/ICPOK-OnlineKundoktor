import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast, useToast  } from "@/components/ui/use-toast";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";

//form validation for first passenger only
const FormSchema = z.object({
  seats: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  firstname1: z.string().min(2, {
    message: "Firstname must be at least 2 characters.",
  }),
  middlename1: z.string().min(2, {
    message: "Middlename must be at least 2 characters.",
  }),
  lastname1: z.string().min(2, {
    message: "Lastname must be at least 2 characters.",
  }),
  discounts1: z.enum(["None", "Student", "Senior Citizen", "PWD"]),
});

interface Passengers {
  id: number;
}

const passenger: Passengers[] = [{ id: 1 }, { id: 2 }, { id: 3 }];

const PassengersInfo: React.FC = () => {
  const [selectedDiscounts, setSelectedDiscounts] = useState<Array<string>>([
    "",
  ]);
  const { toast } = useToast();

  //form default values
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      seats: "",
      firstname1: "",
      middlename1: "",
      lastname1: "",
      discounts1: "None",
    },
  });

  const handleDiscountChange = (index: number, value: string) => {
    const newSelectedDiscounts = [...selectedDiscounts];
    newSelectedDiscounts[index] = value;
    setSelectedDiscounts(newSelectedDiscounts);
  };

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }
  return (
    <div className="flex w-full max-w-screen-xl mx-auto space-x-3">
      <div className="w-3/4 py-3 space-y-3">
        <Card>
          <CardHeader className="border-b-2 border-primary">
            <CardTitle>Choose your seat(s)</CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                  control={form.control}
                  name="seats"
                  render={({ field }) => (
                    <FormItem className="relative flex items-center space-x-2">
                      <FormLabel className="absolute -translate-y-1/2 top-1/2 left-4">
                        Seat(s):
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="pl-[4.5rem]"
                          placeholder="Choose your seat(s)"
                          {...field}
                        />
                      </FormControl>
                      <Button type="submit">Choose</Button>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </form>
            </Form>
          </CardContent>
        </Card>

        {passenger.map((passenger) => (
          <div>
            <Card key={passenger.id}>
              <CardHeader className="border-b-2 border-primary">
                <CardTitle className="flex flex-row items-center">
                  Passenger #{passenger.id}
                  <Badge variant="green">
                    {selectedDiscounts[passenger.id]}
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField
                      control={form.control}
                      name={`firstname${passenger.id}`}
                      render={({ field }) => (
                        <FormItem className="relative">
                          <FormLabel className="absolute -translate-y-1/2 top-1/2 left-4">
                            Firstname:
                          </FormLabel>
                          <FormControl>
                            <Input
                              className="pl-[7.5rem]"
                              placeholder="First Name"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name={`middlename${passenger.id}`}
                      render={({ field }) => (
                        <FormItem className="relative">
                          <FormLabel className="absolute -translate-y-1/2 top-1/2 left-4">
                            Middlename:
                          </FormLabel>
                          <FormControl>
                            <Input
                              className="pl-[7.5rem]"
                              placeholder="Middle Name"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name={`lastname${passenger.id}`}
                      render={({ field }) => (
                        <FormItem className="relative">
                          <FormLabel className="absolute -translate-y-1/2 top-1/2 left-4">
                            Lastname:
                          </FormLabel>
                          <FormControl>
                            <Input
                              className="pl-[7.5rem]"
                              placeholder="Last Name"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name={`discounts${passenger.id}`}
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <RadioGroup
                              onValueChange={(value) =>
                                handleDiscountChange(passenger.id, value)
                              }
                              value={selectedDiscounts[passenger.id]}
                              defaultValue=""
                              className="flex flex-row justify-end space-x-2"
                            >
                              <FormItem className="flex flex-row items-center space-x-1">
                                <FormControl className="space-x-2">
                                  <RadioGroupItem
                                    value="Student"
                                    id={`student${passenger.id}`}
                                  />
                                </FormControl>
                                <Label htmlFor={`student${passenger.id}`}>
                                  Student
                                </Label>
                              </FormItem>
                              <FormItem className="flex flex-row items-center space-x-1">
                                <FormControl className="space-x-2">
                                  <RadioGroupItem
                                    value="Senior Citizen"
                                    id={`senior-citizen${passenger.id}`}
                                  />
                                </FormControl>
                                <Label
                                  htmlFor={`senior-citizen${passenger.id}`}
                                >
                                  Senior Citizen
                                </Label>
                              </FormItem>
                              <FormItem className="flex flex-row items-center space-x-1">
                                <FormControl className="space-x-2">
                                  <RadioGroupItem
                                    value="PWD"
                                    id={`pwd${passenger.id}`}
                                  />
                                </FormControl>
                                <Label htmlFor={`pwd${passenger.id}`}>
                                  PWD{" "}
                                  <span className="text-sm">
                                    (Person With Disablities)
                                  </span>
                                </Label>
                              </FormItem>
                            </RadioGroup>
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        ))}
        <div className="flex items-center justify-end py-6 space-x-2">
          <Button variant="outline">Back</Button>
          <Button>Submit</Button>
        </div>
      </div>

      <div className="w-1/4 py-3 ">
        <Card className="sticky top-2">
          <CardHeader className="border-b-2 border-primary">
            <CardTitle>Receipt</CardTitle>
          </CardHeader>
          <CardContent className="h-56">
            <div className="flex flex-row items-center justify-between flex-1">
              <h3>Tickets</h3>
              <div className="flex items-center justify-between w-1/4">
                <p>&#8369;</p>
                <p>999.00</p>
              </div>
            </div>
            <div className="flex flex-row items-center justify-between flex-1">
              <h3>Taxes</h3>
              <div className="flex items-center justify-between w-1/4">
                <p>&#8369;</p>
                <p>50.00</p>
              </div>
            </div>
            <div className="flex flex-row items-center justify-between flex-1">
              <h3>Discount</h3>
              <div className="flex items-center justify-between w-1/4 text-green-400">
                <p>&#8369;</p>
                <p>-50.00</p>
              </div>
            </div>
          </CardContent>
          <CardFooter className="border-t-2 border-primary">
            <div className="flex flex-row items-center justify-between flex-1">
              <h3>Total</h3>
              <div className="flex items-center justify-between w-1/4">
                <p>&#8369;</p>
                <p>999.00</p>
              </div>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default PassengersInfo;
