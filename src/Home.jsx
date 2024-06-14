import React, { useState } from "react";
import { data } from "./data.js";
import { Link, NavLink } from "react-router-dom";

const Home = ({handleClick , setShow}) => {
  const [search, setSearch] = useState("");
  
  return (
    <>
      <div className=" w-full bg-zinc-600 flex items-center justify-between p-5">
        <div className="font-bold text-2xl">E-com</div>
        <input
          onChange={(e) => setSearch(e.target.value)}
          className="w-[20vw] p-2 border-zinc-900 border-[1px]"
          type="text"
          placeholder="search Products"
        />
        <h1 onClick={() => setShow(false)}>Cart</h1>
      </div>
      <div className="w-full bg-zinc-600 flex flex-wrap gap-[5vw] text-2xl px-[3vw] ">
        {data
          .filter((item) => {
            return search.toLowerCase() === ' '
              ? item
              : item.name.toLowerCase().includes(search);
          })
          .map((item) => (
            <div onClick={() => handleClick(item)} key={item.id}>
              <div className="w-[40vh] h-[40vh]">
                <img
                  className="w-full h-full object-cover"
                  src={item.img}
                  alt=""
                />
              </div>
              <h1 className="text-xl">{item.name}</h1>
              <h3 className="text-sm">{item.price}</h3>
            </div>
          ))}
      </div>
    </>
  );
};

export default Home;
