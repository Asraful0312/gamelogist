import { useEffect, useState } from "react";
import { Input } from "../../ui/input";
import Genres from "./Genres";
import Platforms from "./Platforms";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getSearchTerms } from "@/features/search/searchSlice";

const SideBar = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const [isExpend, setIsExpend] = useState(false);
  const [searchTerms, setSearchTerms] = useState("");

  useEffect(() => {
    dispatch(getSearchTerms(""));
  }, [location.pathname]);

  return (
    <aside
      className={`w-full lg:w-1/4 border border-white/15 rounded-xl px-5 py-7  lg:h-full overflow-hidden relative bg-black  ${
        isExpend ? "h-full" : "h-[135px]"
      }`}
    >

      {/* SIDE BAR ITEMS */}
      <div className="space-y-10">
        <Input
          value={searchTerms}
          onChange={(e) => {
            setSearchTerms(e.target.value);
            dispatch(getSearchTerms(e.target.value));
          }}
          className="border-white/40 border-b-2 focus:border-b-lightBlue transition-all duration-300 focus:ring-0"
          placeholder="Find a game"
        />
        {!isExpend && (
          <p
            onClick={() => setIsExpend(true)}
            className="text-center lg:hidden  cursor-pointer text-muted-foreground"
          >
            Click for more Options
          </p>
        )}

        <div>
          <Link to="/games">
            <Button variant="secondary" className="mb-6">
              Reset Filters
            </Button>
          </Link>
          {/* GENRES */}
          <Genres />
        </div>

        {/* PLATFORMS */}
        <Platforms />
      </div>

      {isExpend && (
        <p
          onClick={() => setIsExpend(false)}
          className="text-center lg:hidden mt-5 text-muted-foreground cursor-pointer"
        >
          Click to Close
        </p>
      )}
    </aside>
  );
};

export default SideBar;
