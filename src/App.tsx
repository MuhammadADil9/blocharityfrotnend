import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider } from 'wagmi'
import { config } from '@/lib/wagmi'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '@/pages/Home'

// Placeholder Dashboards (We will build these next)
const DonorDashboard = () => <div>Donor Dashboard</div>
const DistributorDashboard = () => <div>Distributor Dashboard</div>

const queryClient = new QueryClient()

function App() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <Router>
          <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/donor" element={<DonorDashboard />} />
              <Route path="/distributor" element={<DistributorDashboard />} />
            </Routes>
          </div>
        </Router>
      </QueryClientProvider>
    </WagmiProvider>
  )
}

export default App