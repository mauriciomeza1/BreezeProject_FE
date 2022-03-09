import { Outlet } from "react-router-dom";

import NewHeader from './NewHeader'
import Footer from './Footer'

export default function Layout() {
  return (
    <>
        <NewHeader />
          <Outlet />
        <Footer />
    </>
  )
}
