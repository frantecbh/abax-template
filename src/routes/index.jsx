import { Route, Routes } from 'react-router-dom'
import { SingIn } from '../pages/SingIn'
import { Dashboard } from '../pages/Dashboard'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<SingIn />} />
      <Route path="dashboard" element={<Dashboard />} />
    </Routes>
  )
}
