import { EventType, Listener } from "@ethersproject/abstract-provider";

interface JsonRPCRequest {
  jsonrpc: string;
  method: string;
  params: any[];
  id: number;
}

interface JsonRPCResponse {
  jsonrpc: string;
  id: number;
  result?: any;
  error?: string;
}

interface Callback<ResultType> {
  (error: Error): void;
  (error: null, val: ResultType): void;
}

interface RequestArguments {
  method: string;
  params?: unknown[] | object;
}

export default interface Ethereum {
  isMetaMask?: boolean;
  isWalletConnect?: boolean;
  disconnect?: () => Promise<void>;
  send(payload: any, callback: any): any;
  send(payload: JsonRPCRequest, callback: Callback<JsonRPCResponse>): any;
  request(args: RequestArguments): Promise<any>;
  on(eventName: EventType, listener: Listener): any;
  off(eventName: EventType, listener: Listener): any;
  removeListener(eventName: EventType, listener: Listener): any;
}

declare global {
  interface Window {
    //@ts-ignore
    ethereum?: Ethereum;
  }
}
