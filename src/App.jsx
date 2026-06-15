import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'
function App() {
  return (
    <>
      <div className="flex min-h-screen overflow-hidden">
        <Sidebar />
        <main className="main flex-1 overflow-y-auto h-screen">
          <Header />
           <Dashboard/>
        </main>
      </div>
    </>
  )
}

export default App