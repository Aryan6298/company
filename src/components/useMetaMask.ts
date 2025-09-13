import { useState } from 'react';

export function useMetaMask() {
  const [account, setAccount] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isConnecting, setIsConnecting] = useState(false);

  const connect = async () => {
    setIsConnecting(true);
    setError(null);
    try {
      if (!(window as any).ethereum) {
        setError('MetaMask is not installed');
        setIsConnecting(false);
        return;
      }
      const accounts = await (window as any).ethereum.request({ method: 'eth_requestAccounts' });
      setAccount(accounts[0]);
    } catch (err: any) {
      setError(err.message || 'Failed to connect to MetaMask');
    } finally {
      setIsConnecting(false);
    }
  };

  return { account, error, isConnecting, connect };
} 