import { getMasterChefContract, getSushiContract, getXSushiStakingContract } from "../sushi/utils";
import { useCallback, useEffect, useState } from "react";

import BigNumber from "bignumber.js";
import { Contract } from "web3-eth-contract";
import { getAllowance } from "../utils/erc20";
import { provider } from "web3-core";
import useSushi from "./useSushi";
import { useWallet } from "use-wallet";

const useAllowanceStaking = () => {
  const [allowance, setAllowance] = useState(new BigNumber(0));
  const { account } = useWallet();
  const sushi = useSushi();
  const lpContract = getSushiContract(sushi);
  const stakingContract = getXSushiStakingContract(sushi);

  const fetchAllowance = useCallback(async () => {
    if (account) {
      const allowance = await getAllowance(lpContract, account, stakingContract.options.address);
      setAllowance(new BigNumber(allowance));
    }
  }, [account, stakingContract, lpContract]);

  useEffect(() => {
    if (account && stakingContract && lpContract) {
      fetchAllowance();
    }
    let refreshInterval = setInterval(fetchAllowance, 10000);
    return () => clearInterval(refreshInterval);
  }, [account, stakingContract, lpContract]);

  return allowance;
};

export default useAllowanceStaking;
