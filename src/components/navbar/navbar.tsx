
import {Links} from './links'
import PxioLogo from './pxio-logo'


export const Navbar = () => {
  return (
    <div className="w-full h-20 bg-red-600 rounded-lg sticky top-0">
      <div className="container mx-auto px-4 h-full">
        <div className="flex justify-between items-center h-full">
          <PxioLogo/> 
            <div>
              <Links/>
            </div>
        </div>
      </div>
    </div>  
  )
}