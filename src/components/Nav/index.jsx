import { useState, useEffect } from "react";
import { Input } from "antd";
import { CiSearch } from "react-icons/ci";
import { SlSettings } from "react-icons/sl";
import { GoGift } from "react-icons/go";
import { BsChatText } from "react-icons/bs";
import { VscBell } from "react-icons/vsc";
import { searchQuery } from "../../api";

export default function Nav() {
  const [results, setResults] = useState(null);

  const searchEngine = async (e) => {
    if (!e.target.value) {
      return;
    }
    await searchQuery(e.target.value).then((res) => console.log(res));
  }

  useEffect(() => {
    console.log("results log: " + results)
  }, [results])
  
  return (
    <nav className="nav | flex justify-between items-center mt-10">
      <div className="left">
        <h2 className="font-bold text-4xl">Wallet</h2>
      </div>
      <div className="right | flex gap-12 items-center">
        <div>
          <div className="search | bg-[rgba(0,0,0,.04)] rounded-md h-min relative">
            <Input
              placeholder="Search"
              prefix={<CiSearch size={20} />}
              bordered={false}
              onChange={(e) => searchEngine(e)}
            />
            {/* <div className="search-engine | flex flex-col gap-2 absolute">
              {results.map(
                (item, i) =>
                  i <= 10 && <p key={i}>{`result: ${item.description}`}</p>
              )}
            </div> */}
          </div>
        </div>
        <ul className="links | flex gap-8 items-center">
          <li>
            <VscBell size={17} />
          </li>
          <li>
            <BsChatText size={17} />
          </li>
          <li>
            <GoGift size={17} />
          </li>
          <li>
            <SlSettings size={17} />
          </li>
        </ul>
      </div>
    </nav>
  );
}
