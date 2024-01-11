"use client";

import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Textarea,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

import { toggleAddContactModal } from "@/redux/slice/modalsSlice";
import BanklessInput from "../ui/BanklessInput";
import BanklessTextarea from "../ui/BanklessTextarea";
import RippleButton from "../ui/buttons/RippleButton";

const AddToContactsModal = () => {
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
            type={"text"}
            id={"pushAddress"}
            label="Address"
            placeholder={"0x9621ouIzLAa9F4f3f7bB8aDdFb8C0"}
            required
          />

          <BanklessTextarea
            id={"pushConnectionMessage"}
            label="Connection Message"
            placeholder={"Hey, I want to connect with you."}
            required
          />
        </div>
      </DialogBody>

      <DialogFooter className="space-x-2">
        <Button variant="outlined" color="red">
          cancel
        </Button>

        <Button
          variant="gradient"
          color="gray"
          onClick={handleSendRequest}
          className=""
        >
          send request
        </Button>
      </DialogFooter>
    </Dialog>
  );
};

export default AddToContactsModal;
