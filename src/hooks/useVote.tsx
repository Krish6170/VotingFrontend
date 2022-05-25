
import {  useEffect, useState } from "react"
import { useEthers, useContractFunction } from "@usedapp/core"
import { constants, utils } from "ethers"

// import Test_try from "../chain-info/contracts/test_try.json"
import Vote from "../chain-info/contracts/Vote.json"
import { Contract } from "@ethersproject/contracts"
import netmap from "../chain-info/deployments/map.json";

export const useVote = () => {

    const { chainId } = useEthers()
    let { abi } = Vote
    let cID=String(chainId)
    const contract_address= chainId ?netmap[cID]["Vote"][0] : constants.AddressZero
    const Contract_Interface = new utils.Interface(abi)
    const Vote_Contract = new Contract(contract_address, Contract_Interface)
    
    
    //creating functions to interact with
    const { send: vote , state: test_win_status } =
    useContractFunction(Vote_Contract, "voteCandidate", {
        transactionName: "win called",
    })

    // const { send: test_increase , state: test_win_status } =
    // useContractFunction(test_try_Contract, "win", {
    //     transactionName: "Win called",
    // })
    // useContractCall({
    //     abi: Contract_Interface,
    //     address: contract_address,
    //     method: 'Increase',
    //     args: [],
    //   } )
    //   function seeWin( ) {
   
    //     return value
    //   }   





 





// wrapper

    const test_call = (index:number) => {
        
        return vote(index)
    }
    useEffect(() => {
        if (test_win_status.status === "Success") {
           console.log("done")
        } else {
            console.log(test_win_status)
        }
    }, [test_win_status])

    return { test_call, test_win_status }




}







export const AddCandidates = () => {

    const { chainId } = useEthers()
    let { abi } = Vote
    let cID=String(chainId)
    const contract_address= chainId ?netmap[cID]["Vote"][0] : constants.AddressZero
    const Contract_Interface = new utils.Interface(abi)
    const Vote_Contract = new Contract(contract_address, Contract_Interface)
    
    
    //creating functions to interact with
    const { send: setaddCandidateBulk , state: addCandidateBulk_status } =
    useContractFunction(Vote_Contract, "addCandidateBulk", {
        transactionName: "addCandidateBulk called",
    })


// wrapper

    const AddBulkCand= (index:Array<string>) => {

        console.log(`from add bulk cand : ${index}`)
        return setaddCandidateBulk(index)
    }
    useEffect(() => {
        if (addCandidateBulk_status.status === "Success") {
           console.log("Add bulk  done")
        } else {
            console.log(setaddCandidateBulk)
        }
    }, [addCandidateBulk_status])

    return { AddBulkCand, addCandidateBulk_status }




}




export const AddVote = () => {

    const { chainId } = useEthers()
    let { abi } = Vote
    let cID=String(chainId)
    const contract_address= chainId ?netmap[cID]["Vote"][0] : constants.AddressZero
    const Contract_Interface = new utils.Interface(abi)
    const Vote_Contract = new Contract(contract_address, Contract_Interface)
    
    
    //creating functions to interact with
    const { send: setaddVoteBulk , state: addCandidateVote_status } =
    useContractFunction(Vote_Contract, "addVoterseBulk", {
        transactionName: "addVoterseBulk called",
    })


// wrapper

    const AddBulkVote= (index:Array<string>) => {

        console.log(`from add bulk vote : ${index}`)
        return setaddVoteBulk(index)
    }
    useEffect(() => {
        if (addCandidateVote_status .status === "Success") {
           console.log("Add bulk vote  done")
        } else {
            console.log(addCandidateVote_status )
        }
    }, [addCandidateVote_status ])

    return { AddBulkVote, addCandidateVote_status  }




}





export const StartVote = () => {

    const { chainId } = useEthers()
    let { abi } = Vote
    let cID=String(chainId)
    const contract_address= chainId ?netmap[cID]["Vote"][0] : constants.AddressZero
    const Contract_Interface = new utils.Interface(abi)
    const Vote_Contract = new Contract(contract_address, Contract_Interface)
    
    
    //creating functions to interact with
    const { send: StartVote , state: StartVote_status } =
    useContractFunction(Vote_Contract, "startVote", {
        transactionName: "start vote called",
    })


// wrapper

    const StartVoting= (index:number) => {

        console.log(`from start : ${index}`)
        return StartVote(index)
    }
    useEffect(() => {
        if (StartVote_status.status === "Success") {
           console.log("Add start vote  done")
        } else {
            console.log(StartVote_status )
        }
    }, [StartVote_status ])

    return {StartVoting,StartVote_status  }




}
