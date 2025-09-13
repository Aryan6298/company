import React from 'react';
import { useMetaMask } from './useMetaMask';

const MetaMaskConnectButton: React.FC = () => {
  const { account, error, isConnecting, connect } = useMetaMask();

  return (
    <div>
      {account ? (
        <div>Connected: {account}</div>
      ) : (
        <button onClick={connect} disabled={isConnecting} style={{ padding: '0.6rem 1.5rem', borderRadius: 8, fontWeight: 600, background: '#f6851b', color: '#fff', border: 'none', fontSize: '1rem', cursor: 'pointer' }}>
          {isConnecting ? 'Connecting...' : 'Connect MetaMask'}
        </button>
      )}
      {error && <div style={{ color: 'red', marginTop: 8 }}>{error}</div>}
    </div>
  );
};

export default MetaMaskConnectButton; 