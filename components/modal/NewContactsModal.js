"use client";

import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

import { toggleAddContactModal } from "@/redux/slice/modalsSlice";

import BanklessInput from "../ui/BanklessInput";
import BanklessTextarea from "../ui/BanklessTextarea";
import { DefaultButton } from "../ui/buttons/DefaultButton";

const NewContactsModal = () => {
  const dispatch = useDispatch();

  const open = useSelector((state) => state.modals.openAddContact);
  const pushSign = useSelector((state) => state.push.pushSign);

  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");

  const handleOpen = () => {
    dispatch(toggleAddContactModal(!open));
  };

  const handleSendRequest = async () => {
    if (!address) {
      toast.error("Address is required");
      return;
    }

    if (!message) {
      toast.error("Message is required");
      return;
    }

    await pushSign.chat.send(address, {
      type: "Text",
      content: message,
    });

    dispatch(toggleAddContactModal(false));
    toast.success("Request sent successfully");

    setAddress("");
    setMessage("");
  };

  return (
    <Dialog open={open} size="xs" handler={handleOpen} className="bg-gray-900">
      <DialogHeader className="flex items-center justify-between text-white">
        <h3 className="mb-1">New message to @</h3>

        <XMarkIcon
          className="h-6 w-6 cursor-pointer"
          onClick={() => dispatch(toggleAddContactModal(false))}
        />
      </DialogHeader>

      <DialogBody>
        <p className="-mt-7 mb-10 max-w-[70%] text-sm text-gray-300">
          Write the Address and a Connect message to send request.
        </p>

        <div className="grid gap-6">
          <BanklessInput
            id={"pushAddress"}
            type={"text"}
            label="Address"
            input={address}
            setInput={setAddress}
            placeholder={"0x9621ouIzLAa9F4f3f7bB8aDdFb8C0"}
            required={true}
          />

          <BanklessTextarea
            id={"pushConnectionMessage"}
            input={message}
            setInput={setMessage}
            label="Connection Message"
            placeholder={"Hey, I want to connect with you."}
            required={true}
          />
        </div>
      </DialogBody>

      <DialogFooter className="space-x-2">
        <DefaultButton
          variant="outlined"
          color="red"
          style="uppercase"
          onClick={handleOpen}
        >
          Cancel
        </DefaultButton>

        <DefaultButton
          style="uppercase bg-gradient-primary text-white"
          onClick={handleSendRequest}
        >
          Send Request
        </DefaultButton>
      </DialogFooter>
    </Dialog>
  );
};

export default NewContactsModal;
