import { Outlet } from "react-router";
import { Header } from "./Header";
import { toast } from 'react-toastify';
import { motion } from "framer-motion";

const divVariants = {
  hidden: {
    y: -200,
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.5
    }
  }
}

export const Content = () => (
  <>
    <Header />
    <Outlet />

    <motion.div
      style={{
        display: 'flex',
        paddingTop: 200,
        justifyContent: 'center',
        gap: 20
      }}
      initial="hidden"
      animate="visible"
      variants={divVariants}
    >
      <button onClick={() => toast.success('Success')}>Success</button>
      <button onClick={() => toast.info('Info')}>Info</button>
      <button onClick={() => toast.warning('Warning')}>Warning</button>
      <button onClick={() => toast.error('Error')}>Error</button>
    </motion.div>
  </>
)

