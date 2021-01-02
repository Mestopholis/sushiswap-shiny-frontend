import { useCallback } from "react";
import useSushi from "../../../services/frontend/hooks/useSushi";
import { useActiveWeb3React } from "../../../services/exchange/hooks";
import { harvest, getMasterChefContract } from "../../../services/frontend/sushi/utils";

const useReward = (pid) => {
  const { account } = useActiveWeb3React();
  const sushi = useSushi();
  const masterChefContract = getMasterChefContract(sushi);
  const handleReward = useCallback(async () => {
    const txHash = await harvest(masterChefContract, pid, account);
    console.log("txHash:", txHash);
    return txHash;
  }, [account, pid, sushi]);
  return { onReward: handleReward };
};
export default useReward;