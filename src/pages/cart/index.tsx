import Link from "next/link";
import Button from "@mui/material/Button";
import LoadingButton from "@mui/lab/LoadingButton";
import IconButton from "@mui/material/IconButton";
import Checkbox from "@mui/material/Checkbox";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CancelIcon from "@mui/icons-material/Cancel";
import { useState } from "react";

export const KES = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "KES",
});

const list = [
  {
    name: "Noodle",
    rating: 4,
    reviews: 14,
    price: 55.0,
    size: "500G",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, quasi Lorem ipsum dolor sit amet consectetur adipisicing elit.Vel, recusandae ad praesentium quod culpa nemo Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, quasi Lorem ipsum dolor sit amet consectetur adipisicing elit.Vel, recusandae ad praesentium quod culpa nemo",
  },
  {
    name: "Prestige",
    rating: 4,
    reviews: 14,
    price: 550.0,
    size: "1KG",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, quasi Lorem ipsum dolor sit amet consectetur adipisicing elit.Vel, recusandae ad praesentium quod culpa nemo Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, quasi Lorem ipsum dolor sit amet consectetur adipisicing elit.Vel, recusandae ad praesentium quod culpa nemo",
  },
  {
    name: "Kasuku",
    rating: 4,
    reviews: 14,
    price: 150.0,
    size: "750G",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, quasi Lorem ipsum dolor sit amet consectetur adipisicing elit.Vel, recusandae ad praesentium quod culpa nemo Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, quasi Lorem ipsum dolor sit amet consectetur adipisicing elit.Vel, recusandae ad praesentium quod culpa nemo",
  },
];

export default function () {
  const [loading, setLoading] = useState(true);
  const [checked, setChecked] = useState(true);
  function handleClick() {
    setLoading(!loading);
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  return (
    <section className="flex flex-1 flex-col px-6">
      {/* header */}
      <nav className="my-2 flex justify-between">
        <Link href="/products" className="align-center flex gap-2 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="h-6 w-6 text-primary"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
          <p className="font-semibold text-primary">Back</p>
        </Link>
        {/* favorite */}
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="h-6 w-6 text-primary"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        </span>
      </nav>
      {/* items */}
      {list.map((item) => (
        <div className="my-3 w-full flex-1  py-2">
          <div className="align-center flex w-full py-4">
            <div className="grid place-items-center  ">
              <Checkbox
                className=" my-auto"
                color="primary"
                checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "controlled" }}
              />
            </div>
            <div className="relative  grid h-20 w-5/6 grid-cols-3  rounded-lg bg-white shadow-lg">
              {/* image  */}
              <div className="h-full bg-green-300"></div>
              {/* prod desc */}
              <div className="grid grid-rows-3 justify-center text-center">
                <p className="text-lg font-semibold">{item.name}</p>
                <small className="text-neutral-400">Size:{item.size}</small>
                <p className="text-primary"> {KES.format(item.price)}</p>
              </div>
              {/* quantity */}
              <div className="align-center flex h-full w-full flex-col justify-center px-2">
                <div className=" grid h-1/2 w-full grid-cols-3 overflow-hidden rounded-full  border-2 border-primary px-2 ">
                  <IconButton aria-label="minus">
                    <RemoveIcon />
                  </IconButton>
                  <input type="text" className="h-full" disabled />
                  <IconButton aria-label="add">
                    <AddIcon />
                  </IconButton>
                </div>
              </div>
              {/*  */}
              {/* delete item */}
              <IconButton
                aria-label="add"
                className="absolute right-0 top-0 -translate-y-1/2  translate-x-1/2 "
              >
                <CancelIcon />
              </IconButton>
            </div>
          </div>
        </div>
      ))}

      {/* totals */}
      {/* promo code */}
      <div className="">
        {/* input wrapper */}
        <div className="align-center relative z-0 flex w-full">
          <input
            type="text"
            placeholder="Promo code"
            className="ring-none z-20 w-full rounded-lg border-2 border-neutral-400 py-2 px-2 outline-none"
          />
          <span className="absolute right-5 top-1/2 z-40 my-auto -translate-y-1/2 cursor-pointer">
            <LoadingButton
              style={{ backgroundColor: "#010F8C", color: "#fff" }}
              size="small"
              onClick={handleClick}
              loading={loading}
              variant="outlined"
              disabled
            >
              Apply
            </LoadingButton>
          </span>
        </div>
        <div className="my-4 w-full px-8 text-primary">
          <span className="flex justify-between">
            <p>Sub Total:</p>
            <p>551.00</p>
          </span>
          <span className="flex justify-between">
            <p>Shipping:</p>
            <p>200</p>
          </span>
        </div>
      </div>
      {/* price card */}
      <div className="align-center flex h-16 w-full justify-between rounded-lg bg-primary px-4">
        <div className="my-auto flex flex-col justify-center text-white">
          <small>Total: 3 items</small>
          <p className="text-lg font-bold">KES 750.00</p>
        </div>

        <Link href="/payment" className="my-auto rounded-md bg-white px-2 py-2">
          <p className="font-semibold tracking-normal text-primary">
            Proceed to Checkout
          </p>
        </Link>
      </div>
    </section>
  );
}
