import { ResizableBox } from 'react-resizable'

const Resizable = ({ direction, children }) => {
  return (
    <ResizableBox height={335} width={Infinity} resizeHandles={['se']}>
      {children}
    </ResizableBox>
  )
}

export default Resizable
