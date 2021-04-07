import React, { useEffect } from "react";
import DropdownMenu from "../../components/Dropdown";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchRetailers,
  selectAllRetailers,
} from "../../features/retailers/retailersSlice";

const RetailersForm = () => {
  const dispatch = useDispatch();
  const retailers = useSelector(selectAllRetailers);
  const retailersStatus = useSelector((state) => state.retailers.status);

  useEffect(() => {
    if (retailersStatus === "idle") {
      dispatch(fetchRetailers());
    }
  }, [retailersStatus, dispatch]);

  console.log(retailers, "RETAILERS");

  return (
    <div>
      {retailersStatus === "loading" ? (
        <div>Loading</div>
      ) : (
        <DropdownMenu retailers={retailers} />
      )}
    </div>
  );
};

export default RetailersForm;
