const LoginLayout = ({children}: {children: React.ReactNode}) => {
  return (
    // <div className="flex h-full items-center justify-center md:h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
    <div className="flex h-full items-center justify-center md:h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-100 to-gray-400">
      {children}
    </div>
  )
}

export default LoginLayout;