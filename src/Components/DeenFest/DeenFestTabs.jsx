import React from "react";
import { Button, ButtonGroup } from "@mui/material";

function DeenFestTabs({ setCurrentTab }) {
  const changeTab = (tabId) => {
    setCurrentTab(tabId);
  };

  return (
    <div className="flex items-center justify-center pt-20">
      <ButtonGroup variant="outlined">
        <Button onClick={() => changeTab("day1")}>Day 1</Button>
        <Button onClick={() => changeTab("day2")}>Day 2</Button>
      </ButtonGroup>
    </div>
  );
}

export default DeenFestTabs;
