"use client";

import { Check, ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useEffect, useState } from "react";

type Option = {
  value: string;
  label: string;
};

type AutocompleteProps = {
  options: Option[];
  placeholder?: string;
  label?: string;
  className?: string;
  onSelect: (value: string) => void;
  selectedValue?: string;
  error?: string;
};

const Autocomplete = ({
  options,
  placeholder = "Select option...",
  label,
  className,
  onSelect,
  selectedValue,
  error,
}: AutocompleteProps) => {
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [filteredOptions, setFilteredOptions] = useState(options);

  useEffect(() => {
    // Filter options based on input value
    const lowercasedInput = inputValue.toLowerCase();

    setFilteredOptions(
      options.filter((option) =>
        option.label.toLowerCase().includes(lowercasedInput)
      )
    );
  }, [inputValue, options]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-label="Select option"
          aria-expanded={open}
          className={cn(
            "w-[200px] justify-between pl-3",
            error ? " border border-red-500" : " border-0",
            className
          )}
        >
          {selectedValue ? (
            <p className="font-normal">
              {options.find((option) => option.value === selectedValue)?.label}
            </p>
          ) : (
            <p className="text-[#78716C] font-normal">{placeholder}</p>
          )}
          <ChevronDown
            className={`opacity-50  ${
              error ? "text-red-500" : "text-[#78716C]"
            }`}
          />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0 z-[9999]" align="start">
        <Command>
          <CommandInput
            value={inputValue}
            onValueChange={(value: string) => setInputValue(value)}
            placeholder={`Search ${label || "option"}...`}
          />
          <CommandList>
            {filteredOptions.length === 0 ? (
              <CommandEmpty>No {label || "option"} found.</CommandEmpty>
            ) : (
              <CommandGroup>
                {filteredOptions.map((option) => (
                  <CommandItem
                    key={option.value}
                    value={option.label}
                    onSelect={() => {
                      onSelect(option.value);
                      setOpen(false);
                      setInputValue("");
                    }}
                  >
                    {option.label}
                    <Check
                      className={cn(
                        "ml-auto",
                        selectedValue === option.value
                          ? "opacity-100"
                          : "opacity-0"
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            )}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
export default Autocomplete;
