import React from "react";
import { Button, ButtonGroup } from "@mui/material";

function DeenFestTabs({ setCurrentTab, currentTab }) {
  const changeTab = (tabId) => {
    setCurrentTab(tabId);
  };

  return (
    <>
      <div className="flex items-center justify-center pt-20">
        <ButtonGroup variant="outlined">
          <Button onClick={() => changeTab("day1")}>Day 1</Button>
          <Button onClick={() => changeTab("day2")}>Day 2</Button>
        </ButtonGroup>
      </div>

      <div className="p-4">
        {currentTab === "day1" && <DeenFestTimeLine eventData={day1Events} />}
        {currentTab === "day2" && <DeenFestTimeLine eventData={day2Events} />}
      </div>
    </>
  );
}

export default DeenFestTabs;
