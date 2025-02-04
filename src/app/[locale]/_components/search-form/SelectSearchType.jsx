"use client";
import { useState, Fragment, useEffect } from "react";
import { Listbox, Transition } from "@headlessui/react";
import CheckedIcon from "@/src/app/[locale]/_components/icons/CheckedIcon";
import ChevronUpDown from "@/src/app/[locale]/_components/icons/ChevronUpDown";

export default function CustomSelect({ options, name, id, label, placeholder }) {

    const initialOption = { id: "", name: placeholder };
    const [selected, setSelected] = useState(initialOption);

    useEffect(() => {
        if (options && options.length > 0 && !options.some((opt) => opt.id === selected.id)) {
            setSelected(initialOption);
        }
    }, [options]);


    return (
        <div className="w-full flex flex-col gap-[5px]">
            <input type="hidden" name={name} value={selected.value || ""} />
            <label htmlFor={id} className="text-base">
                {label}
            </label>
            <Listbox value={selected} onChange={setSelected} id="taxon_rank">
                <div className="relative mt-1">
                    <Listbox.Button
                        id={id}
                        className={`relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left border truncate ${selected.id === "" ? "text-gray-400" : "text-black"
                            } focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600`}
                    >
                        <span>{selected.name}</span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                            <ChevronUpDown width="15" height="15" className="h-5 w-5 text-gray-400" aria-hidden="true" />
                        </span>
                    </Listbox.Button>

                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Listbox.Options className="absolute mt-1 max-h-64 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            {[initialOption, ...options].map((option) => (
                                <Listbox.Option
                                    key={option.id || option.name}
                                    value={option}
                                    className={({ active }) =>
                                        `relative cursor-default select-none py-2 pl-10 pr-4 line-clamp-1 ${active ? "bg-teal-600 !text-white" : "text-gray-900"
                                        }`
                                    }
                                >
                                    {({ selected, active }) => (
                                        <>
                                            <span
                                                className={`block truncate ${active ? "text-white" : "text-gray-900"
                                                    } ${selected ? "font-medium" : "font-normal"}`}
                                            >
                                                {option.name}
                                            </span>
                                            {selected && option.id !== "" && (
                                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-white">
                                                    <CheckedIcon width="15" height="15" aria-hidden="true" />
                                                </span>
                                            )}
                                        </>
                                    )}
                                </Listbox.Option>
                            ))}
                        </Listbox.Options>
                    </Transition>
                </div>
            </Listbox>
        </div>
    );
}
