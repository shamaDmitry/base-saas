"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"
import {
  Field,
  FieldLabel,
  FieldContent,
  FieldError,
} from "@/components/ui/field"

const dateRangePickerVariants = cva(
  "flex gap-4 w-full",
  {
    variants: {
      orientation: {
        horizontal: "flex-row items-start",
        vertical: "flex-col",
      },
    },
    defaultVariants: {
      orientation: "horizontal",
    },
  }
)

export interface DateRange {
  from: Date | undefined
  to: Date | undefined
}

export interface DateRangePickerProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange">,
    VariantProps<typeof dateRangePickerVariants> {
  value?: DateRange
  onChange?: (range: DateRange) => void
  fromLabel?: string
  toLabel?: string
  fromPlaceholder?: string
  toPlaceholder?: string
  disabled?: boolean
  min?: string
  max?: string
  error?: string
}

function DateRangePicker({
  className,
  orientation = "horizontal",
  value,
  onChange,
  fromLabel = "From",
  toLabel = "To",
  fromPlaceholder = "Start date",
  toPlaceholder = "End date",
  disabled = false,
  min,
  max,
  error,
  ...props
}: DateRangePickerProps) {
  // Convert Date objects to string format for input
  const fromValue = value?.from
    ? value.from.toISOString().split("T")[0]
    : ""
  const toValue = value?.to ? value.to.toISOString().split("T")[0] : ""

  const handleFromChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = e.target.value
      ? (() => {
          const [year, month, day] = e.target.value.split("-").map(Number)
          return new Date(year, month - 1, day)
        })()
      : undefined
    onChange?.({
      from: newDate,
      to: value?.to,
    })
  }

  const handleToChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = e.target.value
      ? (() => {
          const [year, month, day] = e.target.value.split("-").map(Number)
          return new Date(year, month - 1, day)
        })()
      : undefined
    onChange?.({
      from: value?.from,
      to: newDate,
    })
  }

  // Calculate dynamic max for "from" input (cannot be after "to" date)
  const fromMax = value?.to ? value.to.toISOString().split("T")[0] : max

  // Calculate dynamic min for "to" input (cannot be before "from" date)
  const toMin = value?.from ? value.from.toISOString().split("T")[0] : min

  return (
    <div
      data-slot="date-range-picker"
      data-orientation={orientation}
      className={cn(dateRangePickerVariants({ orientation }), className)}
      {...props}
    >
      <Field className="flex-1">
        <FieldContent>
          <FieldLabel htmlFor="date-from">{fromLabel}</FieldLabel>
          <Input
            id="date-from"
            type="date"
            value={fromValue}
            onChange={handleFromChange}
            placeholder={fromPlaceholder}
            disabled={disabled}
            min={min}
            max={fromMax}
            aria-invalid={!!error}
          />
        </FieldContent>
      </Field>

      <Field className="flex-1">
        <FieldContent>
          <FieldLabel htmlFor="date-to">{toLabel}</FieldLabel>
          <Input
            id="date-to"
            type="date"
            value={toValue}
            onChange={handleToChange}
            placeholder={toPlaceholder}
            disabled={disabled}
            min={toMin}
            max={max}
            aria-invalid={!!error}
          />
        </FieldContent>
      </Field>

      {error && (
        <FieldError className="mt-2">{error}</FieldError>
      )}
    </div>
  )
}

export { DateRangePicker, dateRangePickerVariants }
