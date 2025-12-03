import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider } from 'wagmi'
import { config } from '@/lib/wagmi'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { BaseLayout } from './components/layout/BaseLayout'
import { LoginPage } from './components/pages/LoginPage'


// Placeholder Dashboards (We will build these next)
const DonorDashboard = () => <div>Donor Dashboard</div>
const DistributorDashboard = () => <div>Distributor Dashboard</div>

const queryClient = new QueryClient()

function App() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Routes>
            <Route path="/" element={
              <BaseLayout onConnectWallet={() => { }}>
                <LoginPage onStartOnboarding={() => { }} />
              </BaseLayout>
            } />
          </Routes>
        </Router>
      </QueryClientProvider>
    </WagmiProvider>
  )
}

export default App