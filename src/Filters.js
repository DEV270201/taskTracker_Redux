import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Filters = () => {
  const filter = useSelector((state) => state.filters);
  const dispatch = useDispatch();

  const changeFilter = (e) => {
    console.log("changing filters.....");
    dispatch({
      type: "filters/changeValue",
      payload: {
        value: e.target.value,
      },
    });
  };

  return (
    <>
      <div>
        <input type="radio" value="all" onChange={changeFilter} checked={filter.value === 'all'} />
        <span>All</span>
      </div>
      <div>
        <input type="radio" value="active" onChange={changeFilter} checked={filter.value === 'active'} />
        <span>Active</span>
      </div>
      <div>
        <input type="radio" value="complete" onChange={changeFilter} checked={filter.value === 'complete'} />
        <span>Completed</span>
      </div>
    </>
  );
};

export default Filters;
