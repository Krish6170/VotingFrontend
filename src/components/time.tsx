import { useEthers, useContractCall } from "@usedapp/core";
import netmap from "../chain-info/deployments/map.json";
import { constants } from "ethers";

import { utils } from "ethers";


import Vote from "../chain-info/contracts/Vote.json";

// import { time } from "console";


export const VInfo = () => {
    
    const { chainId, account } = useEthers();
    const acc = account ? account : "no account";
    let cID = String(chainId);
    let { abi } = Vote;
    const contract_address = chainId
      ? netmap[cID]["Vote"][0]
      : constants.AddressZero;
    const Contract_Interface = new utils.Interface(abi);
    const [value2] =
      useContractCall({
        abi: Contract_Interface,
        address: contract_address,
        method: "timeleft",
        args: [],
      }) ?? [];
  
    let timeShow=(value2>=0)? value2: 0
  
    if (value2) {
      return (
          <div  >
        <div>{`your account is : ${acc}`}</div>
        <div>{`timeleft : ${timeShow}`}</div>

        </div>
      );
    }
  
    return (
      <div>
                
      </div>
    );
  };