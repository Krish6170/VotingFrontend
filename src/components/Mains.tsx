import { useEthers } from "@usedapp/core";
import { TabContext, TabList, TabPanel } from "@material-ui/lab";
import { Tab } from "@material-ui/core";
import { Box, Button } from "@material-ui/core";
import { useState } from "react";
import LabTabs from "./tabs";
import {  useContractCall } from "@usedapp/core";
import netmap from "../chain-info/deployments/map.json";
import { constants } from "ethers";
import { utils } from "ethers";


import Vote from "../chain-info/contracts/Vote.json";


export const Main = () => {
  const { chainId,account } = useEthers();
  const acc = account ? account : "no account";
    let cID = String(chainId);
    let { abi } = Vote;
    const contract_address = chainId
      ? netmap[cID]["Vote"][0]
      : constants.AddressZero;
    const Contract_Interface = new utils.Interface(abi);
    const [owner] =
      useContractCall({
        abi: Contract_Interface,
        address: contract_address,
        method: "owner",
        args: [],
      }) ?? [];
  



  const [selectedTokenIndex, setSelectedTokenIndex] = useState<number>(0)
  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setSelectedTokenIndex(parseInt(newValue))
}
  return (
    <Box component="span" m={1}>
      <h1>Voting app</h1>
     
     <h3>{`Contract Creator's Account: ${owner}`}</h3>

{/* tabs */}
        

      {/* <TabContext value={selectedTokenIndex.toString()}>
                    <TabList onChange={handleChange}  aria-label="stake form tabs">
                    <Tab label="vote"
                        value={"0"}
                        key={0} />

                        
                    <Tab label="Results"
                        value={"1"}
                        key={1} />       
                    </TabList>

                    {`your account is : ${acc}`}





        </TabContext>    */}

        <LabTabs vowner={owner}/>         





    </Box>
  );
};
