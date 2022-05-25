import { useEthers, useContractCall } from "@usedapp/core";
import netmap from "../chain-info/deployments/map.json";
import { constants } from "ethers";
import { formatUnits } from "@ethersproject/units";
import { Button } from "@material-ui/core";
import { useVote } from "../hooks/useVote";
import VotepercentageBar from "./VotepercentageBar";
import { utils } from "ethers";
// import Card from '@material-ui/core/Card';
import MediaCard from "./ModifiedCard";
import { makeStyles } from '@material-ui/core/styles';

import Vote from "../chain-info/contracts/Vote.json";
import  Stepper  from "./stepper";
// import Test_try from "../chain-info/contracts/test_try.json";



const useStyles = makeStyles({
    root: {
        display: 'flex',
        justifyContent:'space-evenly',
        flexWrap: 'wrap'
      
    },
 
  });




export const PageVote = () => {
  const classes = useStyles();
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
      method: "getCandidateArray",
      args: [],
    }) ?? [];



  if (value2) {
    return (
        <div className={classes.root} >
        {value2.map((e: any,index:number) => {
          return <MediaCard name={e.name} index={index}/>;
        })}
      </div>
    );
  }

  return (
    <div>
      <h3>
      Either no candiates to vote for  or You haven't connected your wallet
      </h3>
            
      <div>{`your account is : ${acc}`}</div>
    </div>
  );
};
export const PageResults = () => {
  const classes = useStyles();
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
      method: "getCandidateArray",
      args: [],
    }) ?? [];

    const [Totalvote] =
    useContractCall({
      abi: Contract_Interface,
      address: contract_address,
      method: "total_voters",
      args: [],
    }) ?? [];
    // console.log(Totalvote)


     const Tv: number = Totalvote ? parseInt(formatUnits(Totalvote, 0)) : 0;
    
if (value2) {
    return (
        <div  >
        {value2.map((e: any) => {  
          let vc: number = value2 ? parseInt(formatUnits(e.voteCount, 0)) : 0
            

          return(
              <div>
                  <h2>{e.name}</h2>
                  
                  <VotepercentageBar totalV={Tv} voteC={vc}/>
              </div>
          ) ;
        })}

        


      </div>
    );
  }

    

  return (<div>
    <h3>
    Either no candiates   or You haven't connected your wallet
    </h3>
          
    <div>{`your account is : ${acc}`}</div>
  </div>);
};

export const AdminPage = () => {
  //input accounts,start,candidates
  return (
    <div>
      <Stepper/>
    </div>
  );
};
