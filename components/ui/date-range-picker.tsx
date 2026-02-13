"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { format } from "date-fns";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Field,
  FieldLabel,
  FieldContent,
  FieldError,
} from "@/components/ui/field";

const dateRangePickerVariants = cva("flex gap-3.75 w-full", {
  variants: {
    orientation: {
      horizontal: "flex-row items-start",
      vertical: "flex-col",
    },
  },
  defaultVariants: {
    orientation: "horizontal",
  },
});

export interface DateRange {
  from: Date | undefined;
  to: Date | undefined;
}

export interface DateRangePickerProps
  extends
    Omit<React.HTMLAttributes<HTMLDivElement>, "onChange">,
    VariantProps<typeof dateRangePickerVariants> {
  value?: DateRange;
  onChange?: (range: DateRange) => void;
  fromLabel?: string;
  toLabel?: string;
  fromPlaceholder?: string;
  toPlaceholder?: string;
  disabled?: boolean;
  error?: string;
}

function DateRangePicker({
  className,
  orientation = "horizontal",
  value,
  onChange,
  fromLabel = "",
  toLabel = "",
  fromPlaceholder = "Pick a start date",
  toPlaceholder = "Pick an end date",
  disabled = false,
  error,
  ...props
}: DateRangePickerProps) {
  const [fromOpen, setFromOpen] = React.useState(false);
  const [toOpen, setToOpen] = React.useState(false);

  const handleFromSelect = (date: Date | undefined) => {
    onChange?.({
      from: date,
      to: value?.to,
    });
    setFromOpen(false);
  };

  const handleToSelect = (date: Date | undefined) => {
    onChange?.({
      from: value?.from,
      to: date,
    });
    setToOpen(false);
  };

  return (
    <div
      data-slot="date-range-picker"
      data-orientation={orientation}
      className={cn(className)}
      {...props}
    >
      <div className={cn(dateRangePickerVariants({ orientation }))}>
        <Field className="flex-1">
          <FieldContent>
            <FieldLabel>{fromLabel}</FieldLabel>
            <Popover open={fromOpen} onOpenChange={setFromOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !value?.from && "text-muted-foreground",
                  )}
                  disabled={disabled}
                >
                  {value?.from ? (
                    format(value.from, "dd-MM-yyyy")
                  ) : (
                    <span>{fromPlaceholder}</span>
                  )}

                  <ChevronDown className="ml-auto" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={value?.from}
                  onSelect={handleFromSelect}
                  disabled={(date) =>
                    disabled || (value?.to ? date > value.to : false)
                  }
                  modifiers={{
                    range_end: value?.to ? [value.to] : [],
                  }}
                  modifiersClassNames={{
                    range_end: "bg-primary/20 text-primary",
                  }}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </FieldContent>
        </Field>

        <Field className="flex-1">
          <FieldContent>
            <FieldLabel>{toLabel}</FieldLabel>
            <Popover open={toOpen} onOpenChange={setToOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !value?.to && "text-muted-foreground",
                  )}
                  disabled={disabled}
                >
                  {value?.to ? (
                    format(value.to, "dd-MM-yyyy")
                  ) : (
                    <span>{toPlaceholder}</span>
                  )}

                  <ChevronDown className="ml-auto" />
                </Button>
              </PopoverTrigger>

              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={value?.to}
                  onSelect={handleToSelect}
                  disabled={(date) =>
                    disabled || (value?.from ? date < value.from : false)
                  }
                  modifiers={{
                    range_start: value?.from ? [value.from] : [],
                  }}
                  modifiersClassNames={{
                    range_start: "bg-primary/20 text-primary",
                  }}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </FieldContent>
        </Field>
      </div>

      {error && <FieldError className="mt-2 text-center"> {error}</FieldError>}
    </div>
  );
}

export { DateRangePicker, dateRangePickerVariants };
